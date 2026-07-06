# 循迹悟思想 · 数智兴农旅

> 华中农业大学 2026 年暑期社会实践 | 学生党员实践专项
>
> 追寻习近平总书记足迹 · 走好新时代长征路
>
> 湖北省孝感市云梦县沙河乡伍湖村

## 项目简介

本项目围绕"农文旅融合"主线，设计并开发数字导览页面和农产品溯源系统，以数字技术串联农业生产、文化传播和旅游消费。

### 核心页面

- **数字导览首页** — 6个Tab：循迹研学（习近平考察云梦博物馆+长征90周年）、稻虾共作、特产溯源、游玩路线、节庆活动、微宣讲
- **农产品溯源页** — "一田一码"产品溯源，含图片轮播、产地地图、生产者信息、购买渠道、溯源二维码

## 技术栈

- 纯前端 H5（HTML + CSS + JS）
- 高德地图 JS API 2.0
- qrcode.js 前端二维码生成
- GitHub Pages 部署

## 本地运行

```bash
cd wuhu-tour
python -m http.server 8080
# 浏览器打开 http://localhost:8080
```

或双击 `server.bat`

## 如何修改内容

### 产品数据
编辑 `traceability/data/rice.json` 或 `crayfish.json`，刷新页面即可生效。

JSON 结构：
```json
{
  "name": "产品名",
  "origin": "产地",
  "gps": {"lat": 30.0, "lng": 113.0},
  "producer": {"name": "生产者", "avatar": "头像路径"},
  "method": "种养方式",
  "story": "产品故事",
  "images": ["图1.jpg", "图2.jpg"],
  "buyLink": "购买链接",
  "certifications": ["认证1", "认证2"]
}
```

### 地图点位
编辑 `assets/js/config.js` 中的 `TOUR_POIS` 数组，填入真实坐标后刷新。

### 页面文字
直接编辑 `index.html` 中各 Tab 的 `<section>` 区块，将 `placeholder` 类的内容替换为真实内容。

### 高德地图 Key
1. 注册高德开放平台：https://console.amap.com/dev/key/app
2. 获取 Web端(JS API) Key
3. 替换 `assets/js/config.js` 中的 `YOUR_AMAP_KEY`

## 部署

push 到 main 分支后，GitHub Pages 自动部署：
**https://hu-yk.github.io/wuhu-tour/**

## 项目结构

```
wuhu-tour/
├── index.html                 # 数字导览首页
├── assets/
│   ├── css/style.css          # 全局样式
│   ├── js/
│   │   ├── config.js          # 地图Key + POI配置
│   │   ├── map.js             # 高德地图共享模块
│   │   ├── main.js            # Tab切换 + 地图触发
│   │   └── qrcode.min.js      # 二维码生成库
│   └── images/                # 公共图片
├── traceability/
│   ├── index.html             # 溯源页
│   ├── trace.css / trace.js   # 溯源页样式与逻辑
│   ├── data/                  # 产品JSON数据
│   └── images/                # 产品图片
└── server.bat                 # 本地启动脚本
```
