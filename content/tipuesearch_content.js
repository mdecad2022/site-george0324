var tipuesearch = {"pages": [{'title': 'About', 'text': '四設二甲 41023131 林承志 \n 倉儲: https://github.com/mdecad2022/site-george0324 \n 網頁: https://mdecad2022.github.io/site-george0324/content/index.html \n https://stud.cycu.org:8156 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Exam', 'text': 'https://exam.cycu.org/public/code/index.php?logout=1 \n', 'tags': '', 'url': 'Exam.html'}, {'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': 'w1', 'text': '', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '簡單說明有關課程的相關規劃與期程安排 \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '創建 replit (雲端動態網站) \xa0 \n  Onedrive (需要 5TB 儲存資料, Teams 與 Meet 上課) \xa0 \n Onshape (可以在平板與手機上繪製或檢視零組件) \n 登入 mail2000 \n 下載以下3個程式 \n NX2027.3401_lite \n portable_python_3.10.6 \n CoppeliaSimEdu_4.3.0_rev12 \n \xa0 \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '登入Replit \n 在 Replit 執行動態網站: \xa0 \n 必須進入 Shell, 在倉儲根目錄執行下列兩則指令 (取下子模組內容, 並安裝執行所需模組). \xa0 \n git submodule update --init --recursive \xa0 \n pip install\xa0\xa0 flask flask_cors bs4 lxml pelican markdown gevent \xa0 \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '步驟簡述 \n 先下載 Filezilla portable  設定好站台(比較好用 \n git config --global http.proxy\xa0 http://p42.cycu.org:3128 \xa0 \n \xa0 \xa0 \n git config --global user.name "name" \xa0 \n \xa0 \xa0 \n git config --global user.email "email" \xa0 \n 打完會產生.gitconfig \n git clone --recurse-submodules git@demo:mdecad2022/site-github_帳號.git s \xa0 \n \xa0  會產生site-學號 \n git submodule update --init --recursive \xa0 \n \xa0 \n acp 放入倉儲後   \n chmod u+x acp\xa0 \xa0 \n 才可以執行acp \n source acp "提交說明字串" \xa0 \n \xa0 上傳指令 \n \n 下載server.py和config 放入倉儲(server.py要改成自己的 埠號 ) \n \n cd s, cd cmsimde, git pull origin master \xa0 \n \xa0  更新版本(如果有改過密碼要把舊的config刪掉) \n \xa0 \n python3 server.py \xa0 \n \xa0  執行server \n \n 如果server不能執行 \n ps axo pid.comm.user \n 可以查詢到以執行server \n kill -9 111919 \xa0 \n 可以殺掉自己的server \n \n https://stud.cycu.org:8xxx \xa0 進到自己的網頁 \n  8xxx每個人都有專屬的   \n 要把proxy關掉 \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '步驟簡述 \n 先下載 Filezilla portable  設定好站台(比較好用 \n git config --global http.proxy\xa0 http://p42.cycu.org:3128 \xa0 \n \xa0 \xa0 \n git config --global user.name "name" \xa0 \n \xa0 \xa0 \n git config --global user.email "email" \xa0 \n 打完會產生.gitconfig \n git clone --recurse-submodules git@demo:mdecad2022/site-github_帳號.git s \xa0 \n \xa0  會產生site-學號 \n git submodule update --init --recursive \xa0 \n \xa0 \n acp 放入倉儲後   \n chmod u+x acp\xa0 \xa0 \n 才可以執行acp \n source acp "提交說明字串" \xa0 \n \xa0 上傳指令 \n \n 下載server.py和config 放入倉儲(server.py要改成自己的 埠號 ) \n \n cd s, cd cmsimde, git pull origin master \xa0 \n \xa0  更新版本(如果有改過密碼要把舊的config刪掉) \n \xa0 \n python3 server.py \xa0 \n \xa0  執行server \n \n 如果server不能執行 \n ps axo pid.comm.user \n 可以查詢到以執行server \n kill -9 111919 \xa0 \n 可以殺掉自己的server \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '老師檢查網頁處理問題 \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8~w9', 'text': '\n 期中考 \n 講解畫圖的程式 \n \n', 'tags': '', 'url': 'w8~w9.html'}, {'title': 'w10', 'text': '各班每六名學員自選組員分組, 目的除了鼓勵同儕間的互相學習外, 也希望每週各組依照 TCExam 題組的 XML 檔案格式出題. \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '校慶and園遊會 \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '1.考試 \n 2.計算機程式與電腦輔助設計實習課程的考試題庫公佈 \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '1.如何在動態網站加入wink影片 \n \n \n \n \n \n \n \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n  editor2 結束  \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '', 'tags': '', 'url': 'w14.html'}, {'title': 'Solvespace', 'text': '壓縮檔； one-link.7z \n \n \n \n \n \n \n \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n  editor2 結束  \n \n \n \n \n \n \n \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n  editor2 結束  \n', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'Onshape', 'text': '\n', 'tags': '', 'url': 'Onshape.html'}, {'title': 'NX', 'text': '', 'tags': '', 'url': 'NX.html'}, {'title': 'w15', 'text': 'solvespace\n /downloads/two link assembly.7z \n \n \n \n \n \n \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n  editor2 結束  \n \n', 'tags': '', 'url': 'w15.html'}]};