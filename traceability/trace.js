// 获取 URL 参数 product
function getParam(name) {
  var url = new URL(window.location.href);
  return url.searchParams.get(name);
}

var productId = getParam('product') || 'rice';

// 加载 JSON 数据
var xhr = new XMLHttpRequest();
xhr.open('GET', 'data/' + productId + '.json');
xhr.onload = function () {
  if (xhr.status === 200) {
    render(JSON.parse(xhr.responseText));
  } else {
    document.getElementById('product-name').textContent = '数据加载失败';
  }
};
xhr.onerror = function () {
  document.getElementById('product-name').textContent = '数据加载失败';
};
xhr.send();

function render(data) {
  // 标题
  document.getElementById('product-name').textContent = data.name;
  document.title = data.name + ' · 循迹悟思想 数智兴农旅';

  // 轮播图
  var track = document.getElementById('swiper-track');
  var dots = document.getElementById('swiper-dots');
  data.images.forEach(function (img, i) {
    var el = document.createElement('img');
    el.src = img;
    el.alt = data.name;
    // 图片加载失败降级
    el.onerror = function () { this.src = '../assets/images/og-cover.svg'; };
    track.appendChild(el);

    var dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dots.appendChild(dot);
  });
  if (data.images.length <= 1) {
    dots.style.display = 'none';
  }

  // 轮播滑动
  (function () {
    var current = 0;
    var total = data.images.length;
    var dotsAll = dots.querySelectorAll('.dot');
    function goTo(idx) {
      current = idx;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dotsAll.forEach(function (d, i) { d.classList.toggle('active', i === current); });
    }
    var startX = 0, endX = 0;
    track.parentElement.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    track.parentElement.addEventListener('touchend', function (e) {
      endX = e.changedTouches[0].clientX;
      var diff = startX - endX;
      if (Math.abs(diff) > 40) {
        if (diff > 0 && current < total - 1) goTo(current + 1);
        else if (diff < 0 && current > 0) goTo(current - 1);
      }
    });
    if (total > 1) {
      setInterval(function () { goTo((current + 1) % total); }, 4000);
    }
  })();

  // 产地信息
  document.getElementById('field-origin').textContent = data.origin;
  document.getElementById('field-gps').textContent =
    '北纬 ' + data.gps.lat.toFixed(4) + '，东经 ' + data.gps.lng.toFixed(4);
  document.getElementById('field-cert').textContent =
    (data.certifications || []).join(' / ') || '暂无';

  // 地图：优先使用高德 JS API，否则降级为 iframe
  var mapContainer = document.getElementById('map-container');
  var mapFallback = document.getElementById('map-fallback');

  // 判断是否为占位数据（整数坐标 = 假数据）
  var isPlaceholder = (data.gps.lat === Math.floor(data.gps.lat) &&
                       data.gps.lng === Math.floor(data.gps.lng));

  function renderMap() {
    // 如果有高德 SDK 且有真实数据，用 JS API
    if (!isPlaceholder && window.AMap && AMAP_CONFIG.key && AMAP_CONFIG.key !== 'YOUR_AMAP_KEY') {
      try {
        var map = new AMap.Map('map-container', {
          zoom: 15,
          center: [data.gps.lng, data.gps.lat],
          resizeEnable: true
        });
        map.addControl(new AMap.Scale());

        var marker = new AMap.Marker({
          map: map,
          position: [data.gps.lng, data.gps.lat],
          title: data.name
        });

        var infoWindow = new AMap.InfoWindow({
          content: '<div style="padding:8px 12px;"><strong>' + data.name +
            '</strong><br><span style="color:#666;font-size:12px;">' +
            data.origin + '</span></div>',
          offset: new AMap.Pixel(0, -30)
        });
        marker.on('click', function () { infoWindow.open(map, marker.getPosition()); });
        infoWindow.open(map, marker.getPosition());

        mapFallback.style.display = 'none';
        return;
      } catch (e) {
        console.warn('地图渲染失败，降级为 iframe: ' + e.message);
      }
    }

    // iframe 降级方案
    var iframe = document.createElement('iframe');
    iframe.src = 'https://uri.amap.com/marker?position=' + data.gps.lng + ',' + data.gps.lat +
      '&name=' + encodeURIComponent(data.name) + '&callnative=1';
    iframe.width = '100%';
    iframe.height = '220';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '8px';
    iframe.onerror = function () { mapFallback.style.display = 'flex'; };
    mapContainer.innerHTML = '';
    mapContainer.appendChild(iframe);
    mapFallback.style.display = 'none';
  }

  // 如果 SDK 已加载就直接渲染，否则等 SDK 加载
  if (window.AMap || !AMAP_CONFIG.key || AMAP_CONFIG.key === 'YOUR_AMAP_KEY') {
    renderMap();
  } else {
    MapModule.loadSDK(renderMap);
  }

  // 生产者
  var avatar = document.getElementById('producer-avatar');
  avatar.src = data.producer.avatar;
  avatar.onerror = function () { this.src = '../assets/images/og-cover.svg'; };
  document.getElementById('producer-name').textContent = data.producer.name;
  document.getElementById('producer-intro').textContent = data.producer.intro;

  // 种养方式
  document.getElementById('field-method').textContent = data.method || '暂无';

  // 产品故事
  document.getElementById('field-story').textContent = data.story || '暂无';

  // 购买链接
  if (data.buyLink) {
    document.getElementById('buy-section').style.display = '';
    document.getElementById('buy-link').href = data.buyLink;
  }

  // 生成溯源二维码（指向当前页面）
  if (typeof QRCode !== 'undefined') {
    var qrContainer = document.getElementById('qrcode-container');
    // 清空旧二维码（如果有）
    qrContainer.innerHTML = '';
    try {
      new QRCode(qrContainer, {
        text: window.location.href,
        width: 150,
        height: 150,
        colorDark: '#333333',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
      });
    } catch (e) {
      qrContainer.innerHTML = '<p style="color:#999;">二维码生成失败</p>';
    }
  }
}
