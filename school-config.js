/**
 * school-config.js — iPad 資產管理系統 · 學校設定檔
 *
 * 【給其他學校的設定說明】
 * 1. Fork 此 repo 到自己的 GitHub 帳號
 * 2. 建立 Firebase 專案：https://console.firebase.google.com/
 *    - 啟用 Firestore Database
 *    - 啟用 Authentication → Google 登入
 * 3. 修改下方 SCHOOL_CONFIG 的所有欄位
 * 4. 在 GitHub repo 啟用 Pages（Settings → Pages → Deploy from main）
 * 5. 完成！分享網址給同事使用
 *
 * 【欄位說明】
 * schoolName   : 學校名稱，顯示在系統標題與匯出檔名
 * branches     : 分校設定（沒有分校可留空陣列 []）
 *   prefix     : 該分校設備的 MDM 名稱前綴
 *   name       : 分校顯示名稱
 * adminEmails  : 可執行寫入/刪除的管理員 Google 信箱（陣列）
 * firebase     : 從 Firebase 主控台「專案設定」複製的設定值
 */

window.SCHOOL_CONFIG = {

  // ── 學校基本資訊 ──────────────────────────────────
  schoolName: '安平國小',

  // ── 分校設定（沒有分校請留空 []）─────────────────
  branches: [
    { prefix: 'YG2022iPAD', name: '漁光分校' }
    // 範例：{ prefix: 'BR2023iPAD', name: '某某分校' }
  ],

  // ── 管理員 Google 信箱（可多個）──────────────────
  adminEmails: [
    'm72900024@gmail.com'
  ],

  // ── Firebase 設定（從 Firebase 主控台複製）────────
  firebase: {
    apiKey:            'AIzaSyClniX_uQNPDRC8bTLZP-s3-aGB6466t1c',
    authDomain:        'github-f016e.firebaseapp.com',
    projectId:         'github-f016e',
    storageBucket:     'github-f016e.firebasestorage.app',
    messagingSenderId: '726498300688',
    appId:             '1:726498300688:web:903d43c66c35b74e3e05d3'
  }

};
