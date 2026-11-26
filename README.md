# Rendering & VFX Lab

以 Unity 6／URP 為主的 24 週 Rendering & VFX 自學路線，涵蓋特效、Shader、風格化渲染與 GPU 效能分析，提供實作練習、自評題目及瀏覽器進度紀錄。

透過 **24 週、48 個主題**，搭配教材、最小實作及自評問題，逐步探索特效製作、技術美術與圖形程式方向。

網站提供學習指引與紀錄功能；實作練習需在 Unity 等對應工具中完成。

## 學習內容

| 週次 | 階段 | 重點 |
|---|---|---|
| 01–03 | Rendering Foundations | 渲染流程、Mesh、UV、材質、透明與深度 |
| 04–07 | VFX Production | 粒子、拖尾、序列幀、資產製作與特效節奏 |
| 08–11 | Shader Engineering | Shader Graph、動態效果、HLSL 與材質控制 |
| 12–16 | Stylized Rendering | 光照、PBR、NPR、角色材質與畫面調性 |
| 17–19 | Combat Presentation | 動畫時序、運鏡、聲畫同步與演出整合 |
| 20–24 | Graphics & Performance | Compute、GPU 粒子、Render Graph 與效能分析 |

每週建議投入 2–4 小時，可依需求調整進度，沒有固定起訖日期。

## 如何開始

1. 下載或 clone 本專案。
2. 將 HTML、CSS 與兩個 JS 檔案保留在同一資料夾。
3. 使用瀏覽器開啟 [index.html](index.html)。
4. 從總覽或側邊選單選擇週次，再進入主題。手機版可按左上角的選單按鈕切換週次。

瀏覽學習頁面不需要安裝 Node.js 或執行建置；外部教材需要網路。實作所需工具依主題而定，主要使用 Unity 6／URP，部分練習涉及 Blender、RenderDoc 等工具。請依專案使用的版本選擇相符教材。

## 建議操作流程

1. 閱讀「學習大綱」與「建議教材」。
2. 執行「最小實作」，先寫預測，再調整一個變因。
3. 在「我的推理與答案」記錄自評題目的回答。
4. 在「Evidence / Observation / Unknowns」記錄工具版本、操作步驟、Capture 或截圖路徑、觀察及未知項目。
5. 勾選「自評已完成」，並確認儲存提示。

答案、證據文字與完成狀態變更時會自動儲存，也可按「儲存紀錄」。完成標記代表個人自評，不等同正式驗收。證據欄位只保存文字，截圖與 Capture 檔案需自行保管。

## 備份與搬移紀錄

1. 在總覽按「匯出學習紀錄 JSON」，下載 `render-lab-progress.json` 備份。
2. 在另一個瀏覽器或網站的總覽按「匯入紀錄」，選擇備份檔。
3. 確認覆蓋提示後匯入，再檢查進度與答案。

**匯入會覆蓋目前紀錄，不會合併。**

紀錄存於目前瀏覽器的 `localStorage`，不會上傳 GitHub，也不會自動跨裝置同步。清除網站資料可能導致紀錄遺失；從本機檔案切換到部署網站時，請先匯出再匯入。若瀏覽器不允許儲存，應在關閉頁面前匯出備份。

## 檔案分工

| 檔案 | 用途 |
|---|---|
| [index.html](index.html) | 網站首頁入口與基本結構 |
| [Rendering_VFX_Lab_Roadmap.html](Rendering_VFX_Lab_Roadmap.html) | 舊入口，自動轉址到首頁並保留主題路徑 |
| [roadmap.css](roadmap.css) | 版面、配色與響應式樣式 |
| [roadmap-data.js](roadmap-data.js) | 週次、主題、教材來源與階段資料 |
| [roadmap.js](roadmap.js) | 導航、畫面呈現、進度儲存及匯入／匯出 |
