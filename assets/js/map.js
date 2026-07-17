// ===== 高德地图模块 =====
// 高德 JS API 已在 HTML 中直接引入，这里直接使用 AMap

var MapModule = (function () {
  'use strict';

  // 初始化地图并标注 POI
  function render(containerId, pois, options) {
    var container = document.getElementById(containerId);
    if (!container) {
      console.warn('[地图] 容器 #' + containerId + ' 不存在');
      return null;
    }

    var opts = options || {};

    if (!window.AMap) {
      console.warn('[地图] AMap 未加载，请先引入高德 JS API');
      container.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">地图加载失败，请刷新重试</p>';
      return null;
    }

    // 检测 Key 是否配置
    var keyOk = AMAP_CONFIG && AMAP_CONFIG.key && AMAP_CONFIG.key !== 'YOUR_AMAP_KEY';

    try {
      var map = new AMap.Map(containerId, {
        zoom: opts.zoom || (AMAP_CONFIG && AMAP_CONFIG.zoom) || 13,
        center: opts.center || (AMAP_CONFIG && AMAP_CONFIG.center) || [113.7, 31.0],
        resizeEnable: true
      });

      // 添加控件
      map.addControl(new AMap.Scale());

      // 标注 POI
      if (pois && pois.length > 0) {
        // 检测是否为真实坐标
        var hasReal = pois.some(function (p) {
          return p.lng !== Math.floor(p.lng) || p.lat !== Math.floor(p.lat);
        });

        if (hasReal) {
          pois.forEach(function (poi, idx) {
            try {
              var label = (ICON_MAP && ICON_MAP[poi.icon] && ICON_MAP[poi.icon].label)
                || String(idx + 1);
              var marker = new AMap.Marker({
                map: map,
                position: [poi.lng, poi.lat],
                title: poi.name,
                label: { content: label, offset: new AMap.Pixel(0, 0) }
              });

              var infoWindow = new AMap.InfoWindow({
                content: '<div style="padding:8px 12px;"><strong>' + poi.name +
                  '</strong><br><span style="color:#666;font-size:12px;">' +
                  (poi.desc || '') + '</span></div>',
                offset: new AMap.Pixel(0, -30)
              });
              marker.on('click', function () { infoWindow.open(map, marker.getPosition()); });
            } catch (e) {
              console.warn('[地图] 标注失败: ' + poi.name);
            }
          });
          map.setFitView(null, false, [60, 60, 60, 60]);
        } else {
          console.log('[地图] 当前为占位坐标，仅显示中心点。现场替换真实 GPS 后自动标注。');
        }
      }

      console.log('[地图] 渲染完成 ✓');
      return map;
    } catch (e) {
      console.error('[地图] 初始化失败: ' + e.message);
      container.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">地图加载失败</p>';
      return null;
    }
  }

  return { render: render };
})();
