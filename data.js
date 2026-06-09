<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>第四關：語詞配對大挑戰</title>
    <script src="data.js"></script>
    <style>
        :root {
            --font-family: "Microsoft JhengHei", "微軟正黑體", sans-serif;
            --primary-color: #2196F3;
            --match-color: #4CAF50;
            --card-bg: #8bc34a;
        }

        /* 滿版核心設定：鎖定螢幕寬高，取消所有預設邊距 */
        html, body {
            margin: 0;
            padding: 0;
            width: 100vw;
            height: 100vh;
            background-color: #f0f4c3;
            font-family: var(--font-family);
            overflow: hidden; 
            touch-action: none; 
            display: flex;
            flex-direction: column;
        }

        /* 標題區：固定高度，不壓縮 */
        .header-area {
            width: 100%;
            height: 10vh; /* 佔據螢幕 10% 高度 */
            min-height: 70px;
            padding: 0 30px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #e6ee9c; /* 讓頂部有獨立的區塊感 */
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
            z-index: 10;
        }

        .header-btns { display: flex; gap: 20px; }

        .nav-btn {
            background-color: #fff;
            color: #558b2f;
            text-decoration: none;
            font-size: clamp(20px, 2vw, 32px);
            font-weight: bold;
            padding: 10px 30px;
            border-radius: 50px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            border: 2px solid #cddc39;
            user-select: none;
        }

        .title-box { text-align: center; color: #558b2f; user-select: none; display: flex; align-items: center; gap: 30px;}
        .title-box h1 { margin: 0; font-size: clamp(30px, 3.5vw, 60px); }
        .title-box p { margin: 0; font-size: clamp(24px, 2.5vw, 40px); font-weight: bold; }

        #btn-restart {
            padding: 10px 30px;
            font-size: clamp(20px, 2vw, 32px);
            background: #689f38;
            color: white;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-weight: bold;
            user-select: none;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        /* 遊戲網格區：絕對填滿剩下 90% 的高度 */
        .game-screen {
            width: 100vw; 
            height: 90vh; /* 佔據螢幕剩下高度 */
            padding: 2vw; /* 依據螢幕寬度給予適當邊距 */
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 1.5vw; /* 間距自動隨螢幕縮放 */
            box-sizing: border-box;
            background: transparent;
        }

        .card { 
            perspective: 1500px; 
            cursor: pointer;
            width: 100%;
            height: 100%;
            user-select: none; 
            -webkit-user-drag: none; 
        }

        .card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.5s cubic-bezier(0.4, 0.2, 0.2, 1); /* 讓翻牌動畫更流暢 */
            transform-style: preserve-3d;
            border-radius: 20px;
            box-shadow: 0 8px 15px rgba(0,0,0,0.1);
        }

        .card.flipped .card-inner { transform: rotateY(180deg); }

        .card-front, .card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            border: 6px solid #cddc39;
            box-sizing: border-box;
            overflow: hidden;
        }

        .card-front {
            background-color: var(--card-bg);
            color: white;
            font-size: clamp(60px, 8vw, 150px); 
            background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 20px, transparent 20px, transparent 40px);
        }

        .card-back {
            background-color: white;
            transform: rotateY(180deg);
            border-color: var(--primary-color);
        }

        .card-back.text-node {
            font-size: clamp(36px, 4vw, 80px); /* 字體放大，滿版才清楚 */
            color: #1b5e20;
            font-weight: 900;
            text-align: center;
            padding: 10px;
            word-break: break-word; 
        }

        .card-back img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            padding: 15px; /* 給圖片一點呼吸空間 */
            box-sizing: border-box;
            pointer-events: none; 
            user-select: none;
            -webkit-user-drag: none;
        }

        .card.matched { 
            opacity: 0; /* 配對成功後完全隱藏，讓畫面更乾淨 */
            pointer-events: none; 
            transition: opacity 0.5s ease-out 0.3s; /* 延遲一下再消失 */
        }
    </style>
