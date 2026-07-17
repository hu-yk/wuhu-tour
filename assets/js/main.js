// ══════ 一码游伍湖 · 主逻辑 ══════

var tabMap={home:'tab-home',culture:'tab-culture',farming:'tab-farming',tour:'tab-tour'};

function switchTab(tabId){
  document.querySelectorAll('.nav-btn').forEach(function(b){b.classList.remove('active')});
  var btn=document.querySelector('.nav-btn[data-tab="'+tabId+'"]');
  if(btn) btn.classList.add('active');
  document.querySelectorAll('.tab-page').forEach(function(p){p.classList.remove('active')});
  var pg=document.getElementById(tabMap[tabId]);
  if(pg) pg.classList.add('active');
  closeDir();window.scrollTo({top:0,behavior:'instant'});
  if(tabId==='culture'&&!window._cr){window._cr=true;renderStories()}
  if(tabId==='farming'&&!window._fr){window._fr=true;renderAgri()}
  if(tabId==='tour'&&!window._tr){window._tr=true;renderRoutes()}
}
document.querySelectorAll('.nav-btn').forEach(function(b){b.addEventListener('click',function(){var t=this.getAttribute('data-tab');if(t==='menu'){toggleDir();return}switchTab(t)})});
function goPage(u){window.location.href=u}

// ── 轮播 ──
var HEADLINES=[
  {title:'循迹总书记足迹：2024年11月考察云梦县博物馆',tag:'循迹研学',url:'pages/storyDetail.html?id=museum001'},
  {title:'红军长征胜利90周年：走好新时代长征路',tag:'红色基因',url:'pages/storyDetail.html?id=foot001'},
  {title:'伍湖村稻虾共作：一田双收的绿色密码',tag:'产业聚焦',url:'pages/onefield.html'},
  {title:'伍湖四海生态园：农文旅融合新体验',tag:'旅游动态',url:'pages/routeDetail.html?id=route001'}
];
function initCarousel(){
  var track=document.getElementById('cr-track'),dots=document.getElementById('cr-dots');
  if(!track)return;
  var idx=0,total=HEADLINES.length,startX=0,timer;
  HEADLINES.forEach(function(h,i){
    var s=document.createElement('div');s.className='cr-slide';
    s.onclick=function(){goPage(h.url)};
    s.innerHTML='<div class="cr-info"><div class="cr-tag">'+h.tag+'</div><div class="cr-title">'+h.title+'</div></div>';
    track.appendChild(s);
    var d=document.createElement('span');if(i===0)d.className='on';dots.appendChild(d);
  });
  function go(n){idx=n;track.style.transform='translateX(-'+(idx*100)+'%)';dots.querySelectorAll('span').forEach(function(d,i){d.classList.toggle('on',i===idx)})}
  function next(){go((idx+1)%total)}
  track.parentElement.addEventListener('touchstart',function(e){startX=e.touches[0].clientX;clearInterval(timer)},{passive:true});
  track.parentElement.addEventListener('touchend',function(e){var dx=startX-e.changedTouches[0].clientX;if(Math.abs(dx)>30){if(dx>0&&idx<total-1)go(idx+1);else if(dx<0&&idx>0)go(idx-1)}timer=setInterval(next,3500)});
  timer=setInterval(next,3500);
}

// ── 目录 ──
function toggleDir(){var p=document.getElementById('dir-overlay');p.classList.contains('open')?closeDir():p.classList.add('open')}
function closeDir(){document.getElementById('dir-overlay').classList.remove('open')}

// ── 登录 ──
var WEIXIN_APPID='';
function doLogin(){
  if(!WEIXIN_APPID){var n=prompt('欢迎！请输入昵称','伍湖游客');if(n){var u={nickname:n,avatar:'',time:Date.now(),demo:true};localStorage.setItem('wuhu_user',JSON.stringify(u));updateLoginUI(u)}return}
  var uri=encodeURIComponent(location.origin+'/pages/wxCallback.html'),st=Math.random().toString(36).substr(2);
  localStorage.setItem('wx_state',st);location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid='+WEIXIN_APPID+'&redirect_uri='+uri+'&response_type=code&scope=snsapi_userinfo&state='+st+'#wechat_redirect'
}
function updateLoginUI(u){var b=document.getElementById('login-btn');if(!b)return;if(u){b.innerHTML='<span class="t-avatar">🟢</span>'+u.nickname;b.classList.add('logged');b.onclick=function(){if(confirm('退出登录？')){localStorage.removeItem('wuhu_user');updateLoginUI(null)}}}else{b.innerHTML='👤 登录';b.classList.remove('logged');b.onclick=doLogin}}
function initLogin(){var u=JSON.parse(localStorage.getItem('wuhu_user')||'null');updateLoginUI(u)}

// ── 渲染 ──
var DC_CLR=['#9b2d2d','#2d5f9b','#2c6e3f','#d4754a','#8b5ea8','#3b7d8e'];
var DC_IC=['🏛','📜','🚩','🏘','🪖','📖'];
function renderStories(){var l=document.getElementById('story-list');if(!l||!STORIES)return;STORIES.forEach(function(s,i){var c=document.createElement('div');c.className='data-card';c.onclick=function(){goPage('pages/storyDetail.html?id='+s.id)};c.innerHTML='<div class="dc-thumb" style="background:'+DC_CLR[i%DC_CLR.length]+'">'+DC_IC[i%DC_IC.length]+'</div><div class="dc-body"><div class="dc-title">'+s.title+'</div><div class="dc-tag">'+s.type+'</div><div class="dc-sub">'+s.action+'</div></div>';l.appendChild(c)})}
function renderAgri(){var l=document.getElementById('agri-list'),ic=['🌾','💧','🏭'],cl=['#2c6e3f','#2d5f9b','#d4754a'];if(!l||!AGRICULTURE_MODULES)return;AGRICULTURE_MODULES.forEach(function(m,i){var c=document.createElement('div');c.className='data-card';c.innerHTML='<div class="dc-thumb" style="background:'+cl[i%cl.length]+'">'+ic[i%ic.length]+'</div><div class="dc-body"><div class="dc-title">'+m.title+'</div><div class="dc-tag">'+m.tag+'</div><div class="dc-sub">'+m.desc+'</div></div>';l.appendChild(c)})}
function renderRoutes(){var l=document.getElementById('route-list'),ic=['🥾','🏛','👨‍👩‍👧'],cl=['#2c6e3f','#9b2d2d','#2d5f9b'];if(!l||!ROUTES)return;ROUTES.forEach(function(r,i){var c=document.createElement('div');c.className='data-card';c.onclick=function(){goPage('pages/routeDetail.html?id='+r.id)};c.innerHTML='<div class="dc-thumb" style="background:'+cl[i%cl.length]+'">'+ic[i%ic.length]+'</div><div class="dc-body"><div class="dc-title">'+r.name+'</div><div class="dc-tag">⏱ '+r.time+'</div><div class="dc-sub">'+r.desc+'</div></div>';l.appendChild(c)})}

// ── 启动 ──
document.addEventListener('DOMContentLoaded',function(){initCarousel();initLogin();var sv=document.getElementById('kpi-visitors');if(sv){var s=JSON.parse(localStorage.getItem('surveyList')||'[]');sv.textContent=(1280+s.length).toLocaleString()}});
