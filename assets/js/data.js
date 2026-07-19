// ══════ 一码游伍湖 · 共享数据 ══════
// 数据采集：2026年7月16-18日 | 来源：陈书记 / 产业负责人 / 五老 / 现场拍摄

var IMG = {
  // 云梦县博物馆
  museumExterior:  'assets/images/博物馆外景.jpg',
  museumExterior1: 'assets/images/博物馆外景1.jpg',
  museumExterior2: 'assets/images/博物馆外景2.jpg',
  museumVisit:     'assets/images/博物馆参观1.jpg',
  museum1:         'assets/images/博物馆1.jpg',
  museum2:         'assets/images/博物馆2.jpg',
  museum3:         'assets/images/博物馆3.jpg',
  museum4:         'assets/images/博物馆4.jpg',
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

  // 华农沈院长座谈
  meetingTotal:    'assets/images/华中农业大学沈院长与陈书记对话交流（总）.jpg',
  meetingShen:     'assets/images/华中农业大学沈院长与陈书记对话交流（沈院长）.jpg',
  meetingChen:     'assets/images/华中农业大学沈院长与陈书记对话交流（陈书记）.jpg',
  handshake:       'assets/images/华中农业大学沈院长与陈书记握手.jpg',
  plaque:          'assets/images/华中农业大学沈院长与陈书记递送基地牌匾.jpg',

  // 座谈其他
  leaderSpeech:    'assets/images/组长讲话.jpg',
  partyMember:     'assets/images/党员，廉洁.jpg',

  // 农业与产业
  farmingPlanting: 'assets/images/耕作插秧1.jpg',
  farmingMachine:  'assets/images/开插秧机器.jpg',
  farmingMachine1: 'assets/images/开插秧机器1.jpg',
  farmerWork:      'assets/images/农民工作1.jpg',
  riceCooperative: 'assets/images/新红水稻种植合作社粮食产后服务中心.jpg',

  // 生态园 & 游乐园
  ecoPark:         'assets/images/五湖四海生态园.jpg',
  ecoBridge:       'assets/images/生态园内部拱桥.jpg',
  ecoRoad:         'assets/images/生态园内部道路.jpg',
  amusementPark:   'assets/images/伍子游乐园.jpg',
  slide:           'assets/images/游乐园儿童滑梯.jpg',
  slideWindmill:   'assets/images/游乐园风车滑梯.jpg',
  visitor:         'assets/images/游乐园游客.jpg',
  waterRestaurant: 'assets/images/水上餐厅.jpg',
  waterRestaurantView: 'assets/images/水上餐厅风景.jpg',
  waterPlayroom:   'assets/images/水上娱乐室.jpg',
  entertainment1:  'assets/images/娱乐室内景.jpg',
  entertainment2:  'assets/images/娱乐室内景1.jpg',

  // 村容村貌
  villageView1:    'assets/images/村内风光.jpg',
  villageView2:    'assets/images/村内风景.jpg',
  villageLotus:    'assets/images/村内荷花.jpg',
  villagePond:     'assets/images/村内池塘.jpg',
  checkinPanorama: 'assets/images/打卡点全景.jpg',
  checkinCloseup:  'assets/images/打卡点特写.jpg',
  benchLandmark:   'assets/images/长椅地标.jpg',

  // 视频
  minsuVideo:      'assets/images/特色民宿.mp4',

  // 占位图
  heroRed:         'assets/images/red-hero.svg',
  heroGreen:       'assets/images/farming-hero.svg',
  ogCover:         'assets/images/og-cover.svg'
};

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

