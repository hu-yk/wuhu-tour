// ══════ 一码游伍湖 · 主逻辑 ══════

var tabMap={home:'tab-home',culture:'tab-culture',farming:'tab-farming',tour:'tab-tour'};

function switchTab(tid){
  document.querySelectorAll('.nav-btn').forEach(function(b){b.classList.remove('active')});
  var btn=document.querySelector('.nav-btn[data-tab="'+tid+'"]');
  if(btn)btn.classList.add('active');
  document.querySelectorAll('.tab-page').forEach(function(p){p.classList.remove('active')});
  var pg=document.getElementById(tabMap[tid]);
  if(pg)pg.classList.add('active');
  closeDir();window.scrollTo({top:0,behavior:'instant'});
  if(tid==='culture'&&!window._cr){window._cr=true;renderStories()}
  if(tid==='farming'&&!window._fr){window._fr=true;renderAgri()}
  if(tid==='tour'&&!window._tr){window._tr=true;renderRoutes()}
}
document.querySelectorAll('.nav-btn').forEach(function(b){
  b.addEventListener('click',function(){var t=this.getAttribute('data-tab');if(t==='menu'){toggleDir();return}switchTab(t)})
});
function goPage(u){window.location.href=u}

// ── 滚动切换导航栏背景 ──
window.addEventListener('scroll',function(){
  var topbar=document.getElementById('topbar');
  if(topbar)topbar.classList.toggle('scrolled',window.scrollY>10);
});

// ── 轮播 ──
var HEADLINES=[
  {title:'循迹总书记足迹：2024年考察云梦县博物馆',tag:'循迹研学',url:'pages/storyDetail.html?id=museum001'},
  {title:'红军长征胜利90周年：走好新时代长征路',tag:'红色基因',url:'pages/storyDetail.html?id=foot001'},
  {title:'伍湖村稻虾共作：一田双收的绿色密码',tag:'产业聚焦',url:'pages/onefield.html'},
  {title:'伍湖四海生态园：农文旅融合新体验',tag:'旅游动态',url:'pages/routeDetail.html?id=route001'}
];
var crIdx=0,crTimer;

function initCarousel(){
  var track=document.getElementById('cr-track'),dots=document.getElementById('cr-indicators');
  if(!track)return;var total=HEADLINES.length;

  HEADLINES.forEach(function(h,i){
    var s=document.createElement('div');s.className='cr-slide';
    s.style.zIndex=10-i;s.style.transform='translate(-50%,-50%) scale('+(1-i*0.05)+') translateZ('+(-i*30)+'px)';
    s.style.opacity=(i===0?'1':(1-i*0.25));
    s.onclick=function(){goPage(h.url)};
    s.innerHTML='<div class="cr-img-placeholder">'+(i===0?'🏛':i===1?'🚩':i===2?'🌾':'🎣')+'</div><div class="cr-caption"><h3>'+h.title+'</h3><p>'+h.tag+'</p></div>';
    track.appendChild(s);
    var d=document.createElement('button');if(i===0)d.className='active';d.onclick=function(){goCr(i)};
    dots.appendChild(d);
  });

  function updateSlides(){
    var all=track.querySelectorAll('.cr-slide');
    all.forEach(function(s,i){
      var pos=((i-crIdx)+total)%total;
      var str='';
      if(pos===0){
        s.style.zIndex=10;s.style.opacity='1';
        str='translate(-50%,-50%) scale(1) translateZ(0px)';
      }else if(pos===1||pos===total-1){
        var side=(pos===total-1)?-1:1;s.style.zIndex=5; s.style.opacity='.7';
        str='translate(calc(-50% + '+side*30+'px),-52%) scale(0.85) translateZ(-30px)';
      }else{
        s.style.zIndex=0;s.style.opacity='0';str='translate(-50%,-50%) scale(0.7) translateZ(-60px)';
      }
      s.style.transform=str;
    });
    dots.querySelectorAll('button').forEach(function(d,i){d.classList.toggle('active',i===crIdx)});
  }

  updateSlides();

  function nextCr(){crIdx=(crIdx+1)%total;updateSlides()}
  window.crNext=nextCr;
  window.crPrev=function(){crIdx=(crIdx-1+total)%total;updateSlides()};

  crTimer=setInterval(nextCr,4000);
  var stage=document.getElementById('cr-stage');
  if(stage){
    stage.addEventListener('touchstart',function(){clearInterval(crTimer)},{passive:true});
    stage.addEventListener('touchend',function(){crTimer=setInterval(nextCr,4000)});
  }
}

