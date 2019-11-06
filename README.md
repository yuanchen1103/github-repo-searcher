Github Repo Searcher
===

## 專案網址

1. Demo Page: https://github-repos-searcher.herokuapp.com/
2. Github Page: https://github.com/yuanchen1103/github-repo-searcher

Package Scripts
---
### `npm run start`

啟動developer環境，預設為Port: 3000(http://localhost:3000)

### `npm run build`
打包production專案，打包完成於 `build` 資料夾


架構
---
![](https://i.imgur.com/BnkCtG4.png)


本專案以React + Redux 開發，網站整體架構如圖所示，一個方塊代表一個component，每個component透過container與Redux資料互動，包含拿全局state的資料，以及透過action改變state的狀態。

Libraries
---
* Lodash（https://lodash.com/）
    主要使用其中的 `debounce` 功能，避免在使用者輸入時一直打 request，停下動作後0.5秒才會打。
    
* Bootstrap（https://getbootstrap.com/）
    只有使用`Grid`格線系統，讓網站由手機瀏覽時不至於跑版。
    
* Moment.js（https://momentjs.com/）
    將資料中的更新時間格式化。
* react-scroll-up-button（https://www.npmjs.com/package/react-scroll-up-button）
    能簡易使用又還算美觀的 scroll to top 按鈕，方便使用者回到最上面的輸入框。
    
    
Other Tools
---
* eslint：統一程式碼風格。
* git flow: 管理 commit 與 branch。

Note
---
Github Api 有 rate limit限制（10req/min），若要提高限制可申請 github app 拿到 `client_id`，與 `client_secret`，並加入環境變數。
https://developer.github.com/v3/search/#rate-limit
```
REACT_APP_CLIENT_ID=<your-client-id>
REACT_APP_CLIENT_SECRET=<your-client-secret>
```
