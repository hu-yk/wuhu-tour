// ===== 一码游伍湖 · 主逻辑 =====

var tabMap = { home: 'tab-home', culture: 'tab-culture', farming: 'tab-farming', tour: 'tab-tour' };

function switchTab(tabId) {
  document.querySelectorAll('.nav-btn').forEach(function (b) { b.classList.remove('active'); });
  var btn = document.querySelector('.nav-btn[data-tab="' + tabId + '"]');
  if (btn) btn.classList.add('active');

  document.querySelectorAll('.tab-page').forEach(function (p) { p.classList.remove('active'); });
  var page = document.getElementById(tabMap[tabId]);
  if (page) page.classList.add('active');

  closeDirectory();
  window.scrollTo({ top: 0, behavior: 'instant' });

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
    var tab = this.getAttribute('data-tab');
    if (tab === 'menu') { toggleDirectory(); return; }
    switchTab(tab);
  });
});

function goPage(url) { window.location.href = url; }

// ===== 头条轮播 =====
var HEADLINES = [
  { title: '循迹总书记足迹：2024年11月考察云梦县博物馆', tag: '循迹研学', url: 'pages/storyDetail.html?id=museum001' },
  { title: '红军长征胜利90周年：走好新时代长征路', tag: '红色基因', url: 'pages/storyDetail.html?id=foot001' },
  { title: '伍湖村稻虾共作：一田双收的绿色密码', tag: '产业聚焦', url: 'pages/onefield.html' },
  { title: '伍湖四海生态园：农文旅融合新体验', tag: '旅游动态', url: 'pages/routeDetail.html?id=route001' }
];

function initCarousel() {
  var track = document.getElementById('headline-track');
  var dots = document.getElementById('headline-dots');
  if (!track) return;

  var idx = 0, total = HEADLINES.length, startX = 0, autoTimer;

  HEADLINES.forEach(function (h, i) {
    var slide = document.createElement('div');
    slide.className = 'hl-slide';
    slide.onclick = function () { goPage(h.url); };
    slide.innerHTML = '<div class="hl-tag">' + h.tag + '</div><div class="hl-title">' + h.title + '</div>';
    track.appendChild(slide);

    var dot = document.createElement('span');
    dot.className = 'hl-dot' + (i === 0 ? ' active' : '');
    dots.appendChild(dot);
  });

  function goTo(n) {
    idx = n;
    track.style.transform = 'translateX(-' + (idx * 100) + '%)';
    dots.querySelectorAll('.hl-dot').forEach(function (d, i) { d.classList.toggle('active', i === idx); });
  }

  function next() { goTo((idx + 1) % total); }

  track.parentElement.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
  track.parentElement.addEventListener('touchend', function (e) {
    var dx = startX - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) {
      if (dx > 0 && idx < total - 1) goTo(idx + 1);
      else if (dx < 0 && idx > 0) goTo(idx - 1);
    }
  });

  autoTimer = setInterval(next, 3500);
  track.parentElement.addEventListener('touchstart', function () { clearInterval(autoTimer); });
  track.parentElement.addEventListener('touchend', function () {
    clearInterval(autoTimer);
    autoTimer = setInterval(next, 3500);
  });
}

// ===== 目录面板 =====
function toggleDirectory() {
  var panel = document.getElementById('dir-overlay');
  panel.classList.contains('open') ? closeDirectory() : panel.classList.add('open');
}
function closeDirectory() { document.getElementById('dir-overlay').classList.remove('open'); }

// ===== 微信登录 =====
var WEIXIN_APPID = '';

function doWechatLogin() {
  if (!WEIXIN_APPID) {
    var name = prompt('欢迎登录！请输入昵称', '伍湖游客');
    if (name) {
      var user = { nickname: name, avatar: '', time: Date.now(), demo: true };
      localStorage.setItem('wuhu_user', JSON.stringify(user));
      updateLoginUI(user);
    }
    return;
  }
  var redirectUri = encodeURIComponent(window.location.origin + '/pages/wxCallback.html');
  var state = Math.random().toString(36).substr(2);
  localStorage.setItem('wx_state', state);
  window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + WEIXIN_APPID + '&redirect_uri=' + redirectUri + '&response_type=code&scope=snsapi_userinfo&state=' + state + '#wechat_redirect';
}

