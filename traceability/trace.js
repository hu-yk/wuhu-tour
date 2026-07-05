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
xhr.send();

function render(data) {
  // 标题
  document.getElementById('product-name').textContent = data.name;
  document.title = data.name + ' · 伍湖农文旅';

  // 轮播图
  var track = document.getElementById('swiper-track');
  var dots = document.getElementById('swiper-dots');
  data.images.forEach(function (img, i) {
    var el = document.createElement('img');
    el.src = img;
    el.alt = data.name;
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
    // 自动播放
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

  // 地图嵌入（使用 GPS 坐标，纯静态方案：iframe 嵌入）
  var lat = data.gps.lat, lng = data.gps.lng;
  var mapContainer = document.getElementById('map-container');
  // 优先用高德地图静态图（无需 API Key，纯图片）
  // 如果有网，尝试加载 iframe 版地图
  var iframe = document.createElement('iframe');
  iframe.src = 'https://uri.amap.com/marker?position=' + lng + ',' + lat +
    '&name=' + encodeURIComponent(data.name) +
    '&callnative=1';
  iframe.width = '100%';
  iframe.height = '220';
  iframe.style.border = 'none';
  iframe.style.borderRadius = '8px';
  iframe.onerror = function () {
    document.getElementById('map-fallback').style.display = 'flex';
  };
  mapContainer.innerHTML = '';
  mapContainer.appendChild(iframe);

  // 生产者
  document.getElementById('producer-avatar').src = data.producer.avatar;
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
  new QRCode(document.getElementById('qrcode-container'), {
    text: window.location.href,
    width: 150,
    height: 150,
    colorDark: '#333333',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.M
  });
}
