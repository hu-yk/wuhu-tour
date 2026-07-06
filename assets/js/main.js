// Tab 切换
var mapRendered = false;

document.querySelectorAll('.nav-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var tabId = this.getAttribute('data-tab');

    // 切换导航激活状态
    document.querySelectorAll('.nav-btn').forEach(function (b) { b.classList.remove('active'); });
    this.classList.add('active');

    // 切换页面内容
    document.querySelectorAll('.tab-page').forEach(function (p) { p.classList.remove('active'); });
    document.getElementById('tab-' + tabId).classList.add('active');

    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 切换到"游玩路线"Tab 时，延迟加载地图（首次点击才加载）
    if (tabId === 'tour' && !mapRendered) {
      mapRendered = true;
      setTimeout(function () {
        MapModule.render('tour-map', TOUR_POIS);
      }, 300);
    }
  });
});

// 支持 URL Hash 定位到指定 Tab
function loadTabFromHash() {
  var hash = window.location.hash.replace('#', '');
  if (hash) {
    var btn = document.querySelector('.nav-btn[data-tab="' + hash + '"]');
    if (btn) btn.click();
  }
}
window.addEventListener('hashchange', loadTabFromHash);
window.addEventListener('DOMContentLoaded', loadTabFromHash);
