// ══════ 一码游伍湖 · 共享数据 ══════
// 数据采集：2026年7月16-18日 | 来源：陈书记 / 产业负责人 / 五老 / 现场拍摄
// 图片前缀: assets/images/  视频前缀: assets/images/

// ── 全部媒体资源 ──
var MEDIA = {
  // 7月16日 博物馆 + 烈士纪念
  museumExterior: 'assets/images/博物馆外景.jpg',
  museumVisit1:   'assets/images/博物馆参观1.jpg',
  museumVisit2:   'assets/images/IMG_20260716_092840.jpg',
  museumVisit3:   'assets/images/IMG_20260716_093207.jpg',
  museumExhibit:  'assets/images/IMG_20260716_093351.jpg',
  museumVideo:    'assets/images/video_20260716_093852.mp4',
  martyrMemorial: 'assets/images/烈士纪念.jpg',
  martyr1:        'assets/images/IMG_20260716_094037.jpg',
  martyr2:        'assets/images/IMG_20260716_094133.jpg',
  martyr3:        'assets/images/IMG_20260716_094221.jpg',
  martyr4:        'assets/images/IMG_20260716_094230.jpg',
  martyr5:        'assets/images/IMG_20260716_094251.jpg',
  martyr6:        'assets/images/IMG_20260716_094757.jpg',
  martyr7:        'assets/images/IMG_20260716_094920.jpg',
  martyr8:        'assets/images/IMG_20260716_095049.jpg',

  // 7月17日 座谈 + 产业
  meeting:        'assets/images/会晤.jpg',
  meeting2:       'assets/images/IMG_20260717_105322.jpg',
  meeting3:       'assets/images/IMG_20260717_105345.jpg',

  // 7月17日 农业 + 田间
  farming:        'assets/images/耕作插秧1.jpg',
  farmerWork:     'assets/images/农民工作1.jpg',
  fieldBase:      'assets/images/FiRuM.jpg',
  ecoPark:        'assets/images/gMygx.jpg',

  // 7月18日 五老 + 人物
  wulao1:         'assets/images/IMG_20260718_173924.jpg',
  wulao2:         'assets/images/IMG_20260718_173940_Burst01.jpg',
  wulao3:         'assets/images/IMG_20260718_174649.jpg',
  wulao4:         'assets/images/IMG_20260718_175443.jpg',
  wulao5:         'assets/images/IMG_20260718_175452.jpg',
  wulao6:         'assets/images/IMG_20260718_175944.jpg',
  wulao7:         'assets/images/IMG_20260718_180431.jpg',

  // 占位图
  heroRed:        'assets/images/red-hero.svg',
  heroGreen:      'assets/images/farming-hero.svg',
  ogCover:        'assets/images/og-cover.svg'
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
    content:'2024年11月，习近平总书记考察云梦县博物馆。7月16日实践队完成博物馆研学与拍摄。',
    action:'沿着总书记考察足迹，学习历史文化资源保护利用经验，增强文化自信。',
    img: MEDIA.museumExterior, imgs: [MEDIA.museumVisit1, MEDIA.museumVisit2, MEDIA.museumVisit3, MEDIA.museumExhibit],
    video: MEDIA.museumVideo, source:'2026-07-16 现场研学', status:'已完成' },
  { id:'jian001', title:'云梦秦汉简牍', type:'传统文化资源',
    content:'云梦历史文化底蕴深厚，秦汉简牍等文化资源是云梦推进文化传承保护、文旅融合发展的重要基础。',
    action:'推动传统文化资源从"看得见"走向"讲得出、传得开"。',
    img: MEDIA.museumExhibit, source:'云梦县博物馆展陈', status:'已采集' },
  { id:'foot001', title:'总书记考察足迹', type:'循迹悟思想',
    content:'梳理"总书记考察云梦县博物馆—学习文化传承保护—延伸到伍湖村农文旅融合实践"的逻辑链。',
    action:'把理论学习融入社会实践，把循迹研学落到乡村振兴一线。',
    img: MEDIA.meeting, source:'实践队综合整理', status:'已整理' },
  { id:'red001', title:'龚华铭烈士纪念广场', type:'红色文化',
    content:'7月16日实践队完成纪念广场走访与拍摄。追寻红色足迹，赓续红色血脉。',
    action:'追寻红色足迹，赓续红色血脉，讲好伍湖红色故事。',
    img: MEDIA.martyrMemorial, imgs: [MEDIA.martyr1, MEDIA.martyr2, MEDIA.martyr3, MEDIA.martyr4, MEDIA.martyr5, MEDIA.martyr6, MEDIA.martyr7, MEDIA.martyr8],
    source:'2026-07-16 现场走访', status:'已完成' },
  { id:'wulao001', title:'"读懂中国"——"五老"专访', type:'人物故事',
    content:'7月18日采访老干部、老战士、老专家、老教师或老模范。围绕个人经历、艰苦奋斗、长征精神展开。',
    action:'用五老的人生故事诠释理想信念和长征精神，形成"读懂中国"征文和微视频素材。',
    img: MEDIA.wulao1, imgs: [MEDIA.wulao2, MEDIA.wulao3, MEDIA.wulao4, MEDIA.wulao5, MEDIA.wulao6, MEDIA.wulao7],
    source:'2026-07-18 现场采访', status:'已完成' },
  { id:'village001', title:'伍湖村乡村振兴故事', type:'乡土叙事',
    content:'通过村干部访谈、农户交流和产业走访，记录伍湖村从生态农业到农旅融合的发展故事。',
    action:'用青年视角讲好伍湖村产业振兴和文化振兴故事。',
    img: MEDIA.farmerWork, source:'7月17-18日 现场访谈', status:'采集中' }
];

