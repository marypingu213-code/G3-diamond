const allLessonsData = {
    // ================= 第一課 =================
    "1": {
        title: "第一課：最美的模樣",
        level1: [
            { word: "撐", parts: ["images/L1/筆順-撐-部件-1.png", "images/L1/筆順-撐-部件-2.png", "images/L1/筆順-撐-部件-3.png"], pos: [{x: 70, y: 180, scale: 1.6}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "首", parts: ["images/L1/筆順-首-部件-1.png", "images/L1/筆順-首-部件-2.png"], pos: [{x: 120, y: 110}, {x: 120, y: 160}] },
            { word: "符", parts: ["images/L1/筆順-符-部件-1.png", "images/L1/筆順-符-部件-2.png", "images/L1/筆順-符-部件-3.png"], pos: [{x: 70, y: 180, scale: 1.6}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "膀", parts: ["images/L1/筆順-膀-部件-1.png", "images/L1/筆順-膀-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "鼻", parts: ["images/L1/筆順-鼻-部件-1.png", "images/L1/筆順-鼻-部件-2.png", "images/L1/筆順-鼻-部件-3.png"], pos: [{x: 120, y: 90}, {x: 120, y: 140}, {x: 120, y: 190, scale: 1.5}] },
            { word: "環", parts: ["images/L1/筆順-環-部件-1.png", "images/L1/筆順-環-部件-2.png", "images/L1/筆順-環-部件-3.png", "images/L1/筆順-環-部件-4.png", "images/L1/筆順-環-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180, scale: 0.6}, {x: 210, y: 180}] },
            { word: "搗", parts: ["images/L1/筆順-搗-部件-1.png", "images/L1/筆順-搗-部件-2.png", "images/L1/筆順-搗-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180, scale: 0.5}] },
            { word: "亂", parts: ["images/L1/筆順-亂-部件-1.png", "images/L1/筆順-亂-部件-2.png", "images/L1/筆順-亂-部件-3.png", "images/L1/筆順-亂-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180, scale: 0.65}, {x: 150, y: 180, scale: 1.6}] },
            { word: "恐", parts: ["images/L1/筆順-恐-部件-1.png", "images/L1/筆順-恐-部件-2.png", "images/L1/筆順-恐-部件-3.png"], pos: [{x: 120, y: 90, scale: 0.6}, {x: 120, y: 140}, {x: 120, y: 190, scale: 1.5}] },
            { word: "尖", parts: ["images/L1/筆順-尖-部件-1.png", "images/L1/筆順-尖-部件-2.png"], pos: [{x: 120, y: 110}, {x: 120, y: 160}] },
            { word: "嘴", parts: ["images/L1/筆順-嘴-部件-1.png", "images/L1/筆順-嘴-部件-2.png", "images/L1/筆順-嘴-部件-3.png"], pos: [{x: 70, y: 180, scale: 0.6}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "吼", parts: ["images/L1/筆順-吼-部件-1.png", "images/L1/筆順-吼-部件-2.png"], pos: [{x: 100, y: 180, scale: 0.6}, {x: 170, y: 180}] }
        ],
        level2: [],
        level3: [
            // 基礎版 (0-8)
            { text: "藍藍的天空有白白的________。", answer: "雲朵" },
            { text: "小鳥拍拍________，飛得很高。", answer: "翅膀" },
            { text: "妹妹的________紅通通的，很可愛。", answer: "臉蛋" },
            { text: "下雨了，我要撐開漂亮的________。", answer: "雨傘" },
            { text: "玩具箱裡有一隻大大的綠色________。", answer: "恐龍" },
            { text: "狗狗把客廳弄得亂七八糟，真愛________。", answer: "搗亂" },
            { text: "鋼琴彈出的________，聽起來真美。", answer: "音符" },
            { text: "大老虎張開嘴巴大聲________。", answer: "吼叫" },
            { text: "爸爸穿上西裝的________，看起來好神氣。", answer: "模樣" },
            // 挑戰版 (9-17)
            { text: "天空中有許多白白的________，看起來好像甜甜的棉花糖。", answer: "雲朵" },
            { text: "弟弟穿上超人披風後，一副神氣十足的________。", answer: "模樣" },
            { text: "妹妹紅通通的________像顆小蘋果，大家看了都想親一下。", answer: "臉蛋" },
            { text: "琴譜上的________跳來跳去，組成了一首輕快好聽的曲子。", answer: "音符" },
            { text: "老鷹拍打著強壯的________，在高高的天空中盤旋。", answer: "翅膀" },
            { text: "小貓咪在客廳裡________，把奶奶剛捲好的毛線球弄散了。", answer: "搗亂" },
            { text: "我最喜歡去博物館參觀，看那些巨大的________化石。", answer: "恐龍" },
            { text: "森林裡的獅子發出巨大的________聲，把附近的小動物都嚇跑了。", answer: "吼叫" },
            { text: "外面突然下起大雨，出門記得要帶________才不會淋濕喔！", answer: "雨傘" }
        ],
        level4: [
            { text: "雲朵", img: "pic/L1/1.png" },
            { text: "模樣", img: "pic/L1/2.png" },
            { text: "臉蛋", img: "pic/L1/3.png" },
            { text: "音符", img: "pic/L1/4.png" },
            { text: "翅膀", img: "pic/L1/5.png" },
            { text: "搗亂", img: "pic/L1/6.png" },
            { text: "恐龍", img: "pic/L1/7.png" },
            { text: "吼叫", img: "pic/L1/8.png" },
            { text: "雨傘", img: "pic/L1/9.png" }
        ]
    },

    // ================= 第二課 =================
    "2": { 
        title: "第二課：玩玩具", 
        level1: [
            { word: "鐵", parts: ["images/L2/筆順-鐵-部件-1.png", "images/L2/筆順-鐵-部件-2.png", "images/L2/筆順-鐵-部件-3.png", "images/L2/筆順-鐵-部件-4.png", "images/L2/筆順-鐵-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] },
            { word: "碗", parts: ["images/L2/筆順-碗-部件-1.png", "images/L2/筆順-碗-部件-2.png", "images/L2/筆順-碗-部件-3.png", "images/L2/筆順-碗-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
            { word: "另", parts: ["images/L2/筆順-另-部件-1.png", "images/L2/筆順-另-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "彎", parts: ["images/L2/筆順-彎-部件-1.png", "images/L2/筆順-彎-部件-2.png", "images/L2/筆順-彎-部件-3.png", "images/L2/筆順-彎-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
            { word: "鉤", parts: ["images/L2/筆順-鉤-部件-1.png", "images/L2/筆順-鉤-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "推", parts: ["images/L2/筆順-推-部件-1.png", "images/L2/筆順-推-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "羨", parts: ["images/L2/筆順-羨-部件-1.png", "images/L2/筆順-羨-部件-2.png", "images/L2/筆順-羨-部件-3.png", "images/L2/筆順-羨-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
            { word: "慕", parts: ["images/L2/筆順-慕-部件-1.png", "images/L2/筆順-慕-部件-2.png", "images/L2/筆順-慕-部件-3.png", "images/L2/筆順-慕-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
            { word: "娃", parts: ["images/L2/筆順-娃-部件-1.png", "images/L2/筆順-娃-部件-2.png", "images/L2/筆順-娃-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "捲", parts: ["images/L2/筆順-捲-部件-1.png", "images/L2/筆順-捲-部件-2.png", "images/L2/筆順-捲-部件-3.png", "images/L2/筆順-捲-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
            { word: "躺", parts: ["images/L2/筆順-躺-部件-1.png", "images/L2/筆順-躺-部件-2.png", "images/L2/筆順-躺-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "裙", parts: ["images/L2/筆順-裙-部件-1.png", "images/L2/筆順-裙-部件-2.png", "images/L2/筆順-裙-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "擺", parts: ["images/L2/筆順-擺-部件-1.png", "images/L2/筆順-擺-部件-2.png", "images/L2/筆順-擺-部件-3.png", "images/L2/筆順-擺-部件-4.png", "images/L2/筆順-擺-部件-5.png", "images/L2/筆順-擺-部件-6.png"], pos: [{x: 40, y: 180}, {x: 80, y: 180}, {x: 120, y: 180}, {x: 160, y: 180}, {x: 200, y: 180}, {x: 240, y: 180}] },
            { word: "參", parts: ["images/L2/筆順-參-部件-1.png", "images/L2/筆順-參-部件-2.png", "images/L2/筆順-參-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "容", parts: ["images/L2/筆順-容-部件-1.png", "images/L2/筆順-容-部件-2.png", "images/L2/筆順-容-部件-3.png", "images/L2/筆順-容-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] }
        ], 
        level2: [], 
        level3: [
            // 基礎版 (0-8)
            { text: "看到同學有新玩具，我好________他。", answer: "羨羨" },
            { text: "妹妹轉一個圈，漂亮的________也跟著動。", answer: "裙擺" },
            { text: "我太累了，想在沙發上________休息。", answer: "躺下" },
            { text: "看到好朋友，小明臉上露出甜甜的________。", answer: "笑容" },
            { text: "大家一起用力________，把大箱子移開。", answer: "推動" },
            { text: "媽媽把好喝的湯裝在________裡。", answer: "湯碗" },
            { text: "小羊的毛彎彎的，好像漂亮的________。", answer: "捲髮" },
            { text: "以前的小朋友喜歡在空地上玩滾________。", answer: "鐵環" },
            { text: "牆壁上有一個________，可以用來掛外套。", answer: "彎鉤" },
            // 挑戰版 (9-17)
            { text: "看到同學有新玩具，小明心裡覺得很________。", answer: "羨羨" },
            { text: "妹妹穿著新洋裝轉圈圈，漂亮的________也跟著飛了起來。", answer: "裙擺" },
            { text: "玩了一整天，我累得一回到家就馬上________休息。", answer: "躺下" },
            { text: "老師的臉上總是掛著溫柔的________，大家都很喜歡親近她。", answer: "笑容" },
            { text: "這個箱子太重了，我需要有人幫忙一起________它。", answer: "推動" },
            { text: "媽媽煮好了熱騰騰的雞湯，小心地盛在________裡。", answer: "湯碗" },
            { text: "阿姨天生就有一頭充滿彈性的波浪________，真好看。", answer: "捲髮" },
            { text: "以前的年代，小朋友喜歡在空地上玩滾________的遊戲。", answer: "鐵環" },
            { text: "牆壁上釘了一個________，方便我們掛外套和帽子。", answer: "彎鉤" }
        ], 
        level4: [
            { text: "鐵環", img: "pic/L2/1.png" },
            { text: "湯碗", img: "pic/L2/2.png" },
            { text: "彎鉤", img: "pic/L2/3.png" },
            { text: "推動", img: "pic/L2/4.png" },
            { text: "羨羨", img: "pic/L2/5.png" },
            { text: "捲髮", img: "pic/L2/6.png" },
            { text: "躺下", img: "pic/L2/7.png" },
            { text: "裙擺", img: "pic/L2/8.png" },
            { text: "笑容", img: "pic/L2/9.png" }
        ] 
    },

    // ================= 第三課 =================
    "3": { 
        title: "第三課：愛玉的變身術", 
        level1: [
            { word: "炎", parts: ["images/L3/筆順-炎-部件-1.png", "images/L3/筆順-炎-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "玉", parts: ["images/L3/筆順-玉-部件-1.png", "images/L3/筆順-玉-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "凍", parts: ["images/L3/筆順-凍-部件-1.png", "images/L3/筆順-凍-部件-2.png", "images/L3/筆順-凍-部件-3.png", "images/L3/筆順-凍-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
            { word: "薄", parts: ["images/L3/筆順-薄-部件-1.png", "images/L3/筆順-薄-部件-2.png", "images/L3/筆順-薄-部件-3.png", "images/L3/筆順-薄-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
            { word: "暑", parts: ["images/L3/筆順-暑-部件-1.png", "images/L3/筆順-暑-部件-2.png", "images/L3/筆順-暑-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "品", parts: ["images/L3/筆順-品-部件-1.png", "images/L3/筆順-品-部件-2.png", "images/L3/筆順-品-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "籽", parts: ["images/L3/筆順-籽-部件-1.png", "images/L3/筆順-籽-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "曬", parts: ["images/L3/筆順-曬-部件-1.png", "images/L3/筆順-曬-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "摸", parts: ["images/L3/筆順-摸-部件-1.png", "images/L3/筆順-摸-部件-2.png", "images/L3/筆順-摸-部件-3.png", "images/L3/筆順-摸-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
            { word: "刺", parts: ["images/L3/筆順-刺-部件-1.png", "images/L3/筆順-刺-部件-2.png", "images/L3/筆順-刺-部件-3.png", "images/L3/筆順-刺-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
            { word: "器", parts: ["images/L3/筆順-器-部件-1.png", "images/L3/筆順-器-部件-2.png", "images/L3/筆順-器-部件-3.png", "images/L3/筆順-器-部件-4.png", "images/L3/筆順-器-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] },
            { word: "袋", parts: ["images/L3/筆順-袋-部件-1.png", "images/L3/筆順-袋-部件-2.png", "images/L3/筆順-袋-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "綁", parts: ["images/L3/筆順-綁-部件-1.png", "images/L3/筆順-綁-部件-2.png", "images/L3/筆順-綁-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "搓", parts: ["images/L3/筆順-搓-部件-1.png", "images/L3/筆順-搓-部件-2.png", "images/L3/筆順-搓-部件-3.png", "images/L3/筆順-搓-部件-4.png", "images/L3/筆順-搓-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] },
            { word: "糖", parts: ["images/L3/筆順-糖-部件-1.png", "images/L3/筆順-糖-部件-2.png", "images/L3/筆順-糖-部件-3.png", "images/L3/筆順-糖-部件-4.png", "images/L3/筆順-糖-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] }
        ], 
        level2: [], 
        level3: [
            // 基礎版 (0-8)
            { text: "太陽好大，天氣很________。", answer: "炎熱" },
            { text: "我喜歡吃冰冰涼涼的________。", answer: "愛玉" },
            { text: "蛋糕是甜甜的________。", answer: "甜品" },
            { text: "衣服洗好了，拿去太陽下________。", answer: "曬乾" },
            { text: "小狗的身上有黑色的________。", answer: "斑點" },
            { text: "我們在水裡用力________愛玉子。", answer: "搓洗" },
            { text: "爸爸把水倒進透明的________。", answer: "容器" },
            { text: "把種子裝進白色的小________。", answer: "棉袋" },
            { text: "冰水裡加一點________，甜甜的好好喝。", answer: "糖水" },
            // 挑戰版 (9-17)
            { text: "夏天的太陽好大，天氣真是________。", answer: "炎熱" },
            { text: "媽媽把洗好的衣服掛在陽台，準備讓太陽________。", answer: "曬乾" },
            { text: "校狗拉拉的身上，布滿了黑色和白色的________。", answer: "斑點" },
            { text: "吃完晚餐後，姊姊最喜歡吃蛋糕或紅豆湯當作________。", answer: "甜品" },
            { text: "我們把種子放進小________裡，準備來製作好吃的點心。", answer: "棉袋" },
            { text: "在盆子裡用力________愛玉子，就會慢慢出現黏黏的果膠。", answer: "搓洗" },
            { text: "冰涼的________凍吃起來QQ的，是夏天最受歡迎的小吃。", answer: "愛玉" },
            { text: "煮好的紅豆湯如果加上一點________，喝起來會更香甜。", answer: "糖水" },
            { text: "請把切好的水果裝進乾淨的________裡，再放進冰箱保存。", answer: "容器" }
        ], 
        level4: [
            { text: "炎熱", img: "pic/L3/1.png" },
            { text: "愛玉", img: "pic/L3/2.png" },
            { text: "甜品", img: "pic/L3/3.png" },
            { text: "斑點", img: "pic/L3/4.png" },
            { text: "曬乾", img: "pic/L3/5.png" },
            { text: "搓洗", img: "pic/L3/6.png" },
            { text: "糖水", img: "pic/L3/7.png" },
            { text: "棉袋", img: "pic/L3/8.png" },
            { text: "容器", img: "pic/L3/9.png" }
        ] 
    },

    // ================= 第四課 =================
    "4": { 
        title: "第四課：楊修猜字", 
        level1: [
            { word: "闊", parts: ["images/L4/筆順-闊-部件-1.png", "images/L4/筆順-闊-部件-2.png", "images/L4/筆順-闊-部件-3.png", "images/L4/筆順-闊-部件-4.png"], pos: [{x: 90, y: 130, scale: 1.3}, {x: 150, y: 130, scale: 1.0}, {x: 90, y: 180, scale: 0.5}, {x: 150, y: 180, scale: 0.5}] },
            { word: "驚", parts: ["images/L4/筆順-驚-部件-1.png", "images/L4/筆順-驚-部件-2.png", "images/L4/筆順-驚-部件-3.png", "images/L4/筆順-驚-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130, scale: 0.7}, {x: 90, y: 180, scale: 1.0}, {x: 150, y: 180}] },
            { word: "應", parts: ["images/L4/筆順-應-部件-1.png", "images/L4/筆順-應-部件-2.png", "images/L4/筆順-應-部件-3.png", "images/L4/筆順-應-部件-4.png"], pos: [{x: 90, y: 130, scale: 1.4}, {x: 150, y: 130, scale: 0.7}, {x: 90, y: 180, scale: 0.7}, {x: 150, y: 180}] },
            { word: "酪", parts: ["images/L4/筆順-酪-部件-1.png", "images/L4/筆順-酪-部件-2.png", "images/L4/筆順-酪-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180, scale: 0.8}, {x: 170, y: 180, scale: 0.5}] },
            { word: "楊", parts: ["images/L4/筆順-楊-部件-1.png", "images/L4/筆順-楊-部件-2.png", "images/L4/筆順-楊-部件-3.png", "images/L4/筆順-楊-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130, scale: 0.5}, {x: 90, y: 180, scale: 0.6}, {x: 150, y: 180, scale: 0.6}] },
            { word: "修", parts: ["images/L4/筆順-修-部件-1.png", "images/L4/筆順-修-部件-2.png", "images/L4/筆順-修-部件-3.png", "images/L4/筆順-修-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130, scale: 0.5}, {x: 90, y: 180, scale: 0.7}, {x: 150, y: 180, scale: 0.7}] },
            { word: "報", parts: ["images/L4/筆順-報-部件-1.png", "images/L4/筆順-報-部件-2.png", "images/L4/筆順-報-部件-3.png", "images/L4/筆順-報-部件-4.png", "images/L4/筆順-報-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180, scale: 0.7}, {x: 130, y: 180, scale: 0.7}, {x: 170, y: 180, scale: 1.4}, {x: 210, y: 180}] },
            { word: "府", parts: ["images/L4/筆順-府-部件-1.png", "images/L4/筆順-府-部件-2.png", "images/L4/筆順-府-部件-3.png"], pos: [{x: 70, y: 180, scale: 1.6}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "名", parts: ["images/L4/筆順-名-部件-1.png", "images/L4/筆順-名-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180, scale: 0.7}] },
            { word: "丞", parts: ["images/L4/筆順-丞-部件-1.png", "images/L4/筆順-丞-部件-2.png", "images/L4/筆順-丞-部件-3.png", "images/L4/筆順-丞-部件-4.png"], pos: [{x: 90, y: 130, scale: 1.3}, {x: 150, y: 130, scale: 0.7}, {x: 90, y: 180, scale: 0.7}, {x: 150, y: 180, scale: 1.3}] },
            { word: "曹", parts: ["images/L4/筆順-曹-部件-1.png", "images/L4/筆順-曹-部件-2.png", "images/L4/筆順-曹-部件-3.png", "images/L4/筆順-曹-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180, scale: 0.7}] },
            { word: "智", parts: ["images/L4/筆順-智-部件-1.png", "images/L4/筆順-智-部件-2.png", "images/L4/筆順-智-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180, scale: 0.7}, {x: 170, y: 180}] },
            { word: "官", parts: ["images/L4/筆順-官-部件-1.png", "images/L4/筆順-官-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180, scale: 0.7}] },
            { word: "差", parts: ["images/L4/筆順-差-部件-1.png", "images/L4/筆順-差-部件-2.png", "images/L4/筆順-差-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180, scale: 0.7}, {x: 170, y: 180}] },
            { word: "思", parts: ["images/L4/筆順-思-部件-1.png", "images/L4/筆順-思-部件-2.png"], pos: [{x: 100, y: 180, scale: 0.7}, {x: 170, y: 180}] }
        ], 
        level2: [], 
        level3: [
            // 基礎版 (0-8)
            { text: "妹妹張大嘴巴，一臉很________的樣子。", answer: "吃驚" },
            { text: "冰箱裡有一盒甜甜的________ ，那是我的點心。", answer: "奶酪" },
            { text: "哥哥跳起來的時候，手不小心撞到了________ 。", answer: "門框" },
            { text: "爸爸去外地________ ，要過好幾天才會回家。", answer: "出差" },
            { text: "看到好朋友受傷了，他的________ 充滿了擔心。", answer: "眼神" },
            { text: "小明跑步很快，躲避球的________ 也非常快。", answer: "反應" },
            { text: "以前的人如果被欺負，會去________ 找官員幫忙。", answer: "官府" },
            { text: "諸葛亮是古代很有名的________ ，他非常聰明。", answer: "丞相" },
            { text: "比賽結束後，我要趕快回教室向老師________ 比分。", answer: "回報" },
            // 挑戰版 (9-16)
            { text: "這位小運動員的________ 非常靈敏，一聽到槍聲就立刻衝出起跑線。", answer: "反應" },
            { text: "看到原本乾淨的牆壁被弟弟塗鴉，媽媽露出了非常________ 的表情。", answer: "吃驚" },
            { text: "古代遇到重大案件時，百姓通常會前往________ 請官員主持公道。", answer: "官府" },
            { text: "弟弟長高了不少，頭頂都快要碰到家裡的________ 了。", answer: "門框" },
            { text: "老師從他的________ 中，看出了他對這題答案的自信與堅定。", answer: "眼神" },
            { text: "在三國故事中，諸葛亮是一位非常有智慧的________ ，幫助劉備管理國家。", answer: "丞相" },
            { text: "辛苦工作了一天，這碗濃郁香甜的________ 是妹妹最喜歡的點心。", answer: "奶酪" },
            { text: "班長代表全班去領獎，回來後向大家________ 比賽的結果。", answer: "回報" }
        ], 
        level4: [
            { text: "丞相", img: "pic/L4/1.png" },
            { text: "反應", img: "pic/L4/2.png" },
            { text: "官府", img: "pic/L4/3.png" },
            { text: "門框", img: "pic/L4/4.png" },
            { text: "回報", img: "pic/L4/5.png" },
            { text: "奶酪", img: "pic/L4/6.png" },
            { text: "吃驚", img: "pic/L4/7.png" },
            { text: "出差", img: "pic/L4/8.png" },
            { text: "眼神", img: "pic/L4/9.png" }
        ] 
    },

    // ================= 第五課 =================
    "5": { 
        title: "第五課：唱反調", 
        level1: [
            { word: "鞠", parts: ["images/L5/筆順-鞠-部件-1.png", "images/L5/筆順-鞠-部件-2.png", "images/L5/筆順-鞠-部件-3.png", "images/L5/筆順-鞠-部件-4.png", "images/L5/筆順-鞠-部件-5.png"], pos: [{x: 50, y: 180, scale: 0.7}, {x: 90, y: 180, scale: 0.7}, {x: 130, y: 180}, {x: 170, y: 180, scale: 1.3}, {x: 210, y: 180, scale: 0.7}] },
            { word: "躬", parts: ["images/L5/筆順-躬-部件-1.png", "images/L5/筆順-躬-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "弄", parts: ["images/L5/筆順-弄-部件-1.png", "images/L5/筆順-弄-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "文", parts: ["images/L5/筆順-文-部件-1.png", "images/L5/筆順-文-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "厲", parts: ["images/L5/筆順-厲-部件-1.png", "images/L5/筆順-厲-部件-2.png", "images/L5/筆順-厲-部件-3.png", "images/L5/筆順-厲-部件-4.png", "images/L5/筆順-厲-部件-5.png"], pos: [{x: 50, y: 180, scale: 1.6}, {x: 90, y: 180}, {x: 130, y: 180, scale: 0.7}, {x: 170, y: 180}, {x: 210, y: 180, scale: 0.7}] },
            { word: "鬥", parts: ["images/L5/筆順-鬥-部件-1.png", "images/L5/筆順-鬥-部件-2.png", "images/L5/筆順-鬥-部件-3.png", "images/L5/筆順-鬥-部件-4.png"], pos: [{x: 90, y: 130, scale: 0.7}, {x: 150, y: 130, scale: 1.3}, {x: 90, y: 180, scale: 0.7}, {x: 150, y: 180, scale: 1.3}] },
            { word: "千", parts: ["images/L5/筆順-千-部件-1.png", "images/L5/筆順-千-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180, scale: 1.3}] },
            { word: "普", parts: ["images/L5/筆順-普-部件-1.png", "images/L5/筆順-普-部件-2.png", "images/L5/筆順-普-部件-3.png", "images/L5/筆順-普-部件-4.png", "images/L5/筆順-普-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180, scale: 0.5}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180, scale: 0.7}] },
            { word: "睜", parts: ["images/L5/筆順-睜-部件-1.png", "images/L5/筆順-睜-部件-2.png", "images/L5/筆順-睜-部件-3.png", "images/L5/筆順-睜-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130, scale: 0.7}, {x: 90, y: 180, scale: 0.7}, {x: 150, y: 180, scale: 0.7}] },
            { word: "閉", parts: ["images/L5/筆順-閉-部件-1.png", "images/L5/筆順-閉-部件-2.png", "images/L5/筆順-閉-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180, scale: 0.7}] },
            { word: "錢", parts: ["images/L5/筆順-錢-部件-1.png", "images/L5/筆順-錢-部件-2.png", "images/L5/筆順-錢-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180, scale: 0.7}, {x: 170, y: 180, scale: 0.7}] },
            { word: "偏", parts: ["images/L5/筆順-偏-部件-1.png", "images/L5/筆順-偏-部件-2.png", "images/L5/筆順-偏-部件-3.png", "images/L5/筆順-偏-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180, scale: 0.7}, {x: 150, y: 180, scale: 0.5}] },
            { word: "察", parts: ["images/L5/筆順-察-部件-1.png", "images/L5/筆順-察-部件-2.png", "images/L5/筆順-察-部件-3.png", "images/L5/筆順-察-部件-4.png"], pos: [{x: 90, y: 130, scale: 1.3}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
            { word: "偷", parts: ["images/L5/筆順-偷-部件-1.png", "images/L5/筆順-偷-部件-2.png", "images/L5/筆順-偷-部件-3.png", "images/L5/筆順-偷-部件-4.png", "images/L5/筆順-偷-部件-5.png"], pos: [{x: 50, y: 180, scale: 1.4}, {x: 90, y: 180}, {x: 130, y: 180, scale: 0.5}, {x: 170, y: 180, scale: 0.7}, {x: 210, y: 180, scale: 0.7}] },
            { word: "胡", parts: ["images/L5/筆順-胡-部件-1.png", "images/L5/筆順-胡-部件-2.png", "images/L5/筆順-胡-部件-3.png"], pos: [{x: 70, y: 180, scale: 0.7}, {x: 120, y: 180, scale: 0.7}, {x: 170, y: 180}] }
        ], 
        level2: [], 
        level3: [
            // 基礎版
            { text: "表演結束了，小明很有禮貌地向大家________。", answer: "鞠躬" },
            { text: "哥哥不小心弄壞了妹妹的玩具，把她給________了。", answer: "弄哭" },
            { text: "他能在十秒內跑完一百公尺，體育真的非常________。", answer: "厲害" },
            { text: "兩個人為了誰要先玩玩具而________，誰也不讓誰。", answer: "鬥嘴" },
            { text: "小猴子抓癢的動作非常________，逗得大家哈哈大笑。", answer: "逗趣" },
            { text: "玩捉迷藏時，當鬼的人要先________數到十才能開始抓人。", answer: "閉眼" },
            { text: "________叔叔的工作是抓壞人，守護大家的安全。", answer: "警察" },
            { text: "商店裡的東西被________偷偷搬走了，老闆很傷心。", answer: "小偷" },
            { text: "說謊是不對的行為，我們不能隨便________。", answer: "胡說" },
            // 挑戰版
            { text: "表演結束後，台上的演員向觀眾深深一________表達感謝。", answer: "鞠躬" },
            { text: "哥哥弄壞了妹妹最心愛的玩偶，結果把她給________了。", answer: "弄哭" },
            { text: "小明獲得了全國第一名，大家都稱讚他真的很________。", answer: "厲害" },
            { text: "雖然平時愛________，但遇到困難時還是會互相幫忙。", answer: "鬥嘴" },
            { text: "馬戲團裡的小丑表演非常________，逗得觀眾哈哈大笑。", answer: "逗趣" },
            { text: "睡覺前，我習慣先________冥想幾分鐘，讓身體放鬆。", answer: "閉眼" },
            { text: "正義的________叔叔在街上巡邏，保護財產與安全。", answer: "警察" },
            { text: "那名________趁著四下無人，悄悄地爬窗進入屋內行竊。", answer: "小偷" },
            { text: "沒有證據就隨便指責別人是不對的，請不要在這裡________。", answer: "胡說" },
            { text: "這名魔術師的手法非常________，連近距離都看不出破綻。", answer: "厲害" }
        ], 
        level4: [
            { text: "鞠躬", img: "pic/L5/1.png" },
            { text: "弄哭", img: "pic/L5/2.png" },
            { text: "厲害", img: "pic/L5/3.png" },
            { text: "鬥嘴", img: "pic/L5/4.png" },
            { text: "逗趣", img: "pic/L5/5.png" },
            { text: "閉眼", img: "pic/L5/6.png" },
            { text: "警察", img: "pic/L5/7.png" },
            { text: "小偷", img: "pic/L5/8.png" },
            { text: "胡說", img: "pic/L5/9.png" }
        ]  
    },

    // ================= 第六課 =================
    "6": { 
        title: "第六課：一飛沖天", 
        level1: [
            { word: "村", parts: ["images/L6/筆順-村-部件-1.png", "images/L6/筆順-村-部件-2.png", "images/L6/筆順-村-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180, scale: 0.2}] },
            { word: "猴", parts: ["images/L6/筆順-猴-部件-1.png", "images/L6/筆順-猴-部件-2.png", "images/L6/筆順-猴-部件-3.png", "images/L6/筆順-猴-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180, scale: 0.6}, {x: 150, y: 180, scale: 0.6}] },
            { word: "抖", parts: ["images/L6/筆順-抖-部件-1.png", "images/L6/筆順-抖-部件-2.png", "images/L6/筆順-抖-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180, scale: 0.5}, {x: 170, y: 180}] },
            { word: "造", parts: ["images/L6/筆順-造-部件-1.png", "images/L6/筆順-造-部件-2.png", "images/L6/筆順-造-部件-3.png"], pos: [{x: 70, y: 180, scale: 0.6}, {x: 120, y: 180, scale: 0.45}, {x: 170, y: 180}] },
            { word: "助", parts: ["images/L6/筆順-助-部件-1.png", "images/L6/筆順-助-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "展", parts: ["images/L6/筆順-展-部件-1.png", "images/L6/筆順-展-部件-2.png", "images/L6/筆順-展-部件-3.png", "images/L6/筆順-展-部件-4.png", "images/L6/筆順-展-部件-5.png"], pos: [{x: 50, y: 180, scale: 1.3}, {x: 90, y: 180, scale: 0.6}, {x: 130, y: 180, scale: 0.6}, {x: 170, y: 180, scale: 0.6}, {x: 210, y: 180, scale: 0.6}] },
            { word: "簧", parts: ["images/L6/筆順-簧-部件-1.png", "images/L6/筆順-簧-部件-2.png", "images/L6/筆順-簧-部件-3.png", "images/L6/筆順-簧-部件-4.png", "images/L6/筆順-簧-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180, scale: 0.6}, {x: 210, y: 180}] },
            { word: "摔", parts: ["images/L6/筆順-摔-部件-1.png", "images/L6/筆順-摔-部件-2.png", "images/L6/筆順-摔-部件-3.png", "images/L6/筆順-摔-部件-4.png", "images/L6/筆順-摔-部件-5.png", "images/L6/筆順-摔-部件-6.png"], pos: [{x: 40, y: 180, scale: 1.2}, {x: 80, y: 180, scale: 0.7}, {x: 120, y: 180, scale: 0.5}, {x: 160, y: 180, scale: 0.5}, {x: 200, y: 180, scale: 0.5}, {x: 240, y: 180, scale: 0.7}] },
            { word: "巨", parts: ["images/L6/筆順-巨-部件-1.png", "images/L6/筆順-巨-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180, scale: 0.6}] },
            { word: "引", parts: ["images/L6/筆順-引-部件-1.png", "images/L6/筆順-引-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "觀", parts: ["images/L6/筆順-觀-部件-1.png", "images/L6/筆順-觀-部件-2.png", "images/L6/筆順-觀-部件-3.png", "images/L6/筆順-觀-部件-4.png", "images/L6/筆順-觀-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180, scale: 0.5}, {x: 130, y: 180, scale: 0.5}, {x: 170, y: 180, scale: 0.8}, {x: 210, y: 180, scale: 1.3}] },
            { word: "咦", parts: ["images/L6/筆順-咦-部件-1.png", "images/L6/筆順-咦-部件-2.png", "images/L6/筆順-咦-部件-3.png", "images/L6/筆順-咦-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130, scale: 0.6}, {x: 90, y: 180, scale: 0.6}, {x: 150, y: 180}] },
            { word: "松", parts: ["images/L6/筆順-松-部件-1.png", "images/L6/筆順-松-部件-2.png", "images/L6/筆順-松-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180, scale: 0.5}] },
            { word: "鼠", parts: ["images/L6/筆順-鼠-部件-1.png", "images/L6/筆順-鼠-部件-2.png", "images/L6/筆順-鼠-部件-3.png"], pos: [{x: 70, y: 180, scale: 1.4}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "混", parts: ["images/L6/筆順-混-部件-1.png", "images/L6/筆順-混-部件-2.png", "images/L6/筆順-混-部件-3.png", "images/L6/筆順-混-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130, scale: 0.6}, {x: 90, y: 180, scale: 0.6}, {x: 150, y: 180, scale: 0.6}] }
        ], 
        level2: [], 
        level3: [
            // 基礎版
            { text: "山腳下有幾間小房子，那是一個漂亮的________。", answer: "村莊" },
            { text: "外面好冷，小貓凍得不停地________。", answer: "發抖" },
            { text: "我的原子筆裡有一個小________，按下去會彈起來。", answer: "彈簧" },
            { text: "樹林裡有一隻小________，尾巴大大的，正在找果實。", answer: "松鼠" },
            { text: "弟弟把玩具灑了一地，房間變得很________。", answer: "混亂" },
            { text: "螞蟻們分工合作，在泥土裡________牠們的家。", answer: "建造" },
            { text: "老師把一張大畫紙________在桌上，準備教大家畫畫。", answer: "展開" },
            { text: "大鯨魚的身體非常________，比小船還要大很多。", answer: "巨大" },
            { text: "假日的時候，全家人去公園________精彩的表演。", answer: "觀看" },
            // 挑戰版
            { text: "山腳下有一個安靜的小________，空氣非常清新。", answer: "村莊" },
            { text: "寒流來的時候，大家都被凍得不停地________。", answer: "發抖" },
            { text: "彈珠床裡有很多________，跳上去非常有彈性。", answer: "彈簧" },
            { text: "可愛的________正忙著在樹枝間跳躍。", answer: "松鼠" },
            { text: "地震過後，便利商店的貨架倒了一地，畫面非常________。", answer: "混亂" },
            { text: "工程人員正在學校旁邊________一座新的游泳池。", answer: "建造" },
            { text: "弟弟把畫好的圖畫________開來，興奮地向媽媽展示。", answer: "展開" },
            { text: "遠處出現了一座________的雕像，看起來比好幾層樓還高。", answer: "巨大" },
            { text: "周末時，爸爸帶我們去棒球場________精彩的比賽。", answer: "觀看" }
        ], 
        level4: [
            { text: "村莊", img: "pic/L6/1.png" },
            { text: "發抖", img: "pic/L6/2.png" },
            { text: "彈簧", img: "pic/L6/3.png" },
            { text: "松鼠", img: "pic/L6/4.png" },
            { text: "混亂", img: "pic/L6/5.png" },
            { text: "建造", img: "pic/L6/6.png" },
            { text: "展開", img: "pic/L6/7.png" },
            { text: "巨大", img: "pic/L6/8.png" },
            { text: "觀看", img: "pic/L6/9.png" }
        ] 
    },

    // ================= 第七至十二課 =================
    "7": { title: "第七課：井仔腳鹽田", level1: [], level2: [], level3: [], level4: [] },
    "8": { title: "第八課：和魚一起游泳", level1: [], level2: [], level3: [], level4: [] },
    "9": { title: "第九課：三峽老街樂藍染", level1: [], level2: [], level3: [], level4: [] },
    "10": { title: "第十課：地球的眼淚", level1: [], level2: [], level3: [], level4: [] },
    "11": { title: "第十一課：枯木是大飯店", level1: [], level2: [], level3: [], level4: [] },
    "12": { title: "第十二課：騎樓", level1: [], level2: [], level3: [], level4: [] }
};
