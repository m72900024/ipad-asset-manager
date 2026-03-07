# 📱 iPad 資產管理系統

> 適用於學校或機構管理多台 iPad 設備的輕量化雲端系統。

## 功能

- 📊 **充電車分佈概覽**：一眼掌握所有 iPad 位置
- 🔍 **單台查詢**：輸入編號快速找到 iPad 目前位置
- 🚚 **充電車搬移**：整車移動，一鍵同步更新
- ➕ **新增設備**：支援單一新增與批次匯入
- ✏️ **修改設備編號**：設備重新標號時使用
- 🔍 **MDM 未使用查詢**：從教育部 MDM 系統貼上清單，自動查詢哪台在哪台車
- 📋 **操作紀錄**：所有異動皆有 log 留存
- 💾 **離線版**：無網路環境也可使用（內建 CSV 資料）

## 版本

| 版本 | 說明 |
|------|------|
| 線上版（online.html） | Firebase 雲端，需 Google 登入 |
| 離線版（offline.html） | 內建 CSV，無需網路 |
| MDM 查詢（lookup.html） | 獨立查詢工具，含離線資料 |

## 快速開始

### 1. 建立 Firebase 專案

1. 前往 [Firebase Console](https://console.firebase.google.com/)
2. 建立新專案
3. 啟用 **Firestore Database**
4. 設定 **Authentication**（啟用 Google 登入）

### 2. 設定管理員

在 `online.html` 找到以下設定並修改：

```js
const ADMIN_EMAILS = ["your-email@gmail.com"];
```

### 3. 匯入初始資料

開啟 `seed.html`，登入管理員帳號後貼上 CSV 資料：

```
設備編號, 隸屬充電車, 目前充電車, 存放地點
iPad-001, 充電車1, 充電車1, 教室A
iPad-002, 充電車1, 充電車1, 教室A
```

### 4. 部署

推薦使用 **GitHub Pages**（免費）：

1. 將檔案推送到 GitHub repo
2. 到 Settings → Pages → 選擇 `main` branch
3. 完成！網址為 `https://帳號.github.io/repo名稱/`

## MDM 未使用查詢

從[教育部學習載具管理系統](https://mdm.edu.tw/)複製「未使用載具名稱」欄位，貼到「🔍 MDM 查詢」頁籤即可自動比對充電車與班級位置。

**比對規則**：
- 完整編號比對（優先）
- 尾數數字比對（容錯）

## 資料格式

Firestore 每筆文件結構：

| 欄位 | 說明 | 範例 |
|------|------|------|
| id | 設備唯一編號（文件 ID） | `iPad-001` |
| assignedCart | 隸屬充電車 | `充電車1` |
| currentCart | 目前充電車 | `充電車1` |
| currentLocation | 存放地點 | `教室A` |

## 技術棧

- **前端**：HTML + Tailwind CSS（CDN）
- **後端**：Firebase Firestore
- **認證**：Firebase Authentication（Google）
- **部署**：GitHub Pages

## 更新日誌

詳見 [CHANGELOG.md](./CHANGELOG.md)
