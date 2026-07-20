// ══════ 一码游伍湖 · 主逻辑 ══════
var tabMap={home:'tab-home',culture:'tab-culture',farming:'tab-farming',tour:'tab-tour'};
function switchTab(tid){
  document.querySelectorAll('.nav-btn').forEach(function(b){b.classList.remove('active')});
  var btn=document.querySelector('.nav-btn[data-tab="'+tid+'"]');if(btn)btn.classList.add('active');
  document.querySelectorAll('.tab-page').forEach(function(p){p.classList.remove('active')});
  var pg=document.getElementById(tabMap[tid]);if(pg)pg.classList.add('active');
  closeDir();window.scrollTo({top:0,behavior:'instant'});
  if(tid==='culture'&&!window._cr){window._cr=true;renderCultureStories()}
  if(tid==='farming'&&!window._fr){window._fr=true;renderAgri()}
  if(tid==='tour'&&!window._tr){window._tr=true;renderRoutes();renderTourStories()}
}
document.querySelectorAll('.nav-btn').forEach(function(b){b.addEventListener('click',function(){var t=this.getAttribute('data-tab');if(t==='menu'){toggleDir();return}switchTab(t)})});
function goPage(u){window.location.href=u}
window.addEventListener('scroll',function(){var t=document.getElementById('topbar');if(t)t.classList.toggle('scrolled',window.scrollY>10)});

// ── 轮播 ──
var HEADLINES=[
  {title:'云梦县博物馆：睡虎地秦简的故乡',tag:'文化地标',url:'pages/storyDetail.html?id=museum001',img:'assets/images/museum-exterior.jpg'},
  {title:'6300亩稻虾田：一田双收的绿色奇迹',tag:'特色农业',url:'pages/storyDetail.html?id=farm001',img:'assets/images/farming-planting.jpg'},
  {title:'五湖四海生态园：周末出游好去处',tag:'休闲观光',url:'pages/storyDetail.html?id=eco001',img:'assets/images/eco-park.jpg'},
  {title:'伍子游乐园：孩子们的快乐天地',tag:'亲子游乐',url:'pages/storyDetail.html?id=amuse001',img:'assets/images/amusement-park.jpg'},
  {title:'水上餐厅：荷塘边的农家美味',tag:'餐饮美食',url:'pages/storyDetail.html?id=water001',img:'assets/images/water-restaurant.jpg'},
  {title:'美丽乡村打卡点：随手拍大片',tag:'乡村风光',url:'pages/storyDetail.html?id=village001',img:'assets/images/village-lotus.jpg'},
  {title:'特色民宿：住下来慢慢玩',tag:'住宿体验',url:'pages/storyDetail.html?id=minsu001',img:'assets/images/checkin-panorama.jpg'}
];
var crIdx=0,crTimer;
function initCarousel(){
  var track=document.getElementById('cr-track'),dots=document.getElementById('cr-indicators');
  if(!track)return;var total=HEADLINES.length;
  HEADLINES.forEach(function(h,i){
    var s=document.createElement('div');s.className='cr-slide';s.onclick=function(){goPage(h.url)};
    s.innerHTML='<div class="cr-img-wrap"><img src="'+h.img+'" alt="" onerror="this.style.display=\'none\'"/></div><div class="cr-caption"><span class="cr-tag">'+h.tag+'</span><span class="cr-title">'+h.title+'</span></div>';
    track.appendChild(s);var d=document.createElement('span');if(i===0)d.className='on';d.onclick=function(){goCr(i)};dots.appendChild(d);
  });
  function goTo(n){crIdx=n;track.style.transform='translateX(-'+(crIdx*100)+'%)';dots.querySelectorAll('span').forEach(function(d,i){d.classList.toggle('on',i===crIdx)});}
  function nextCr(){crIdx=(crIdx+1)%total;goTo(crIdx);}window.crNext=nextCr;
  window.crPrev=function(){crIdx=(crIdx-1+total)%total;goTo(crIdx);};
  crTimer=setInterval(nextCr,4000);var stage=document.getElementById('cr-stage');
  if(stage){stage.addEventListener('touchstart',function(){clearInterval(crTimer)},{passive:true});stage.addEventListener('touchend',function(){crTimer=setInterval(nextCr,4000)});}
}

// ── 目录 ──
function toggleDir(){var p=document.getElementById('dir-overlay');p.classList.contains('open')?closeDir():p.classList.add('open')}
function closeDir(){document.getElementById('dir-overlay').classList.remove('open')}