var STORIES = [
  { id:'museum001', title:'云梦县博物馆', type:'总书记考察足迹',
    content:'2024年11月，习近平总书记来到湖北省孝感市云梦县博物馆，参观出土秦汉简牍展，就文物保护研究利用和中华优秀传统文化传承发展作出重要指示。7月16日，实践队追寻总书记足迹，赴云梦县博物馆开展研学，参观博物馆展陈、睡虎地秦简专题展、文物修复中心和星空盘等展区。沿着总书记的考察足迹，深刻学习历史文化资源保护利用经验，增强文化自信。',
    action:'追寻足迹：参观云梦县博物馆展陈、睡虎地秦简、星空盘、文物修复中心。拍摄研学视频与照片资料。',
    imgs: [IMG.museumExterior, IMG.museumExterior1, IMG.museumExterior2, IMG.museumVisit, IMG.museum1, IMG.museum2, IMG.museum3, IMG.museum4, IMG.museumStarry],
    video: IMG.museumVideo,
    source:'2026-07-16 现场研学', status:'已完成' },
  { id:'jian001', title:'睡虎地秦简', type:'传统文化资源',
    content:'睡虎地秦简是云梦县博物馆的镇馆之宝，包括《为吏之道》《编年纪》等珍贵简牍。这些竹简出土于云梦睡虎地秦墓，真实记录秦代法律制度、官吏管理和编年历史，是中国考古学重大发现之一。博物馆通过"秦简说法"等展示板块，让游客近距离了解秦简的历史价值。云梦深厚的秦汉文化底蕴，正成为推进文化传承保护与文旅融合发展的重要基础。',
    action:'学习为吏之道、编年纪等珍贵秦简内容；参观文物修复中心了解文物保护技术；推动传统文化从"看得见"走向"讲得出、传得开"。',
    imgs: [IMG.qinSlips1, IMG.qinSlipsLaw, IMG.qinSlipsChronic, IMG.qinSlipsExplain, IMG.museumRestore],
    source:'云梦县博物馆展陈', status:'已采集' },
  { id:'meeting001', title:'华农沈院长与陈书记会谈', type:'基地揭牌',
    content:'7月17日，华中农业大学沈院长一行来到伍湖村，与村陈书记举行会谈。双方就校地合作、实践基地建设、乡村振兴人才培养和农文旅融合发展等议题展开深入交流。会谈结束后，沈院长与陈书记亲切握手，并递送"华中农业大学社会实践基地"牌匾，标志着华农与伍湖村正式建立合作关系，为暑期实践和后续产学研合作奠定了坚实基础。',
    action:'华中农业大学与伍湖村建立社会实践基地合作关系；双方围绕乡村振兴、农文旅融合展开深入交流；拍摄座谈全流程照片与视频。',
    imgs: [IMG.meetingTotal, IMG.meetingShen, IMG.meetingChen, IMG.handshake, IMG.plaque],
    source:'2026-07-17 现场座谈', status:'已完成' },
  { id:'red001', title:'龚华铭烈士纪念广场', type:'红色文化',
    content:'龚华铭烈士纪念广场是伍湖村重要的红色教育基地，广场中心矗立着烈士纪念碑，碑旁建有烈士像。实践队于7月16日前往纪念广场开展红色研学活动，全体队员瞻仰烈士纪念碑、学习龚华铭烈士的英勇事迹，在广场上重温入党誓词。追寻红色足迹，赓续红色血脉，将革命精神内化于心、外化于行，引导青年党员在乡村振兴一线践行初心使命。',
    action:'瞻仰烈士纪念碑与烈士像；学习龚华铭烈士英勇事迹；重温入党誓词；拍摄红色研学记录。',
    imgs: [IMG.martyrMemorial, IMG.martyrStatue, IMG.martyrMonument],
    source:'2026-07-16 现场走访', status:'已完成' },
  { id:'talk001', title:'座谈会与党员教育', type:'人物故事',
    content:'7月17日，实践队在伍湖村召开座谈会。组长在会议上讲话，向村方介绍团队成员和实践计划，并就伍湖村产业发展、文化传承和数字化建设等议题提出团队的服务方案。会议期间还开展党员廉洁教育，强调"党员，廉洁"的纪律底线，引导青年党员在实践中保持清正廉洁作风，用行动展现新时代青年党员的良好形象。',
    action:'实践组长汇报团队计划与服务方案；开展党员廉洁纪律教育；记录座谈会全过程文字与影像资料。',
    imgs: [IMG.leaderSpeech, IMG.partyMember],
    source:'2026-07-17 座谈会', status:'已完成' },
  { id:'farm001', title:'稻虾共作产业', type:'产业聚焦',
    content:'伍湖村稻虾共作面积达6300亩，是全村支柱产业。农户利用稻田水面养殖小龙虾，实现"一水两用、一田双收、粮渔共赢"。当前正值育秧期，大型插秧机械正在田间作业，机械插秧逐步替代人工插秧，大幅提高了种植效率。平时田间管理由农户分工负责，水稻年产约700万斤、小龙虾约252万斤。稻在水中长，虾在田中游——一田双收的绿色循环模式让伍湖村成为了农文旅融合的典型样板。',
    action:'深入稻虾共作基地调研产业模式；拍摄机械化插秧作业现场；采访农户了解生产投入与收益情况。',
    imgs: [IMG.farmingPlanting, IMG.farmingMachine, IMG.farmingMachine1, IMG.farmerWork],
    source:'2026-07-17 产业负责人/农户访谈', status:'已完成' },
  { id:'coop001', title:'新红水稻种植合作社', type:'产业配套',
    content:'新红水稻种植合作社是伍湖村重要的产业配套组织，建有粮食产后服务中心。合作社为全村水稻提供烘干、仓储、加工等产后服务，解决了农户"种得出、晒不干、存不住"的难题。在合作社的带动下，稻米品质和附加值显著提升，户均增收约1.8万元。合作社还对接市场销售渠道，帮助农户将虾稻米销往全国各地，成为连接小农户与大市场的桥梁。',
    action:'参观粮食产后服务中心了解水稻烘干、仓储、加工全流程；了解合作社运营模式与农户收益提升情况。',
    imgs: [IMG.riceCooperative],
    source:'2026-07-17 合作社现场考察', status:'已完成' },
  { id:'eco001', title:'五湖四海生态园', type:'农旅融合',
    content:'五湖四海生态园是伍湖村农文旅融合的核心承载项目。园区占地广阔，内部建有拱桥流水、景观道路，环境优美。生态园集稻虾科普、农耕体验、观光休闲于一体，设有钓虾体验区、生态采摘区和农副产品展示区。游客在这里可以亲手体验钓虾、采摘的乐趣，品尝地道农家菜，购买伍湖虾稻米等特色农产品。年接待游客约15万人次，是伍湖村农旅收入的重要来源。',
    action:'走访生态园各功能区；拍摄拱桥、道路等园区设施；采访园区负责人了解运营情况。',
    imgs: [IMG.ecoPark, IMG.ecoBridge, IMG.ecoRoad],
    source:'2026-07-19 生态园调研', status:'已完成' },
  { id:'amuse001', title:'伍子游乐园', type:'亲子旅游',
    content:'伍子游乐园是五湖四海生态园配套的儿童游乐设施区域，配备儿童滑梯、风车滑梯等游乐器材，每逢节假日和周末吸引大量亲子家庭前来游玩。园区铺设有彩色地面，安全防护设施齐全，入口处设有游乐园标识牌，是伍湖村农旅融合"亲子经济"的成功案例。游乐园与生态园联动，形成"大人观景、孩子游乐"的家庭消费场景，有效延长了游客停留时间。',
    action:'实地考察游乐园设施与运营情况；了解亲子游客流量与消费需求。',
    imgs: [IMG.amusementPark, IMG.slide, IMG.slideWindmill, IMG.visitor],
    source:'2026-07-19 现场走访', status:'已完成' },
  { id:'water001', title:'水上餐厅与娱乐休闲', type:'餐饮休闲',
    content:'水上餐厅是伍湖村特色餐饮设施，建在水面上，游客可以在用餐时欣赏荷塘风光和田园景色。餐厅提供农家菜、生态鱼和当地特色美食，环境清幽。毗邻的水上娱乐室为游客提供室内休闲空间，娱乐室内景布置温馨舒适。水上餐厅与生态园、游乐园形成完整的一日游消费链条——上午游玩，中午用餐，下午休闲，满足了不同游客群体的需求。',
    action:'走访水上餐厅了解餐饮经营情况；参观水上娱乐室与室内休闲设施。',
    imgs: [IMG.waterRestaurant, IMG.waterRestaurantView, IMG.waterPlayroom, IMG.entertainment1, IMG.entertainment2],
    source:'2026-07-19 现场走访', status:'已完成' },
  { id:'village001', title:'村容村貌与网红打卡点', type:'乡村风光',
    content:'伍湖村绿树环绕、荷塘连片，村内荷花盛放时节美不胜收。村口设有特色打卡点和长椅地标，供游客拍照留念。村内池塘映照田园风光，漫步村道可以欣赏稻虾田、荷花和乡村建筑构成的独特风景线。从"生产型乡村"到"旅游型乡村"，伍湖村通过人居环境整治和景观提升工程，正逐步打造宜居宜游的和美乡村。这些打卡点也成为短视频平台上的热门素材，吸引了大量自媒体和游客前来拍摄分享。',
    action:'拍摄村内风光、荷花、池塘等美丽乡村影像；记录打卡点与长椅地标的游客使用情况。',
    imgs: [IMG.villageView1, IMG.villageView2, IMG.villageLotus, IMG.villagePond, IMG.checkinPanorama, IMG.checkinCloseup, IMG.benchLandmark],
    source:'7月17-19日 现场拍摄', status:'已完成' },
  { id:'minsu001', title:'特色民宿', type:'住宿体验',
    content:'伍湖村配套建有特色民宿，为远道而来的游客提供住宿服务。民宿融合乡村建筑风格与现代住宿设施，周边环境清静宜人。特色民宿的建设是伍湖村从"一日游"向"过夜游"升级的重要举措，延长了游客停留时间，带动了餐饮、购物等二次消费，也为团队研学、亲子度假提供了住宿条件。',
    action:'参观特色民宿了解住宿接待能力；拍摄民宿实景视频记录。',
    imgs: [],
    video: IMG.minsuVideo,
    source:'2026-07-19 现场拍摄', status:'已完成' },
  { id:'wulao001', title:'"读懂中国"五老专访', type:'读懂中国',
    content:'7月18日，实践队开展"读懂中国"主题专访活动，采访了伍湖村的"五老"代表——老干部、老战士、老专家、老教师或老模范。受访者深情回顾了个人艰苦奋斗的历程，分享了家乡几十年来发生的翻天覆地的变化，表达了对乡村振兴战略的欣喜和对青年一代的殷切期待。面对镜头，五老代表为青年大学生送上衷心寄语：希望青年用所学知识回馈社会、报效祖国，在新时代的长征路上坚定前行。',
    action:'采访五老代表，录制访谈视频与青年寄语；整理人物故事材料用于"读懂中国"征文；核对受访者身份、经历与荣誉。',
    imgs: [],
    source:'2026-07-18 五老专访', status:'已完成' }
];

