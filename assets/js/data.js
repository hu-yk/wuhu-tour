// ══════ 一码游伍湖 · 共享数据 ══════
// 数据采集：2026年7月16-18日 | 来源：陈书记 / 产业负责人 / 五老 / 现场拍摄

// ── 全部媒体资源映射 ──
var IMG = {
  // 云梦县博物馆
  museumExterior:  'assets/images/博物馆外景.jpg',
  museumExterior1: 'assets/images/博物馆外景1.jpg',
  museumVisit1:    'assets/images/博物馆参观1.jpg',
  museumInterior1: 'assets/images/博物馆1.jpg',
  museumInterior2: 'assets/images/博物馆2.jpg',
  museumInterior3: 'assets/images/博物馆3.jpg',
  museumInterior4: 'assets/images/博物馆4.jpg',
  museumStarry:    'assets/images/博物馆星空盘.jpg',
  museumRestore:   'assets/images/文物修复中心.jpg',
  qinSlips1:       'assets/images/睡虎地秦简1.jpg',
  qinSlipsLaw:     'assets/images/睡虎地秦简为吏之道.jpg',
  qinSlipsChronic: 'assets/images/睡虎地秦简编年纪.jpg',
  qinSlipsExplain: 'assets/images/秦简说法.jpg',
  museumVideo:     'assets/images/video_20260716_093852.mp4',

  // 龚华铭烈士纪念广场
  martyrMemorial:  'assets/images/烈士纪念.jpg',
  martyrStatue:    'assets/images/烈士像.jpg',
  martyrMonument:  'assets/images/烈士碑.jpg',

  // 座谈与人物
  meeting:         'assets/images/会晤.jpg',
  leaderSpeech:    'assets/images/组长讲话.jpg',
  partyMember:     'assets/images/党员，廉洁.jpg',

  // 农业与产业
  farmingPlanting: 'assets/images/耕作插秧1.jpg',
  farmingMachine:  'assets/images/开插秧机器.jpg',
  farmingMachine1: 'assets/images/开插秧机器1.jpg',
  farmerWork:      'assets/images/农民工作1.jpg',
  riceCooperative: 'assets/images/新红水稻种植合作社粮食产后服务中心.jpg',
  fieldBase:       'assets/images/FiRuM.jpg',
  ecoPark:         'assets/images/gMygx.jpg',

  // 村容村貌
  villageView1:    'assets/images/村内风光.jpg',
  villageView2:    'assets/images/村内风景.jpg',
  villageLotus:    'assets/images/村内荷花.jpg',
  villagePond:     'assets/images/村内池塘.jpg',
  checkinPanorama: 'assets/images/打卡点全景.jpg',
  checkinCloseup:  'assets/images/打卡点特写.jpg',

  // 占位图
  heroRed:         'assets/images/red-hero.svg',
  heroGreen:       'assets/images/farming-hero.svg',
  ogCover:         'assets/images/og-cover.svg'
};

// ── 伍湖村基础数据 ──
var VILLAGE_DATA = {
  area: '2.6 km²', population: 2130, households: 518,
  farmland: '6300 亩（稻虾共作）', farmlandPerCapita: '1.1 亩/人',
  annualRice: '约 700 万斤（3500 吨）',
  annualCrayfish: '约 252 万斤（亩产约 400 斤）',
  annualVisitors: '约 15 万人次', annualTourismRevenue: '约 200 万元',
  incomeIncrease: '户均增收约 1.8 万元（原农民打工年均约 10 万元）',
  dailyWage: '约 100 元/天', volunteerStipend: '约 150 元/天（研学志愿者）',
  source: '陈书记（2026-07-17）'
};

// ── 循迹故事 ──
var STORIES = [
  { id:'museum001', title:'云梦县博物馆', type:'总书记考察足迹',
    content:'2024年11月，习近平总书记考察云梦县博物馆，了解文物保护研究利用。7月16日实践队完成博物馆研学与拍摄。',
    action:'沿着总书记考察足迹，学习历史文化资源保护利用经验，增强文化自信。',
    img: IMG.museumExterior, source:'2026-07-16 现场研学', status:'已完成' },
  { id:'jian001', title:'云梦睡虎地秦简', type:'传统文化资源',
    content:'睡虎地秦简是云梦最具代表性的文化遗产，包括为吏之道、编年纪等珍贵简牍。云梦历史文化底蕴深厚，是推进文旅融合发展的重要基础。',
    action:'推动传统文化资源从"看得见"走向"讲得出、传得开"。',
    img: IMG.qinSlips1, source:'云梦县博物馆展陈', status:'已采集' },
  { id:'foot001', title:'总书记考察足迹', type:'循迹悟思想',
    content:'梳理"总书记考察云梦县博物馆—学习文化传承保护—延伸到伍湖村农文旅融合实践"的逻辑链。',
    action:'把理论学习融入社会实践，把循迹研学落到乡村振兴一线。',
    img: IMG.meeting, source:'实践队综合整理', status:'已整理' },
  { id:'red001', title:'龚华铭烈士纪念广场', type:'红色文化',
    content:'7月16日实践队完成纪念广场走访与拍摄，瞻仰烈士纪念碑与烈士像，追寻红色足迹。',
    action:'追寻红色足迹，赓续红色血脉，讲好伍湖红色故事。',
    img: IMG.martyrMemorial, source:'2026-07-16 现场走访', status:'已完成' },
  { id:'wulao001', title:'"读懂中国"——"五老"专访', type:'人物故事',
    content:'7月18日采访老干部、老战士、老专家、老教师或老模范。围绕个人经历、艰苦奋斗、长征精神展开。',
    action:'用五老的人生故事诠释理想信念和长征精神，形成"读懂中国"征文和微视频素材。',
    img: IMG.meeting, source:'2026-07-18 现场采访', status:'已完成' },
  { id:'village001', title:'伍湖村乡村振兴故事', type:'乡土叙事',
    content:'通过村干部访谈、农户交流和产业走访，记录伍湖村从生态农业到农旅融合的发展故事。',
    action:'用青年视角讲好伍湖村产业振兴和文化振兴故事。',
    img: IMG.villageView1, source:'7月17-18日 现场访谈', status:'采集中' }
];