// ── 登录 ──
var WEIXIN_APPID='';
function doLogin(){if(!WEIXIN_APPID){var n=prompt('请输入昵称','伍湖游客');if(n){var u={nickname:n,avatar:'',time:Date.now(),demo:true};localStorage.setItem('wuhu_user',JSON.stringify(u));updateLoginUI(u)}return}var uri=encodeURIComponent(location.origin+'/pages/wxCallback.html'),st=Math.random().toString(36).substr(2);localStorage.setItem('wx_state',st);location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid='+WEIXIN_APPID+'&redirect_uri='+uri+'&response_type=code&scope=snsapi_userinfo&state='+st+'#wechat_redirect'}
function updateLoginUI(u){var b=document.getElementById('login-btn');if(!b)return;if(u){b.innerHTML='<span>🟢</span>'+u.nickname;b.classList.add('logged');b.onclick=function(){if(confirm('退出登录？')){localStorage.removeItem('wuhu_user');updateLoginUI(null)}}}else{b.innerHTML='👤 登录';b.classList.remove('logged');b.onclick=doLogin}}
function initLogin(){var u=JSON.parse(localStorage.getItem('wuhu_user')||'null');updateLoginUI(u)}

// ── 渲染 ──
function makeDC(img,cl,ti,tg,sub,url){
  var d=document.createElement('div');d.className='dc-card';d.onclick=url?function(){goPage(url)}:null;
  d.innerHTML='<div class="dc-top" style="background:'+(cl||'linear-gradient(135deg,#2d8659,#4A6F5D)')+'">'+(img?'<img src="'+img+'" style="width:100%;height:120px;object-fit:cover;display:block" onerror="this.style.display=\'none\'">':'')+'</div><div class="dc-body"><div class="dc-badge">'+tg+'</div><div class="dc-title">'+ti+'</div><div class="dc-sub">'+sub+'</div></div>';
  return d
}
var DC_CLR=['linear-gradient(135deg,#9b2d2d,#c45050)','linear-gradient(135deg,#2d5f9b,#5a8ec4)','linear-gradient(135deg,#2d8659,#6aaa6a)','linear-gradient(135deg,#8b5a2b,#c49060)','linear-gradient(135deg,#a65d2e,#d48058)','linear-gradient(135deg,#6d3b8b,#9b6eb0)','linear-gradient(135deg,#3b7d8e,#5aa0b4)','linear-gradient(135deg,#1f5c3a,#4A6F5D)'];

var CULTURE_IDS=['museum001','jian001','red001'];
function renderCultureStories(){
  var l=document.getElementById('story-list');if(!l||!STORIES)return;
  CULTURE_IDS.forEach(function(id,i){var s=STORIES.find(function(x){return x.id===id});if(!s)return;var thumb=s.imgs&&s.imgs[0]?s.imgs[0]:s.img||'';l.appendChild(makeDC(thumb,DC_CLR[i%8],s.title,s.type,s.action,'pages/storyDetail.html?id='+s.id))})
}
function renderAgri(){
  var l=document.getElementById('agri-list');if(!l||!AGRICULTURE_MODULES)return;
  AGRICULTURE_MODULES.forEach(function(m,i){l.appendChild(makeDC(m.img,DC_CLR[i%8],m.title,m.tag,m.desc))})
}
var TOUR_IDS=['eco001','amuse001','water001','village001','minsu001'];
function renderTourStories(){
  var l=document.getElementById('tour-story-list');if(!l||!STORIES)return;
  TOUR_IDS.forEach(function(id,i){var s=STORIES.find(function(x){return x.id===id});if(!s)return;var thumb=s.imgs&&s.imgs[0]?s.imgs[0]:s.img||'';l.appendChild(makeDC(thumb,DC_CLR[(i+3)%8],s.title,s.type,s.action,'pages/storyDetail.html?id='+s.id))})
}
function renderRoutes(){
  var l=document.getElementById('route-list');if(!l||!ROUTES)return;
  ROUTES.forEach(function(r,i){l.appendChild(makeDC(r.img,DC_CLR[i%8],r.name,'⏱ '+r.time,r.desc,'pages/routeDetail.html?id='+r.id))})
}
document.addEventListener('DOMContentLoaded',function(){initCarousel();initLogin();initQR()});

// ── 二维码弹窗 ──
var qrGenerated=false;
function showQR(){
  document.getElementById('qr-overlay').classList.add('show');
  if(!qrGenerated&&typeof QRCode!=='undefined'){
    qrGenerated=true;
    new QRCode(document.getElementById('qrcode'),{text:window.location.href,width:200,height:200,colorDark:'#333',colorLight:'#fff',correctLevel:QRCode.CorrectLevel.M});
  }
}
function closeQR(e){if(!e||e.target===document.getElementById('qr-overlay'))document.getElementById('qr-overlay').classList.remove('show')}
function initQR(){}