</head>
<body>

    <div class="header-area">
        <div class="header-btns">
            <a href="index.html" class="nav-btn">🏠 回大廳</a>
            <a href="#" id="back-btn" class="nav-btn">🔙 回選單</a>
        </div>
        
        <div class="title-box">
            <h1 id="lesson-title">載入中...</h1>
            <p>⏱️ <span id="timer">0</span> 秒</p>
        </div>

        <button id="btn-restart" onclick="initGame()">🔄 重新開始</button>
    </div>

    <div class="game-screen" id="board"></div>

    <script>
        const urlParams = new URLSearchParams(window.location.search);
        const lessonId = urlParams.get('id') || "1"; 
        document.getElementById('back-btn').href = `lesson.html?id=${lessonId}`;
        
        let baseData = [];
        
        if (typeof allLessonsData !== 'undefined' && allLessonsData[lessonId]) {
            document.getElementById('lesson-title').innerText = "第四關：" + allLessonsData[lessonId].title;
            baseData = allLessonsData[lessonId].level4 || [];
        }

        let firstCard = null, secondCard = null;
        let lockBoard = false, matchesFound = 0, seconds = 0, timer;
        const board = document.getElementById('board');
        const timerLabel = document.getElementById('timer');

        function initGame() {
            board.innerHTML = '';
            matchesFound = 0; seconds = 0; timerLabel.textContent = '0';
            clearInterval(timer);
            startTimer();

            if (baseData.length === 0) {
                board.innerHTML = '<h2 style="grid-column: 1/-1; text-align: center; color: #d32f2f; font-size: 40px;">資料庫 level4 尚未填寫喔！</h2>';
                return;
            }

            let deck = [];
            baseData.forEach(item => {
                let cardWord = item.word || item.text || "文字遺失";
                let cardImg = item.image || item.img || "";

                deck.push({ content: cardWord, type: 'text', match: cardWord });
                deck.push({ content: cardImg, type: 'img', match: cardWord });
            });

            deck.sort(() => Math.random() - 0.5);

            deck.forEach(data => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.dataset.match = data.match;
                
                let backContent = data.type === 'text' 
                    ? data.content 
                    : `<img src="${data.content}" alt="找不到圖片" draggable="false">`;

                card.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front">?</div>
                        <div class="card-back ${data.type === 'text' ? 'text-node' : ''}">
                            ${backContent}
                        </div>
                    </div>
                `;
                
                card.addEventListener('click', flipCard);
                board.appendChild(card);
            });
        }

        function flipCard() {
            if (lockBoard || this === firstCard) return;
            this.classList.add('flipped');
            
            speak(this.dataset.match); 

            if (!firstCard) { firstCard = this; return; }
            secondCard = this;
            checkMatch();
        }

        function checkMatch() {
            let isMatch = firstCard.dataset.match === secondCard.dataset.match;
            isMatch ? disableCards() : unflipCards();
        }

        function disableCards() {
            setTimeout(() => {
                firstCard.classList.add('matched');
                secondCard.classList.add('matched');
                resetBoard();
                matchesFound++;
                if (matchesFound === baseData.length) {
                    clearInterval(timer);
                    setTimeout(() => { alert(`🎉 太棒了！花了 ${seconds} 秒完成！`); }, 300);
                }
            }, 600); // 稍微增加一點延遲，讓學生看清楚配對的牌
        }

        function unflipCards() {
            lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                resetBoard();
            }, 1000); // 給學生多一點時間記憶翻錯的牌
        }

        function resetBoard() { [firstCard, secondCard, lockBoard] = [null, null, false]; }
        function startTimer() { timer = setInterval(() => { seconds++; timerLabel.textContent = seconds; }, 1000); }
        function speak(text) {
            const synth = window.speechSynthesis;
            const utter = new SpeechSynthesisUtterance(text);
            utter.lang = 'zh-TW';
            synth.speak(utter);
        }
        window.onload = initGame;
    </script>
</body>
</html>
