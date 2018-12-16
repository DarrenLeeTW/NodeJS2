NodeJS introduction:
1.能在伺服器端運行JavaScript的跨平台JavaScript且open source的執行環境
2.已被IBM、Microsoft、Yahoo、NASA、阿里巴巴、Mozilla、Trello、Walmart、Groupon、SAP、LinkedIn、Rakuten、PayPal、Voxer、Uber、Netflix、Medium和GoDaddy等企業採用
3.使用Google V8 JavaScript引擎:
  速度非常快
  專注於網路功能，在HTTP、DNS、TCP等方面更加成熟
4.擁有非常活耀的第三方生態系統和開發者社群
5.單執行緒執行，使用非阻塞I/O呼叫，可支援數以萬計的並行連線，又不會因多執行緒的特點而帶來麻煩
6.設計目標是任何需要操作I/O的函式都使用回呼函式
7.缺點:如果不使用cluster、StrongLoop Process Manager或pm2等模組，Node.js就難以處理多核或多執行緒等情況


NodeJS installation:
1.下載並安裝:https://nodejs.org/en/
2.打開nodejs command prompt
3.command:
  node xxx.js (compiler and execute)
  npm inatall xxx (use npm to install xxx package)