function updateLoginUI(user) {
  var btn = document.getElementById('login-btn');
  if (!btn) return;
  if (user) {
    btn.innerHTML = (user.avatar ? '<img src="' + user.avatar + '" class="user-avatar-small"/>' : '🟢') + '<span class="user-name">' + user.nickname + '</span>';
    btn.classList.add('logged-in');
    btn.onclick = showUserInfo;
  } else {
    btn.innerHTML = '👤 微信登录';
    btn.classList.remove('logged-in');
    btn.onclick = doWechatLogin;
  }
}

function showUserInfo() {
  var user = JSON.parse(localStorage.getItem('wuhu_user') || '{}');
  if (confirm('当前用户：' + (user.nickname || '未登录') + '\n\n点击确定退出登录')) {
    localStorage.removeItem('wuhu_user');
    updateLoginUI(null);
  }
}

function initLogin() {
  var user = JSON.parse(localStorage.getItem('wuhu_user') || 'null');
  updateLoginUI(user);
}

// ===== 渲染函数 =====
var DC_COLORS = [
  'linear-gradient(135deg,#c62828,#e57373)',
  'linear-gradient(135deg,#1565c0,#64b5f6)',
  'linear-gradient(135deg,#2e7d32,#81c784)',
  'linear-gradient(135deg,#e65100,#ff9800)',
  'linear-gradient(135deg,#6a1b9a,#ab47bc)',
  'linear-gradient(135deg,#00695c,#4db6ac)'
];

var DC_ICONS = ['🏛️','📜','🚩','🏘️','🪖','📖'];

function renderStories() {
  var list = document.getElementById('story-list');
  if (!list || !STORIES) return;
  STORIES.forEach(function (s, i) {
    var card = document.createElement('div');
    card.className = 'data-card';
    card.onclick = function () { goPage('pages/storyDetail.html?id=' + s.id); };
    card.innerHTML =
      '<div class="dc-icon" style="background:' + DC_COLORS[i % DC_COLORS.length] + '">' + DC_ICONS[i % DC_ICONS.length] + '</div>' +
      '<div class="dc-body"><span class="card-title">' + s.title + '</span>' +
      '<span class="card-tag">' + s.type + '</span>' +
      '<span class="card-sub">' + s.action + '</span></div>';
    list.appendChild(card);
  });
}

function renderAgriModules() {
  var list = document.getElementById('agri-list');
  if (!list || !AGRICULTURE_MODULES) return;
  var icons = ['🌾','💧','🏭'];
  var colors = ['linear-gradient(135deg,#2e7d32,#66bb6a)','linear-gradient(135deg,#1565c0,#42a5f5)','linear-gradient(135deg,#e65100,#ffa726)'];
  AGRICULTURE_MODULES.forEach(function (m, i) {
    var card = document.createElement('div');
    card.className = 'data-card';
    card.innerHTML =
      '<div class="dc-icon" style="background:' + colors[i % colors.length] + '">' + icons[i % icons.length] + '</div>' +
      '<div class="dc-body"><span class="card-title">' + m.title + '</span>' +
      '<span class="card-tag">' + m.tag + '</span>' +
      '<span class="card-sub">' + m.desc + '</span></div>';
    list.appendChild(card);
  });
}

function renderRoutes() {
  var list = document.getElementById('route-list');
  if (!list || !ROUTES) return;
  var icons = ['🥾','🏛️','👨‍👩‍👧'];
  var colors = ['linear-gradient(135deg,#2e7d32,#66bb6a)','linear-gradient(135deg,#c62828,#e57373)','linear-gradient(135deg,#1565c0,#64b5f6)'];
  ROUTES.forEach(function (r, i) {
    var card = document.createElement('div');
    card.className = 'data-card';
    card.onclick = function () { goPage('pages/routeDetail.html?id=' + r.id); };
    card.innerHTML =
      '<div class="dc-icon" style="background:' + colors[i % colors.length] + '">' + icons[i % icons.length] + '</div>' +
      '<div class="dc-body"><span class="card-title">' + r.name + '</span>' +
      '<span class="card-tag">⏱ ' + r.time + '</span>' +
      '<span class="card-sub">' + r.desc + '</span></div>';
    list.appendChild(card);
  });
}

// ===== 模拟游客数（首页数据看板） =====
function animateStats() {
  var stat = document.getElementById('stat-visitors');
  if (!stat) return;
  // 读取问卷本地存储数量 + 基础数
  var surveys = JSON.parse(localStorage.getItem('surveyList') || '[]');
  var base = 1280 + surveys.length;
  stat.textContent = base.toLocaleString();
}

// ===== 启动 =====
document.addEventListener('DOMContentLoaded', function () {
  initCarousel();
  initLogin();
  animateStats();
});
