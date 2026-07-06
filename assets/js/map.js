// ===== 高德地图共享模块 =====
// 页面需要先加载：高德 JS API + config.js

var MapModule = (function () {
  'use strict';

  var mapInstance = null;
  var loaded = false;
  var loading = false;
  var callbacks = [];

  // 动态加载高德 JS API
  function loadSDK(cb) {
    if (loaded) { cb(); return; }
    if (loading) { callbacks.push(cb); return; }
    loading = true;
    callbacks.push(cb);

    // 安全检查：如果 key 没填，降级显示静态提示
    if (!AMAP_CONFIG.key || AMAP_CONFIG.key === 'YOUR_AMAP_KEY') {
      console.warn('高德地图 Key 未配置，使用静态地图降级方案');
      loaded = true;
      loading = false;
      callbacks.forEach(function (f) { f(); });
      callbacks = [];
      return;
    }

    // 加载安全协议（高德 2.0 要求）
    window._AMapSecurityConfig = { securityJsCode: '' };

    var script = document.createElement('script');
    script.src = 'https://webapi.amap.com/v=' + AMAP_CONFIG.version +
      '/maps?v=' + AMAP_CONFIG.version + '&key=' + AMAP_CONFIG.key +
      '&callback=amapOnLoad';
    script.onerror = function () {
      console.warn('高德地图加载失败，使用降级方案');
      loaded = true;
      loading = false;
      callbacks.forEach(function (f) { f(); });
      callbacks = [];
    };
    window.amapOnLoad = function () {
      loaded = true;
      loading = false;
      callbacks.forEach(function (f) { f(); });
      callbacks = [];
    };
    document.head.appendChild(script);
  }

  // 在容器中初始化地图
  function initMap(containerId, options) {
    var opts = options || {};
    var container = document.getElementById(containerId);
    if (!container) { return null; }

    // 如果 SDK 没加载或 Key 没配，显示静态提示
    if (!loaded || !window.AMap || !AMAP_CONFIG.key || AMAP_CONFIG.key === 'YOUR_AMAP_KEY') {
      container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;font-size:14px;text-align:center;line-height:1.8;"><div>📍 地图标注区域<br><span style="font-size:12px;color:#bbb;">（配置高德Key后加载在线地图）</span></div></div>';
      return null;
    }

    try {
      var map = new AMap.Map(containerId, {
        zoom: opts.zoom || AMAP_CONFIG.zoom,
        center: opts.center || AMAP_CONFIG.center,
        resizeEnable: true
      });

      // 添加控件
      map.addControl(new AMap.Scale());
      map.addControl(new AMap.ToolBar({ position: 'RT' }));

      mapInstance = map;
      return map;
    } catch (e) {
      console.warn('地图初始化失败: ' + e.message);
      container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;font-size:14px;">地图加载失败</div>';
      return null;
    }
  }

  // 在地图上批量标注 POI
  function addPOIs(map, pois, iconMap) {
    if (!map || !pois) { return; }
    var icons = iconMap || ICON_MAP;

    pois.forEach(function (poi, idx) {
      var marker = new AMap.Marker({
        map: map,
        position: [poi.lng, poi.lat],
        title: poi.name,
        label: {
          content: (icons[poi.icon] && icons[poi.icon].label) || String(idx + 1),
          offset: new AMap.Pixel(0, 0)
        }
      });

      // 点击弹窗
      var infoWindow = new AMap.InfoWindow({
        content: '<div style="padding:8px 12px;font-size:14px;"><strong>' +
          poi.name + '</strong><br><span style="color:#666;font-size:12px;">' +
          (poi.desc || '') + '</span></div>',
        offset: new AMap.Pixel(0, -30)
      });

      marker.on('click', function () {
        infoWindow.open(map, marker.getPosition());
      });
    });

    // 自动适配视野
    if (pois.length > 0) {
      map.setFitView(null, false, [60, 60, 60, 60]);
    }
  }

  // 在容器中创建地图 + 标注 POI（一站式）
  function render(containerId, pois, options) {
    var opts = options || {};

    function doRender() {
      var map = initMap(containerId, {
        zoom: opts.zoom || 13,
        center: opts.center || AMAP_CONFIG.center
      });

      if (map && pois && pois.length > 0) {
        // 如果 POI 数据用的是占位坐标（都是整数），不标注，只显示中心
        var hasRealData = pois.some(function (p) {
          return p.lng !== Math.floor(p.lng) || p.lat !== Math.floor(p.lat);
        });
        if (hasRealData) {
          addPOIs(map, pois, opts.icons);
        }
      }
    }

    loadSDK(doRender);
  }

  return {
    render: render,
    loadSDK: loadSDK,
    initMap: initMap,
    addPOIs: addPOIs
  };
})();
