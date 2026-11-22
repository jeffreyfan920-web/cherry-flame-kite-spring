# 事頭婆茶座 (Si Tou Po Tea Cafe) — 本地餐飲小店官網 Demo

呢個專案係為香港馬鞍山大水坑村一間人情味茶座設計嘅現代化手機優先（Mobile-First）官網 Demo。核心目標係幫助本地小店喺**無需依賴第三方外賣平台抽成或購買昂貴 POS 系統**嘅情況下，直接將訪客轉化為 WhatsApp 外賣預訂及到會查詢。

🔗 **線上預覽（Live Demo）**：https://cherry-flame-kite-spring.vercel.app/

---

## 🚀 核心商業轉化功能

- **零後端 WhatsApp 外賣估算購物車**：客人點選「招牌港式早餐」、「經典常餐」或「咖啡茶飲」後，系統會即時自動計算總金額（HK$），撳「發送 WhatsApp 預訂」即可將已選菜式清單、數量及總價自動帶入 `wa.me` 連結，一鍵發送至店舖 WhatsApp（`5770 0978`）。
- **動態營業狀態提示**：自動根據時間及星期顯示即時營業狀態，並醒目標示「逢星期二休息」，減少食客摸門釘。
- **本地導航與到會引流**：內置 Google Maps 一鍵導航連結及駕車／單車泊車貼士，並設有公司活動及小型派對到會（Catering）快速查詢入口。
- **響應式設計（RWD）**：完美適配手機與桌面瀏覽器，採用溫暖復古港式茶餐廳色調（奶油米白底色配墨綠及焦糖棕點綴）。

---

## 🛠️ 技術架構與部署流程（Workflow）

成套專案採用 **AI 極速原型開發 + 免費雲端自動化部署** 模式，試錯與託管成本為零：

1. **AI 原型與視覺生成**：透過 **Grok Build** 生成基於 **TanStack Start + React + TypeScript + Tailwind CSS** 嘅全端框架專案及港式茶座風格配圖。
2. **版本控制與代碼託管**：同步推送至 **GitHub**（`jeffreyfan920-web/cherry-flame-kite-spring`）。
3. **自動化上線（CI/CD）**：連接 **Vercel** 進行一鍵編譯與託管，自帶全球 CDN 加速及 HTTPS 安全憑證。

---

## 📋 待辦清單（正式商用交付前）

- [ ] 替換示範餐牌（Placeholder Data），換上店舖正式餐牌與實價，並移除「價錢僅供估算」提示
- [ ] 將 AI 生成配圖替換為店舖環境及食物實拍照片
- [ ] 綁定專屬自訂域名（Custom Domain，如 `.hk` 或 `.com`）
- [ ] 設定 Open Graph 分享縮圖及連接 Google 商家檔案（Google Business Profile）以提升本地搜尋曝光（Local SEO）
