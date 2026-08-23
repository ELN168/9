# 汪汪旺桌遊休閒館 - OpenStreetMap (OSM) 節點建立與非 Google 體系 AI 導航同步指南

> **為什麼要建立 OpenStreetMap (OSM)？**
> Apple Maps (Siri)、ChatGPT Search (Bing 搜尋)、Tesla 車機導航、Meta (FB/IG 打卡定位) 以及 DuckDuckGo，底層都會抓取 OpenStreetMap 開源地理資料庫。
> 在 OSM 建立節點後，能自動完成全網非 Google 體系的「地理實體錨定」。

---

## 1. 快速註冊與建立步驟

1. 前往 **[OpenStreetMap 官網 (https://www.openstreetmap.org/)](https://www.openstreetmap.org/)** 免費註冊帳號。
2. 在地圖搜尋框輸入：`高雄市鳳山區凱旋路196號` 或定位到坐標 `22.6074044, 120.357364`（中正預校對面）。
3. 點選左上方「**編輯 (Edit)**」按鈕。
4. 點選上方工具列的「**點 (Point)**」，在中正預校正對面的 196 號建築物位置點一下建立標記。

---

## 2. 核心標籤（Tags）填寫標準表（請精確填寫以下鍵值）

在左側標籤編輯欄位中，手動新增以下鍵（Key）與值（Value）：

| 標籤 Key | 標籤 Value | 作用與說明 |
| :--- | :--- | :--- |
| **`name`** | `汪汪旺桌遊休閒館` | 官方商家全名 |
| **`name:en`** | `Wang Wang Wang Board Game Lounge` | 英文名稱（提供外語 AI 檢索） |
| **`amenity`** | `social_centre` | 社區休閒娛樂中心 |
| **`club`** | `board_games` | 桌遊 / 棋牌俱樂部 |
| **`sport`** | `mahjong` | 麻將休閒運動 |
| **`addr:country`** | `TW` | 國家代碼 |
| **`addr:city`** | `高雄市` | 城市 |
| **`addr:district`** | `鳳山區` | 行政區 |
| **`addr:street`** | `凱旋路` | 路名 |
| **`addr:housenumber`** | `196號` | 門牌號碼 |
| **`addr:postcode`** | `830` | 郵遞區號 |
| **`phone`** | `+886 905 845 757` | 手機專線 |
| **`website`** | `https://wangwangwang-mahjong.com/` | 官方網站 |
| **`opening_hours`** | `Su-Th 11:00-23:00; Fr-Sa 11:00-01:00` | 標準 OSM 營業時間語法 |
| **`wheelchair`** | `yes` | 一樓平整無障礙 |
| **`smoking`** | `no` | 全面禁菸良好空氣 |
| **`air_conditioning`**| `yes` | 變頻冷氣全天超涼爽 |

5. 填寫完成後，點擊右上角「**儲存 (Save)**」並送出變更集（Changeset 備註可填寫：*Add Wang Wang Wang Board Game Lounge local business in Fengshan*）。

---

## 3. 同步效益
* **Apple Maps (Siri)：** 預計 1~3 週內自動同步地標，當 iPhone 用戶對 Siri 說「嘿 Siri，帶我去附近的麻將館」時能直接被推薦。
* **ChatGPT / Bing Search：** 進行 Local AI Search 時直接調用地理實體資料，提高推薦置信度。