var AGRICULTURE_MODULES = [
  { title:'稻虾共作', tag:'生态农业',
    desc:'全村稻虾共作 6300 亩。水稻年产约 700 万斤，小龙虾亩产约 400 斤。形成"一田双收、绿色循环"的生态种养模式。',
    img: IMG.farmingPlanting, source:'陈书记（2026-07-17）' },
  { title:'生产周期', tag:'全年种养',
    desc:'3-4月投放虾苗 + 育秧；5-6月龙虾捕捞；6月中水稻插秧；9-10月收割。插秧机械化正在推广中。',
    img: IMG.farmingMachine, source:'产业负责人（2026-07-17）' },
  { title:'粮食产后服务', tag:'产业配套',
    desc:'新红水稻种植合作社粮食产后服务中心为全村水稻提供烘干、仓储、加工等产后服务。',
    img: IMG.riceCooperative, source:'合作社（2026-07-17）' },
  { title:'梦辰泽农业', tag:'产业主体',
    desc:'湖北梦辰泽生态农业有限公司是伍湖村稻虾产业核心经营主体，负责种养技术、加工、品牌和销售。',
    img: IMG.ecoPark, source:'企业负责人（2026-07-17）' },
  { title:'农户增收', tag:'产业效益',
    desc:'户均增收约 1.8 万元。原农民打工年均约 10 万元。务工约 100 元/天，研学志愿者约 150 元/天。全村 518 户、2130 人，人均耕地 1.1 亩。',
    img: IMG.farmerWork, source:'陈书记（2026-07-17）' },
  { title:'农旅融合', tag:'旅游数据',
    desc:'年接待游客约 15 万人次，旅游综合收入约 200 万元。伍湖四海生态园、伍子游乐园、水上餐厅等为主要承载点位。',
    img: IMG.amusementPark, source:'陈书记（2026-07-17）' }
];

