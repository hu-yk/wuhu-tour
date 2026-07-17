// ===== 一码游伍湖 · 主逻辑 =====

// Tab 切换
var tabMap = { home: 'tab-home', culture: 'tab-culture', farming: 'tab-farming', tour: 'tab-tour' };

function switchTab(tabId) {
  // 更新导航栏激活态
  document.querySelectorAll('.nav-btn').forEach(function (b) { b.classList.remove('active'); });
  var btn = document.querySelector('.nav-btn[data-tab="' + tabId + '"]');
  if (btn) btn.classList.add('active');

  // 切换页面
  document.querySelectorAll('.tab-page').forEach(function (p) { p.classList.remove('active'); });
  var page = document.getElementById(tabMap[tabId]);
  if (page) page.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'instant' });

  // 首次进入对应 Tab 时渲染动态列表
  if (tabId === 'culture' && !window._cultureRendered) {
    window._cultureRendered = true;
    renderStories();
  }
  if (tabId === 'farming' && !window._farmingRendered) {
    window._farmingRendered = true;
    renderAgriModules();
  }
  if (tabId === 'tour' && !window._tourRendered) {
    window._tourRendered = true;
    renderRoutes();
  }
}

document.querySelectorAll('.nav-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    switchTab(this.getAttribute('data-tab'));
  });
});

// 跳转到子页面
function goPage(url) {
  window.location.href = url;
}

// ===== 渲染循迹故事列表 =====
function renderStories() {
  var list = document.getElementById('story-list');
  if (!list || !STORIES) return;
  STORIES.forEach(function (s) {
    var card = document.createElement('div');
    card.className = 'data-card';
    card.onclick = function () { goPage('pages/storyDetail.html?id=' + s.id); };
    card.innerHTML =
      '<span class="card-title">' + s.title + '</span>' +
      '<span class="card-tag">' + s.type + '</span>' +
      '<span class="card-sub">' + s.action + '</span>';
    list.appendChild(card);
  });
}

// ===== 渲染农业模块列表 =====
function renderAgriModules() {
  var list = document.getElementById('agri-list');
  if (!list || !AGRICULTURE_MODULES) return;
  AGRICULTURE_MODULES.forEach(function (m) {
    var card = document.createElement('div');
    card.className = 'data-card';
    card.innerHTML =
      '<span class="card-title">' + m.title + '</span>' +
      '<span class="card-tag">' + m.tag + '</span>' +
      '<span class="card-sub">' + m.desc + '</span>';
    list.appendChild(card);
  });
}

// ===== 渲染游玩路线列表 =====
function renderRoutes() {
  var list = document.getElementById('route-list');
  if (!list || !ROUTES) return;
  ROUTES.forEach(function (r) {
    var card = document.createElement('div');
    card.className = 'data-card';
    card.onclick = function () { goPage('pages/routeDetail.html?id=' + r.id); };
    card.innerHTML =
      '<span class="card-title">' + r.name + '</span>' +
      '<span class="card-tag">' + r.time + '</span>' +
      '<span class="card-sub">' + r.desc + '</span>';
    list.appendChild(card);
  });
}
