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
  if(tid==='culture'&&!window._cr){window._cr=true;renderCultureStories()}
  if(tid==='farming'&&!window._fr){window._fr=true;renderAgri()}
  if(tid==='tour'&&!window._tr){window._tr=true;renderRoutes();renderTourStories()}
}
document.querySelectorAll('.nav-btn').forEach(function(b){
  b.addEventListener('click',function(){var t=this.getAttribute('data-tab');if(t==='menu'){toggleDir();return}switchTab(t)})
});
function goPage(u){window.location.href=u}

window.addEventListener('scroll',function(){
  var topbar=document.getElementById('topbar');
  if(topbar)topbar.classList.toggle('scrolled',window.scrollY>10);
});

// ── 轮播 ──
var HEADLINES=[
  {title:'循迹总书记足迹：2024年考察云梦县博物馆',tag:'循迹研学',url:'pages/storyDetail.html?id=museum001',img:'assets/images/博物馆外景.jpg'},
  {title:'睡虎地秦简：云梦深厚的历史文化底蕴',tag:'传统文化',url:'pages/storyDetail.html?id=jian001',img:'assets/images/睡虎地秦简1.jpg'},
  {title:'6300亩稻田：一田双收的绿色密码',tag:'产业聚焦',url:'pages/storyDetail.html?id=farm001',img:'assets/images/耕作插秧1.jpg'},
  {title:'华农沈院长与陈书记会谈：实践基地揭牌',tag:'基地合作',url:'pages/storyDetail.html?id=meeting001',img:'assets/images/华中农业大学沈院长与陈书记递送基地牌匾.jpg'},
  {title:'五湖四海生态园：农文旅融合新体验',tag:'旅游动态',url:'pages/storyDetail.html?id=eco001',img:'assets/images/五湖四海生态园.jpg'},
  {title:'伍子游乐园：亲子家庭的快乐天地',tag:'亲子旅游',url:'pages/storyDetail.html?id=amuse001',img:'assets/images/伍子游乐园.jpg'},
  {title:'水上餐厅：荷塘边的农家美味',tag:'餐饮休闲',url:'pages/storyDetail.html?id=water001',img:'assets/images/水上餐厅.jpg'},
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
    s.innerHTML='<img src="'+h.img+'" alt="" onerror="this.parentElement.style.background=\'linear-gradient(135deg,'+['#1f5c3a','#2d5f9b','#5c2515','#1a4a4a'][i]+','+['#2d8659','#5a8ec4','#8b5a2b','#3b7d8e'][i]+')\'"/><div class="cr-caption"><h3>'+h.title+'</h3><p>'+h.tag+'</p></div>';
    track.appendChild(s);
    var d=document.createElement('button');if(i===0)d.className='active';d.onclick=function(){goCr(i)};
    dots.appendChild(d);
  });
  function updateSlides(){
    var all=track.querySelectorAll('.cr-slide');
    all.forEach(function(s,i){
      var pos=((i-crIdx)+total)%total,str='';
      if(pos===0){s.style.zIndex=10;s.style.opacity='1';str='translate(-50%,-50%) scale(1) translateZ(0px)';}
      else if(pos===1||pos===total-1){var side=(pos===total-1)?-1:1;s.style.zIndex=5;s.style.opacity='.7';str='translate(calc(-50% + '+side*30+'px),-52%) scale(0.85) translateZ(-30px)';}
      else{s.style.zIndex=0;s.style.opacity='0';str='translate(-50%,-50%) scale(0.7) translateZ(-60px)';}
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
  if(stage){stage.addEventListener('touchstart',function(){clearInterval(crTimer)},{passive:true});
  stage.addEventListener('touchend',function(){crTimer=setInterval(nextCr,4000)});}
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
function makeDC(img,cl,ti,tg,sub,url){
  var d=document.createElement('div');d.className='dc-card';
  var bg=cl||'linear-gradient(135deg,#2d8659,#4A6F5D)';
  d.onclick=url?function(){goPage(url)}:null;
  d.innerHTML='<div class="dc-top" style="background:'+bg+'">'+(img?'<img src="'+img+'" style="width:100%;height:120px;object-fit:cover;display:block" onerror="this.style.display=\'none\'">':'')+'</div><div class="dc-body"><div class="dc-badge">'+tg+'</div><div class="dc-title">'+ti+'</div><div class="dc-sub">'+sub+'</div></div>';
  return d
}

var DC_CLR=[
  'linear-gradient(135deg,#9b2d2d,#c45050)','linear-gradient(135deg,#2d5f9b,#5a8ec4)','linear-gradient(135deg,#2d8659,#6aaa6a)',
  'linear-gradient(135deg,#8b5a2b,#c49060)','linear-gradient(135deg,#a65d2e,#d48058)','linear-gradient(135deg,#6d3b8b,#9b6eb0)',
  'linear-gradient(135deg,#3b7d8e,#5aa0b4)','linear-gradient(135deg,#e65100,#ff9800)','linear-gradient(135deg,#1f5c3a,#4A6F5D)',
  'linear-gradient(135deg,#5c3d6e,#8b6eaa)','linear-gradient(135deg,#0d3b4a,#2d5f9b)','linear-gradient(135deg,#5c2010,#a67c52)',
  'linear-gradient(135deg,#4a2a1a,#8b5a2b)'
];

// 循迹故事：museum001, jian001, meeting001, red001, talk001, wulao001
var CULTURE_IDS=['museum001','jian001','meeting001','red001','talk001','wulao001'];
function renderCultureStories(){
  var l=document.getElementById('story-list');
  if(!l||!STORIES)return;
  CULTURE_IDS.forEach(function(id,i){
    var s=STORIES.find(function(x){return x.id===id});if(!s)return;
    var thumb=s.imgs&&s.imgs[0]?s.imgs[0]:s.img||'';
    l.appendChild(makeDC(thumb,DC_CLR[i%13],s.title,s.type,s.action,'pages/storyDetail.html?id='+s.id))
  })
}

// 稻虾故事：farm001 在 AGRICULTURE_MODULES 中
function renderAgri(){
  var l=document.getElementById('agri-list');
  if(!l||!AGRICULTURE_MODULES)return;
  AGRICULTURE_MODULES.forEach(function(m,i){l.appendChild(makeDC(m.img,DC_CLR[i%13],m.title,m.tag,m.desc))})
}

// 农旅故事：eco001, amuse001, water001, village001, minsu001
var TOUR_IDS=['eco001','amuse001','water001','village001','minsu001'];
function renderTourStories(){
  var l=document.getElementById('tour-story-list');
  if(!l||!STORIES)return;
  TOUR_IDS.forEach(function(id,i){
    var s=STORIES.find(function(x){return x.id===id});if(!s)return;
    var thumb=s.imgs&&s.imgs[0]?s.imgs[0]:s.img||'';
    l.appendChild(makeDC(thumb,DC_CLR[(i+7)%13],s.title,s.type,s.action,'pages/storyDetail.html?id='+s.id))
  })
}

// 路线
function renderRoutes(){
  var l=document.getElementById('route-list');
  if(!l||!ROUTES)return;
  ROUTES.forEach(function(r,i){l.appendChild(makeDC(r.img,DC_CLR[i%13],r.name,'⏱ '+r.time,r.desc,'pages/routeDetail.html?id='+r.id))})
}

// ── 启动 ──
document.addEventListener('DOMContentLoaded',function(){initCarousel();initLogin()});