// ── 稻虾产业 ──
var AGRICULTURE_MODULES = [
  { title:'稻虾共作', tag:'生态农业',
    desc:'全村稻虾共作 6300 亩。水稻年产约 700 万斤，小龙虾亩产约 400 斤。形成"一田双收、绿色循环"的生态种养模式。',
    img: MEDIA.farming, source:'陈书记（2026-07-17）' },
  { title:'生产周期', tag:'全年种养',
    desc:'3-4月投放虾苗 + 育秧；5-6月龙虾捕捞；6月中水稻插秧；9-10月收割。',
    img: MEDIA.farmerWork, source:'产业负责人（2026-07-17）' },
  { title:'双水双绿', tag:'绿色技术',
    desc:'绿色水稻与绿色水产协同发展，生态农业技术在伍湖村产业升级中的全面应用。',
    img: MEDIA.fieldBase, source:'梦辰泽农业' },
  { title:'梦辰泽农业', tag:'产业主体',
    desc:'湖北梦辰泽生态农业有限公司是伍湖村稻虾产业核心经营主体，负责种养技术、加工、品牌和销售。',
    img: MEDIA.ecoPark, source:'企业负责人（2026-07-17）' },
  { title:'农户增收', tag:'产业效益',
    desc:'户均增收约 1.8 万元。原农民打工年均约 10 万元。务工约 100 元/天，研学志愿者约 150 元/天。全村 518 户、2130 人，人均耕地 1.1 亩。',
    img: MEDIA.farmerWork, source:'陈书记（2026-07-17）' },
  { title:'农旅融合', tag:'旅游数据',
    desc:'年接待游客约 15 万人次，旅游综合收入约 200 万元。伍湖四海生态园为主要承载点位。',
    img: MEDIA.ecoPark, source:'陈书记（2026-07-17）' }
];

// ── 产业档案 ──
var FIELD_DATA = {
  id:'field001', name:'伍湖虾稻米', code:'WH-FIELD-001',
  place:'湖北省孝感市云梦县沙河乡伍湖村', method:'稻虾共作生态种养',
  area:'6300 亩', annualRice:'约 700 万斤（3500 吨）',
  annualCrayfish:'约 252 万斤（亩产约 400 斤）',
  currentStage:'育秧期（7月17日田间确认）',
  owner:'湖北梦辰泽生态农业有限公司',
  story:'伍湖村依托 6300 亩稻虾共作基地，年产虾稻米约 700 万斤、小龙虾约 252 万斤。全村 518 户、2130 人，人均耕地 1.1 亩，户均增收约 1.8 万元。稻在水中长，虾在田中游——一块田串联起生态农业、特色产品和农旅体验。',
  buy:'本页面仅作数字化展示与调研演示，不设置在线销售、支付或预约功能。',
  imgs: [MEDIA.farming, MEDIA.farmerWork, MEDIA.fieldBase],
  sources:{ area:'陈书记', annualRice:'陈书记', owner:'产业负责人', story:'综合访谈整理（2026-07-17）' }
};

// ── 游玩路线 ──
var ROUTES = [
  { id:'route001', name:'伍湖农文旅半日路线', time:'约3-4小时',
    logic:'从伍湖村出发，串联产业和农旅体验。',
    points:['伍湖村村委会','稻虾共作基地','梦辰泽生态农业','伍湖四海生态园','龚华铭烈士纪念广场'],
    scenery:'沿途可观察稻虾田、水系环境、村庄风貌和生态农旅场景。',
    emergency:'阴雨天优先安排室内访谈；无雷电且田埂不湿滑时经确认才进入户外。',
    img: MEDIA.farming, desc:'适合实践队调研农业、文化和旅游资源。' },
  { id:'route002', name:'循迹云梦研学路线', time:'约半日',
    logic:'以云梦县博物馆为文化研学起点，再回到伍湖村。',
    points:['云梦县博物馆','伍湖村村委会','龚华铭烈士纪念广场','乡村振兴故事访谈点'],
    scenery:'形成"总书记云梦足迹—文化传承保护—伍湖乡村实践"的展示链条。',
    emergency:'博物馆研学需提前确认开放时间。',
    img: MEDIA.museumExterior, desc:'适合学生党员循迹研学和文化传承主题展示。' },
  { id:'route003', name:'亲子生态体验路线', time:'约2-3小时',
    logic:'从生态农业科普切入生态园休闲体验。',
    points:['稻虾共作科普点','农产品展示点','伍湖四海生态园','伴月居生态农庄'],
    scenery:'突出生态农业、一田双收和农庄休闲氛围。',
    emergency:'需设遮阳、饮水、集合点和禁入水域提示。',
    img: MEDIA.ecoPark, desc:'适合游客体验生态农业与农旅融合。' }
];