var FIELD_DATA = {
  id:'field001', name:'伍湖虾稻米', code:'WH-FIELD-001',
  place:'湖北省孝感市云梦县沙河乡伍湖村', method:'稻虾共作生态种养',
  area:'6300 亩', annualRice:'约 700 万斤（3500 吨）',
  annualCrayfish:'约 252 万斤（亩产约 400 斤）',
  currentStage:'育秧期（7月17日田间确认）',
  owner:'湖北梦辰泽生态农业有限公司',
  story:'伍湖村依托 6300 亩稻虾共作基地，年产虾稻米约 700 万斤、小龙虾约 252 万斤。全村 518 户、2130 人，人均耕地 1.1 亩，户均增收约 1.8 万元。新红水稻种植合作社粮食产后服务中心为稻米加工提供保障。',
  buy:'本页面仅作数字化展示与调研演示，不设置在线销售、支付或预约功能。',
  sources:{ area:'陈书记', annualRice:'陈书记', owner:'产业负责人', story:'综合访谈整理（2026-07-17）' }
};

var ROUTES = [
  { id:'route001', name:'伍湖农文旅半日路线', time:'约3-4小时',
    logic:'从伍湖村出发，串联产业和农旅体验。村内荷花池塘、打卡点、伍子游乐园可沿途参观。',
    points:['伍湖村村委会','稻虾共作基地','新红水稻合作社','五湖四海生态园','伍子游乐园','水上餐厅','龚华铭烈士纪念广场'],
    scenery:'沿途可观稻虾田、荷花池塘、打卡景点、游乐园和生态农旅场景。',
    emergency:'阴雨天优先安排室内访谈；无雷电且田埂不湿滑时经确认才进入户外。',
    img: IMG.checkinPanorama, desc:'适合实践队调研农业、文化和旅游资源。' },
  { id:'route002', name:'循迹云梦研学路线', time:'约半日',
    logic:'以云梦县博物馆为文化研学起点，参观睡虎地秦简和文物修复中心，再回到伍湖村。',
    points:['云梦县博物馆（睡虎地秦简/星空盘/文物修复中心）','伍湖村村委会','龚华铭烈士纪念广场'],
    scenery:'形成"总书记云梦足迹—秦简文化传承—伍湖乡村实践"的展示链条。',
    emergency:'博物馆研学需提前确认开放时间。',
    img: IMG.museumStarry, desc:'适合学生党员循迹研学和文化传承主题展示。' },
  { id:'route003', name:'亲子生态体验路线', time:'约2-3小时',
    logic:'从生态农业科普切入生态园休闲体验，沿途设有网红打卡点和游乐园。',
    points:['稻虾共作科普点','新红水稻合作社','五湖四海生态园','伍子游乐园（儿童滑梯/风车滑梯）','水上餐厅','村内打卡点'],
    scenery:'荷花池塘、生态园拱桥、游乐园设施、水上餐厅风景和农庄休闲氛围。',
    emergency:'需设遮阳、饮水、集合点和禁入水域提示。',
    img: IMG.amusementPark, desc:'适合游客体验生态农业与农旅融合。' }
];
