// ===== 高德地图配置 =====
// 出发前替换为真实 Key：https://console.amap.com/dev/key/app
var AMAP_CONFIG = {
  key: '4fdae096ccadbd8631d6ea2557a6b2a7',
  securityJsCode: '',          // 创建Key时若启用了安全密钥则填写，否则留空
  version: '2.0',
  center: [113.7, 31.0],
  zoom: 13
};

// ===== 游玩路线 POI 数据 =====
// 现场采集真实坐标后替换
var TOUR_POIS = [
  {
    name: '伍湖四海生态园',
    lng: 113.7000,
    lat: 31.0000,
    desc: '现场补充：园区入口',
    icon: 'park'
  },
  {
    name: '稻虾共作基地',
    lng: 113.7005,
    lat: 31.0005,
    desc: '现场补充：核心种养示范区',
    icon: 'farm'
  },
  {
    name: '龚华铭烈士纪念广场',
    lng: 113.7010,
    lat: 31.0010,
    desc: '现场补充：红色教育基地',
    icon: 'red'
  },
  {
    name: '生态农庄',
    lng: 113.7015,
    lat: 31.0015,
    desc: '现场补充：农家餐饮体验',
    icon: 'food'
  }
];

// 图标映射（使用高德默认图标或自定义图片）
var ICON_MAP = {
  park:  { style: 'red',    label: '园' },
  farm:  { style: 'green',  label: '田' },
  red:   { style: 'red',    label: '红' },
  food:  { style: 'orange', label: '食' }
};
