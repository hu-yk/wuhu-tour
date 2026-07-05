// Tab 切换
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
