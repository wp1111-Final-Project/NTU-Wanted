
git 協作都在以下地方完成。
https://github.com/wp1111-Final-Project/NTU-Wanted/

# [111-1] Web Programming Final
(Group 48) NTU-Wanted
組長： 心理四 李彥廷
組員： 心理四 蕭柏圓 、 心理四 沈家齊
- Demo 影片連結：https://youtu.be/rEvDiqxz5EA
- 服務內容：
    - 由於組員都是心理系，有感於平常做實驗尋找受試者的困難，所以希望提供校內正在尋找受試者的研究單位一個整合性的媒合平台。在NTU-Wanted 網站上，各類型研究都可以發布研究資訊，我們的多重篩選功能讓校內有修普心想加分、想賺錢或有興趣參與研究的潛在受試者能更快速找到想參加的研究。
- 功能簡述：
  - 根據研究標題、日期、種類、報酬形式及地點篩選搜尋各種研究
  - 連結google帳號快速登入
  - 登入後可以新增研究的招募說明，查看曾發佈的研究
  - 登入後可以按愛心收藏研究
  - 點入研究頁面可以查看詳細資訊及留言
  - 登入後可以在研究頁面新增留言並回覆留言
  - 點擊首頁 ⍰ 按鈕可觀看網頁導覽 (限電腦)
  - 手機、平板、電腦都能正常使用
- Deployed 連結：https://ntu-wanted.up.railway.app/
- 其他說明：
  - logo來源：https://www.flaticon.com/free-icons/poster
  - 使用與參考之框架/模組/原始碼：
前端：React.js
後端：Expess.js
資料庫：MongoDB Atlas
- 使用之第三方套件、框架、程式碼：
  - 前端：antd, mui, axios, react,
  - 後端：mongoose, express, nodemon, uuidv4, cors
- 安裝方式：
    - 在 localhost 安裝與測試之詳細步驟：
    - 請先到 “final” 目錄用 “yarn install:all” 來安裝我們的專案。
    - <b>[Frontend]</b>:
        - 到 “final” 目錄用 “yarn start” 開啟前端（請注意：出於安全性的考量，若是想要在 localhost 安裝與測試，Google 登入的功能只允許前端開在 localhost:3000 ）。
    - <b>[Backend]</b>:
        - 須在 “final/backend” 目錄，新增一個 .env 的檔案，內容為 “MONGO_URL=你的 Mongo DB 連結” 以及 “MODE=Reset“。
        - 到 “final” 目錄用 “yarn server” 開啟後端。
- 專題製作心得：
  - 李彥廷： 這個主題是因為身為心理系學生常常需要收實驗收問卷而產生的想法，目標就是希望能做出一個真的有用的網站。這是第一次跟別人合作寫一個比較大的project ，讓我更了解合作時的流程和程式架構的重要性。
  - 蕭柏圓：做一個真的會想用的網站是我們的共同目標，所以在實作時就會很有熱忱，並且將上課所學都變成自己會想要使用的樣子，我覺得很有成就感。但是，我認為和別人合作最困難的就是必須把程式寫乾淨、把邏輯都順好，這也是我在這個期末專案中所學到最多的地方～
  - 沈家齊：平常使用其他網頁都沒有注意到，自己嘗試做一個完整的服務才發現，如果想讓使用者更直覺地操作網站功能，要考慮的細節真的很多。和組員們合作也不太容易，這次專題也讓我意識到架構的規劃和程式邏輯清楚真的很重要。最後希望這個網站會是很實用的！

- 每位組員之負責項目：
    - 李彥廷：首頁前端介面設計、搜尋、收藏功能、後端
    - 蕭柏圓：實驗頁面、留言、登入、後端
    - 沈家齊：前端介面設計、美化、發文功能、後端