// ── 目录 ──
function toggleDir(){var p=document.getElementById('dir-overlay');p.classList.contains('open')?closeDir():p.classList.add('open')}
function closeDir(){document.getElementById('dir-overlay').classList.remove('open')}

// ── 登录 ──
var WEIXIN_APPID='';
function doLogin(){
  if(!WEIXIN_APPID){var n=prompt('欢迎！请输入昵称','伍湖游客');if(n){var u={nickname:n,avatar:'',time:Date.now(),demo:true};localStorage.setItem('wuhu_user',JSON.stringify(u));updateLoginUI(u)}return}
  var uri=encodeURIComponent(location.origin+'/pages/wxCallback.html'),st=Math.random().toString(36).substr(2);localStorage.setItem('wx_state',st);location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid='+WEIXIN_APPID+'&redirect_uri='+uri+'&response_type=code&scope=snsapi_userinfo&state='+st+'#wechat_redirect'
}
function updateLoginUI(u){var b=document.getElementById('login-btn');if(!b)return;if(u){b.innerHTML='<span>🟢</span>'+u.nickname;b.classList.add('logged');b.onclick=function(){if(confirm('退出登录？')){localStorage.removeItem('wuhu_user');updateLoginUI(null)}}}else{b.innerHTML='👤 登录';b.classList.remove('logged');b.onclick=doLogin}}
function initLogin(){var u=JSON.parse(localStorage.getItem('wuhu_user')||'null');updateLoginUI(u)}

// ── 渲染列表 ──
function makeDC(ic,cl,ti,tg,sub,url){
  var d=document.createElement('div');d.className='dc-card';
  var bg=cl||'linear-gradient(135deg,#2d8659,#4A6F5D)';
  d.onclick=url?function(){goPage(url)}:null;
  d.innerHTML='<div class="dc-top" style="background:'+bg+'">'+ic+'</div><div class="dc-body"><div class="dc-badge">'+tg+'</div><div class="dc-title">'+ti+'</div><div class="dc-sub">'+sub+'</div></div>';
  return d
}
function renderStories(){
  var l=document.getElementById('story-list'),cl=['linear-gradient(135deg,#9b2d2d,#c45050)','linear-gradient(135deg,#2d5f9b,#5a8ec4)','linear-gradient(135deg,#2d8659,#6aaa6a)','linear-gradient(135deg,#8b5a2b,#c49060)','linear-gradient(135deg,#a65d2e,#d48058)','linear-gradient(135deg,#6d3b8b,#9b6eb0)'];
  var ic=['🏛','📜','🚩','🏘','🪖','📖'];if(!l||!STORIES)return;
  STORIES.forEach(function(s,i){l.appendChild(makeDC(ic[i%6],cl[i%6],s.title,s.type,s.action,'pages/storyDetail.html?id='+s.id))})
}
function renderAgri(){
  var l=document.getElementById('agri-list'),cl=['linear-gradient(135deg,#2d8659,#6aaa6a)','linear-gradient(135deg,#2d5f9b,#5a8ec4)','linear-gradient(135deg,#a65d2e,#d48058)'];
  var ic=['🌾','💧','🏭'];if(!l||!AGRICULTURE_MODULES)return;
  AGRICULTURE_MODULES.forEach(function(m,i){l.appendChild(makeDC(ic[i%3],cl[i%3],m.title,m.tag,m.desc))})
}
function renderRoutes(){
  var l=document.getElementById('route-list'),cl=['linear-gradient(135deg,#2d8659,#6aaa6a)','linear-gradient(135deg,#9b2d2d,#c45050)','linear-gradient(135deg,#2d5f9b,#5a8ec4)'];
  var ic=['🥾','🏛','👨‍👩‍👧'];if(!l||!ROUTES)return;
  ROUTES.forEach(function(r,i){l.appendChild(makeDC(ic[i%3],cl[i%3],r.name,'⏱ '+r.time,r.desc,'pages/routeDetail.html?id='+r.id))})
}

// ── 启动 ──
document.addEventListener('DOMContentLoaded',function(){
  initCarousel();initLogin();
  var sv=document.getElementById('kpi-v');if(sv){var s=JSON.parse(localStorage.getItem('surveyList')||'[]');sv.textContent=(1280+s.length).toLocaleString()}
});