// ── 稻虾产业 ──
var AGRICULTURE_MODULES = [
  { title:'稻虾共作', tag:'生态农业',
    desc:'全村稻虾共作 6300 亩。水稻年产约 700 万斤，小龙虾亩产约 400 斤。形成"一田双收、绿色循环"的生态种养模式。',
    img: IMG.farmingPlanting, source:'陈书记（2026-07-17）' },
  { title:'生产周期', tag:'全年种养',
    desc:'3-4月投放虾苗 + 育秧；5-6月龙虾捕捞；6月中水稻插秧；9-10月收割。插秧机械化正在推广中。',
    img: IMG.farmingMachine, source:'产业负责人（2026-07-17）' },
  { title:'粮食产后服务', tag:'产业配套',
    desc:'新红水稻种植合作社粮食产后服务中心为全村水稻提供烘干、仓储、加工等产后服务，提升稻米品质与附加值。',
    img: IMG.riceCooperative, source:'合作社（2026-07-17）' },
  { title:'梦辰泽农业', tag:'产业主体',
    desc:'湖北梦辰泽生态农业有限公司是伍湖村稻虾产业核心经营主体，负责种养技术、加工、品牌和销售。',
    img: IMG.ecoPark, source:'企业负责人（2026-07-17）' },
  { title:'农户增收', tag:'产业效益',
    desc:'户均增收约 1.8 万元。原农民打工年均约 10 万元。务工约 100 元/天，研学志愿者约 150 元/天。全村 518 户、2130 人，人均耕地 1.1 亩。',
    img: IMG.farmerWork, source:'陈书记（2026-07-17）' },
  { title:'农旅融合', tag:'旅游数据',
    desc:'年接待游客约 15 万人次，旅游综合收入约 200 万元。伍湖四海生态园为主要承载点位，村内设有打卡景点与荷花观赏区。',
    img: IMG.checkinPanorama, source:'陈书记（2026-07-17）' }
];

// ── 产业档案 ──
var FIELD_DATA = {
  id:'field001', name:'伍湖虾稻米', code:'WH-FIELD-001',
  place:'湖北省孝感市云梦县沙河乡伍湖村', method:'稻虾共作生态种养',
  area:'6300 亩', annualRice:'约 700 万斤（3500 吨）',
  annualCrayfish:'约 252 万斤（亩产约 400 斤）',
  currentStage:'育秧期（7月17日田间确认）',
  owner:'湖北梦辰泽生态农业有限公司',
  story:'伍湖村依托 6300 亩稻虾共作基地，年产虾稻米约 700 万斤、小龙虾约 252 万斤。全村 518 户、2130 人，人均耕地 1.1 亩，户均增收约 1.8 万元。新红水稻种植合作社粮食产后服务中心为稻米加工提供保障。稻在水中长，虾在田中游——一块田串联起生态农业、特色产品和农旅体验。',
  buy:'本页面仅作数字化展示与调研演示，不设置在线销售、支付或预约功能。',
  imgs: [IMG.farmingPlanting, IMG.farmingMachine, IMG.farmerWork],
  sources:{ area:'陈书记', annualRice:'陈书记', owner:'产业负责人', story:'综合访谈整理（2026-07-17）' }
};

// ── 游玩路线 ──
var ROUTES = [
  { id:'route001', name:'伍湖农文旅半日路线', time:'约3-4小时',
    logic:'从伍湖村出发，串联产业和农旅体验。村内荷花池塘、打卡点可沿途参观。',
    points:['伍湖村村委会','稻虾共作基地','新红水稻种植合作社','伍湖四海生态园','龚华铭烈士纪念广场'],
    scenery:'沿途可观稻虾田、荷花池塘、村内风光、打卡景点和生态农旅场景。',
    emergency:'阴雨天优先安排室内访谈；无雷电且田埂不湿滑时经确认才进入户外。',
    img: IMG.checkinPanorama, desc:'适合实践队调研农业、文化和旅游资源。' },
  { id:'route002', name:'循迹云梦研学路线', time:'约半日',
    logic:'以云梦县博物馆为文化研学起点，参观睡虎地秦简和文物修复中心，再回到伍湖村。',
    points:['云梦县博物馆（睡虎地秦简/星空盘/文物修复中心）','伍湖村村委会','龚华铭烈士纪念广场','乡村振兴故事访谈点'],
    scenery:'形成"总书记云梦足迹—秦简文化传承—伍湖乡村实践"的展示链条。',
    emergency:'博物馆研学需提前确认开放时间。',
    img: IMG.museumStarry, desc:'适合学生党员循迹研学和文化传承主题展示。' },
  { id:'route003', name:'亲子生态体验路线', time:'约2-3小时',
    logic:'从生态农业科普切入生态园休闲体验，沿途设有网红打卡点。',
    points:['稻虾共作科普点','新红水稻合作社','伍湖四海生态园','村内打卡点','伴月居生态农庄'],
    scenery:'荷花池塘、打卡点特写、生态农业和农庄休闲氛围。',
    emergency:'需设遮阳、饮水、集合点和禁入水域提示。',
    img: IMG.villageLotus, desc:'适合游客体验生态农业与农旅融合。' }
];
