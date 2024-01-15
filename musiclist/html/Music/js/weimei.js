﻿$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"001.半山听雨，放空自己（古琴）-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/001.半山听雨，放空自己（古琴）-唯美纯音乐.m4a",},
{title:"002.故乡风景，醉美画卷 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/002.故乡风景，醉美画卷 - 唯美纯音乐.m4a",},
{title:"003.静水禅音，返朴归真-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/003.静水禅音，返朴归真-唯美纯音乐.m4a",},
{title:"004.天籁之音，荡涤心灵 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/004.天籁之音，荡涤心灵 - 唯美纯音乐.m4a",},
{title:"005.心灵雨伞 — 轻音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/005.心灵雨伞 — 轻音乐.m4a",},
{title:"006.童年-纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/006.童年-纯音乐.m4a",},
{title:"007.易经—纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/007.易经—纯音乐.m4a",},
{title:"008.太极 — 纯音乐 （古琴）.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/008.太极 — 纯音乐 （古琴）.m4a",},
{title:"009.琵琶语-纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/009.琵琶语-纯音乐.m4a",},
{title:"010.夜曲(很伤感的纯音乐) - 神秘园.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/010.夜曲(很伤感的纯音乐) - 神秘园.m4a",},
{title:"011.无悔 -李汉颖 （加长版）.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/011.无悔 -李汉颖 （加长版）.m4a",},
{title:"012.和兰花在一起 — 雅尼.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/012.和兰花在一起 — 雅尼.m4a",},
{title:"013.纯音乐 - 昨日重现（钢琴）.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/013.纯音乐 - 昨日重现（钢琴）.m4a",},
{title:"014.纯音乐 - 此情永不移（钢琴）.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/014.纯音乐 - 此情永不移（钢琴）.m4a",},
{title:"015.纯音乐 - 高山流水 (古筝).m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/015.纯音乐 - 高山流水 (古筝).m4a",},
{title:"016.纯音乐 - 雪花神剑（萧）.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/016.纯音乐 - 雪花神剑（萧）.m4a",},
{title:"017.寂静之声 - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/017.寂静之声 - 班得瑞.m4a",},
{title:"018.走过绿意 - Kevin Kern.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/018.走过绿意 - Kevin Kern.m4a",},
{title:"019.安妮的仙境 - 轻音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/019.安妮的仙境 - 轻音乐.m4a",},
{title:"020.净化心灵的声音 - Karunesh.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/020.净化心灵的声音 - Karunesh.m4a",},
{title:"021.岁月如歌 ——哼唱歌手.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/021.岁月如歌 ——哼唱歌手.m4a",},
{title:"022.The Beginning (开始) - Ryran·Tomson.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/022.The Beginning (开始) - Ryran·Tomson.m4a",},
{title:"023.日晷之梦(电台背景音乐) ——纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/023.日晷之梦(电台背景音乐) ——纯音乐.m4a",},
{title:"024.好一朵美丽的茉莉花 - 钢琴曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/024.好一朵美丽的茉莉花 - 钢琴曲.m4a",},
{title:"025.梦里水乡 - 中国民乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/025.梦里水乡 - 中国民乐.m4a",},
{title:"026.青花瓷 - 钢琴曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/026.青花瓷 - 钢琴曲.m4a",},
{title:"027.梦中的婚礼 - 理查德.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/027.梦中的婚礼 - 理查德.m4a",},
{title:"028.星空—理查德·克莱德曼（钢琴）.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/028.星空—理查德·克莱德曼（钢琴）.m4a",},
{title:"029.风之彩 绝对经典 - 陶笛排萧乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/029.风之彩 绝对经典 - 陶笛排萧乐.m4a",},
{title:"030.西风（排箫）芈月传 - 王备.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/030.西风（排箫）芈月传 - 王备.m4a",},
{title:"031.人生最美初见时 - 钢琴曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/031.人生最美初见时 - 钢琴曲.m4a",},
{title:"032.夏日香气 - 电视剧原声 (很好听的钢琴曲).m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/032.夏日香气 - 电视剧原声 (很好听的钢琴曲).m4a",},
{title:"033.森林幻想曲 - Bandari.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/033.森林幻想曲 - Bandari.m4a",},
{title:"034.传奇 (琴牵美人吟Ⅱ) - 段银莹.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/034.传奇 (琴牵美人吟Ⅱ) - 段银莹.m4a",},
{title:"035.一剪梅 - 中国民乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/035.一剪梅 - 中国民乐.m4a",},
{title:"036.广陵散之笑傲江湖曲 —琴箫合奏).m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/036.广陵散之笑傲江湖曲 —琴箫合奏).m4a",},
{title:"037.佛教音乐 - 菩提树.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/037.佛教音乐 - 菩提树.m4a",},
{title:"038.你离开的真相 — 舒缓睡眠.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/038.你离开的真相 — 舒缓睡眠.m4a",},
{title:"039.罗密欧与朱丽叶-群星.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/039.罗密欧与朱丽叶-群星.m4a",},
{title:"040.蝴蝶华尔兹(助眠) — 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/040.蝴蝶华尔兹(助眠) — 纯音乐.m4a",},
{title:"041.我心永恒 — 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/041.我心永恒 — 纯音乐.m4a",},
{title:"042.康妮的蝴蝶 — 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/042.康妮的蝴蝶 — 纯音乐.m4a",},
{title:"043.A Simple Life (唯美小清新治愈系) - Brian Crain.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/043.A Simple Life (唯美小清新治愈系) - Brian Crain.m4a",},
{title:"044.古诗 (Greek Meditation) - 吉他排笛.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/044.古诗 (Greek Meditation) - 吉他排笛.m4a",},
{title:"045.耳边私语 (Almost a Whisper) - Chris Phillips.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/045.耳边私语 (Almost a Whisper) - Chris Phillips.m4a",},
{title:"046.宽阔的海水 (The Water Is Wide) - David Nevue.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/046.宽阔的海水 (The Water Is Wide) - David Nevue.m4a",},
{title:"047.美好清晨 - Daveed.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/047.美好清晨 - Daveed.m4a",},
{title:"048.Forrest Gump 电影《阿甘正传》插曲 — 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/048.Forrest Gump 电影《阿甘正传》插曲 — 纯音乐.m4a",},
{title:"049.茶茗-静心禅乐 (Flowing With The Tea) - Karunesh.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/049.茶茗-静心禅乐 (Flowing With The Tea) - Karunesh.m4a",},
{title:"050.绵雪 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/050.绵雪 - 纯音乐.m4a",},
{title:"051.迷情仙境 - 轻音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/051.迷情仙境 - 轻音乐.m4a",},
{title:"052.神秘园之歌 - 钢琴.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/052.神秘园之歌 - 钢琴.m4a",},
{title:"053.胡伟立 - 市集.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/053.胡伟立 - 市集.m4a",},
{title:"054.Bandari - 安妮的歌.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/054.Bandari - 安妮的歌.m4a",},
{title:"055.忧伤的步美 - 名侦探柯南插曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/055.忧伤的步美 - 名侦探柯南插曲.m4a",},
{title:"056.美丽的神话 - 王崴.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/056.美丽的神话 - 王崴.m4a",},
{title:"057.无尽地平线 (Endless Horizon) - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/057.无尽地平线 (Endless Horizon) - 班得瑞.m4a",},
{title:"058.Adagio 柔板 - 神秘园.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/058.Adagio 柔板 - 神秘园.m4a",},
{title:"059.寂色 (绝美的小提琴曲) - 神秘园.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/059.寂色 (绝美的小提琴曲) - 神秘园.m4a",},
{title:"060.三个人的时光 (天之痕) - 吴欣睿.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/060.三个人的时光 (天之痕) - 吴欣睿.m4a",},
{title:"061.舒伯特小夜曲 (世界名曲) - 舒伯特.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/061.舒伯特小夜曲 (世界名曲) - 舒伯特.m4a",},
{title:"062.偏偏喜欢你 (钢琴) - 赵海洋.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/062.偏偏喜欢你 (钢琴) - 赵海洋.m4a",},
{title:"063.一切为了你 (Everything I Do) - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/063.一切为了你 (Everything I Do) - 班得瑞.m4a",},
{title:"064.望天 (来不及说我爱你插曲) - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/064.望天 (来不及说我爱你插曲) - 纯音乐.m4a",},
{title:"065.蝶恋花 - 二胡版.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/065.蝶恋花 - 二胡版.m4a",},
{title:"066.静静的雪 (Snow) - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/066.静静的雪 (Snow) - 班得瑞.m4a",},
{title:"067.永远同在 - 八音盒.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/067.永远同在 - 八音盒.m4a",},
{title:"068.Wish (神思者的哀伤和唯美) - 神思者.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/068.Wish (神思者的哀伤和唯美) - 神思者.m4a",},
{title:"069.一帘幽梦(古筝) - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/069.一帘幽梦(古筝) - 纯音乐.m4a",},
{title:"070.月光仙子 (Princess Of The Moon) - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/070.月光仙子 (Princess Of The Moon) - 班得瑞.m4a",},
{title:"071.孤独的巡礼 ，真实的自己-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/071.孤独的巡礼 ，真实的自己-唯美纯音乐.m4a",},
{title:"072.风舞者 Windancer - 神秘园.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/072.风舞者 Windancer - 神秘园.m4a",},
{title:"073.出水莲 (古筝独奏) - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/073.出水莲 (古筝独奏) - 纯音乐.m4a",},
{title:"074.月光曲 - 贝多芬.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/074.月光曲 - 贝多芬.m4a",},
{title:"075.爱殇 - 钢琴曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/075.爱殇 - 钢琴曲.m4a",},
{title:"076.优美动听古典音乐 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/076.优美动听古典音乐 - 纯音乐.m4a",},
{title:"077.中国古典音乐 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/077.中国古典音乐 - 纯音乐.m4a",},
{title:"078.梦于月光中 (Dreaming In The Moonlight) - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/078.梦于月光中 (Dreaming In The Moonlight) - 班得瑞.m4a",},
{title:"079.枉凝眉箫曲 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/079.枉凝眉箫曲 - 纯音乐.m4a",},
{title:"080.莎莉花园 (绿野仙踪) - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/080.莎莉花园 (绿野仙踪) - 班得瑞.m4a",},
{title:"081.海王星 (Neptune) - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/081.海王星 (Neptune) - 班得瑞.m4a",},
{title:"082.天使情人 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/082.天使情人 - 纯音乐.m4a",},
{title:"083.阿根廷别为我哭泣.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/083.阿根廷别为我哭泣.m4a",},
{title:"084.风动草( 陶笛) - 伴奏版.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/084.风动草( 陶笛) - 伴奏版.m4a",},
{title:"085.蝶舞娉婷 Papillon - 神秘园.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/085.蝶舞娉婷 Papillon - 神秘园.m4a",},
{title:"086.你鼓舞了我 You Raise Me Up - 神秘园.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/086.你鼓舞了我 You Raise Me Up - 神秘园.m4a",},
{title:"087.微风小径 (The Winding Path) - Kevin Kern.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/087.微风小径 (The Winding Path) - Kevin Kern.m4a",},
{title:"088.童年的味道 (轻快的纯音乐) - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/088.童年的味道 (轻快的纯音乐) - 纯音乐.m4a",},
{title:"089.Sometimes When It Rains (下雨的时候) - 神秘园.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/089.Sometimes When It Rains (下雨的时候) - 神秘园.m4a",},
{title:"090.倩女幽魂 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/090.倩女幽魂 - 纯音乐.m4a",},
{title:"091.蒙娜丽莎的眼泪 - 钢琴曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/091.蒙娜丽莎的眼泪 - 钢琴曲.m4a",},
{title:"092.镜中的安娜 - 纯音乐（吉他).m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/092.镜中的安娜 - 纯音乐（吉他).m4a",},
{title:"093.星语心愿 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/093.星语心愿 - 纯音乐.m4a",},
{title:"094.山不转水转 (萨克斯 )- 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/094.山不转水转 (萨克斯 )- 纯音乐.m4a",},
{title:"095.治愈心灵的神曲 - 轻音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/095.治愈心灵的神曲 - 轻音乐.m4a",},
{title:"096.莫斯科郊外的晚上 - 萨克斯.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/096.莫斯科郊外的晚上 - 萨克斯.m4a",},
{title:"097.Lotus 莲花 - 神秘园.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/097.Lotus 莲花 - 神秘园.m4a",},
{title:"098.一直很安静 伴奏 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/098.一直很安静 伴奏 - 纯音乐.m4a",},
{title:"099.魂断蓝桥主题曲 - 萨克斯.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/099.魂断蓝桥主题曲 - 萨克斯.m4a",},
{title:"0全部文件.txt",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/0全部文件.txt",},
{title:"0批量生成文件目录树列表.bat",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/0批量生成文件目录树列表.bat",},
{title:"100.奥里诺科之梦 - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/100.奥里诺科之梦 - 班得瑞.m4a",},
{title:"101.Heartstrings 心弦 - 神秘园.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/101.Heartstrings 心弦 - 神秘园.m4a",},
{title:"102.伤感音乐 - 太多 (小提琴) - 轻音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/102.伤感音乐 - 太多 (小提琴) - 轻音乐.m4a",},
{title:"103.在那遥远的地方 - 吉他曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/103.在那遥远的地方 - 吉他曲.m4a",},
{title:"104.风居住的街道 - 矶村由纪子.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/104.风居住的街道 - 矶村由纪子.m4a",},
{title:"105.后来 (小提琴 长笛) - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/105.后来 (小提琴 长笛) - 纯音乐.m4a",},
{title:"106.中央台天气预报背景音乐 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/106.中央台天气预报背景音乐 - 纯音乐.m4a",},
{title:"107.月光下漫舞 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/107.月光下漫舞 - 纯音乐.m4a",},
{title:"108.流行的云 - 吉他纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/108.流行的云 - 吉他纯音乐.m4a",},
{title:"109.踏古 - 林海 （琵琶）.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/109.踏古 - 林海 （琵琶）.m4a",},
{title:"110.流动的城市 - 林海 （钢琴曲）.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/110.流动的城市 - 林海 （钢琴曲）.m4a",},
{title:"111.杨柳 - 林海.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/111.杨柳 - 林海.m4a",},
{title:"112.林海 - 暗香.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/112.林海 - 暗香.m4a",},
{title:"113.火星金星 (Mars And Venus) - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/113.火星金星 (Mars And Venus) - 班得瑞.m4a",},
{title:"114.新不了情主题曲 - 纯音乐（萨克斯）.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/114.新不了情主题曲 - 纯音乐（萨克斯）.m4a",},
{title:"115.那天的遇见 (钢琴曲) - 赵海洋.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/115.那天的遇见 (钢琴曲) - 赵海洋.m4a",},
{title:"116.纯音乐 - 橄榄树.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/116.纯音乐 - 橄榄树.m4a",},
{title:"117.风的誓言 (風の誓い) - 梁邦彦.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/117.风的誓言 (風の誓い) - 梁邦彦.m4a",},
{title:"118.幽灵公主 - 轻音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/118.幽灵公主 - 轻音乐.m4a",},
{title:"119.雨的旋律 (中西器乐合璧) - 古筝.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/119.雨的旋律 (中西器乐合璧) - 古筝.m4a",},
{title:"120.往事 Ride On - Phil Coulter.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/120.往事 Ride On - Phil Coulter.m4a",},
{title:"121.一起走过的日子 - 古筝.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/121.一起走过的日子 - 古筝.m4a",},
{title:"122.印度琵琶之魂 - 缪晓铮.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/122.印度琵琶之魂 - 缪晓铮.m4a",},
{title:"123.好听古典音乐 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/123.好听古典音乐 - 纯音乐.m4a",},
{title:"124.在我心中的夏天 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/124.在我心中的夏天 - 纯音乐.m4a",},
{title:"125.青空下的约定 - 伊藤贤治.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/125.青空下的约定 - 伊藤贤治.m4a",},
{title:"126.罗多伦咖啡店 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/126.罗多伦咖啡店 - 纯音乐.m4a",},
{title:"127.Moon River 月亮河.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/127.Moon River 月亮河.m4a",},
{title:"128.君生我未生 (我生君已老) - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/128.君生我未生 (我生君已老) - 纯音乐.m4a",},
{title:"129.醉人的钢琴声- 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/129.醉人的钢琴声- 纯音乐.m4a",},
{title:"130.珍爱时光 (The Moment) - Kenny G.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/130.珍爱时光 (The Moment) - Kenny G.m4a",},
{title:"131.无法超越的灵魂音乐 (乱红) - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/131.无法超越的灵魂音乐 (乱红) - 纯音乐.m4a",},
{title:"132.追梦人 (雪山飞狐主题曲) - 笛子.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/132.追梦人 (雪山飞狐主题曲) - 笛子.m4a",},
{title:"133.娜迪亚主旋律 - Chris Phillips.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/133.娜迪亚主旋律 - Chris Phillips.m4a",},
{title:"134.Chaconne 恰空舞曲 - 神秘园.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/134.Chaconne 恰空舞曲 - 神秘园.m4a",},
{title:"135.莲语的呢喃 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/135.莲语的呢喃 - 纯音乐.m4a",},
{title:"136.《卷珠帘》意境钢琴版 - 钢琴曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/136.《卷珠帘》意境钢琴版 - 钢琴曲.m4a",},
{title:"137.欲望(Touch of Desire) (琵琶,吟唱) - 吕秀龄.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/137.欲望(Touch of Desire) (琵琶,吟唱) - 吕秀龄.m4a",},
{title:"138.我梦见了你 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/138.我梦见了你 - 纯音乐.m4a",},
{title:"139.珍宝 (The Treasure) - Bernward Koch.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/139.珍宝 (The Treasure) - Bernward Koch.m4a",},
{title:"140.Your Eyes 你的眼神 - Andrew Jasinski.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/140.Your Eyes 你的眼神 - Andrew Jasinski.m4a",},
{title:"141.Down By The Salley Gardens (莎莉花园) - James Galway.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/141.Down By The Salley Gardens (莎莉花园) - James Galway.m4a",},
{title:"142.婚礼钟声 (Wedding Bell 吉他曲) - Depapepe.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/142.婚礼钟声 (Wedding Bell 吉他曲) - Depapepe.m4a",},
{title:"143.浪客剑心 (Departure 钢琴+吉他) - 日本ACG.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/143.浪客剑心 (Departure 钢琴+吉他) - 日本ACG.m4a",},
{title:"144.阿兰胡埃斯之爱 (优美的长笛) - Patrick Gallois.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/144.阿兰胡埃斯之爱 (优美的长笛) - Patrick Gallois.m4a",},
{title:"145.风光秀丽的小岛 (La Isla Bonita) - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/145.风光秀丽的小岛 (La Isla Bonita) - 纯音乐.m4a",},
{title:"146.大千世界(钢琴) - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/146.大千世界(钢琴) - 纯音乐.m4a",},
{title:"147.送别 - 钢琴曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/147.送别 - 钢琴曲.m4a",},
{title:"148.穿越时空的思念 - 和田薰.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/148.穿越时空的思念 - 和田薰.m4a",},
{title:"149.通往幸福的路 (Path To Happiness) - Kondor.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/149.通往幸福的路 (Path To Happiness) - Kondor.m4a",},
{title:"150.永远同在 - 宗次郎.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/150.永远同在 - 宗次郎.m4a",},
{title:"151.闪烁的星星 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/151.闪烁的星星 - 纯音乐.m4a",},
{title:"152.威尼斯天使 (Forever after) - 竖琴.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/152.威尼斯天使 (Forever after) - 竖琴.m4a",},
{title:"153.唯美浪漫的纯音乐 N°025 - Relaxdaily.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/153.唯美浪漫的纯音乐 N°025 - Relaxdaily.m4a",},
{title:"154.在那遥远的地方 (萨克斯) - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/154.在那遥远的地方 (萨克斯) - 纯音乐.m4a",},
{title:"155.盛开成花树 - 喵步小雨中.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/155.盛开成花树 - 喵步小雨中.m4a",},
{title:"156.生活的乐趣 (The Joy Of Life) - Kenny G.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/156.生活的乐趣 (The Joy Of Life) - Kenny G.m4a",},
{title:"157.风之诗 - 吉他名曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/157.风之诗 - 吉他名曲.m4a",},
{title:"158.爱尔兰晨风(笛) - 陈悦.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/158.爱尔兰晨风(笛) - 陈悦.m4a",},
{title:"159.Memories 回忆 - Wendi.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/159.Memories 回忆 - Wendi.m4a",},
{title:"160.晴了的某日 - 全素妍.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/160.晴了的某日 - 全素妍.m4a",},
{title:"161.在你的怀抱中最安全 - Kevin Kern.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/161.在你的怀抱中最安全 - Kevin Kern.m4a",},
{title:"162.天际 (大自然音乐) - Mickey Lee.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/162.天际 (大自然音乐) - Mickey Lee.m4a",},
{title:"163.流星雨 - 陈冠宇.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/163.流星雨 - 陈冠宇.m4a",},
{title:"164.约定 - 钢琴曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/164.约定 - 钢琴曲.m4a",},
{title:"165.奥里诺科之梦 - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/165.奥里诺科之梦 - 班得瑞.m4a",},
{title:"166.变幻之风 - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/166.变幻之风 - 班得瑞.m4a",},
{title:"167.星际安魂曲 - 山下直人.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/167.星际安魂曲 - 山下直人.m4a",},
{title:"168.风车 (Wind-mill) - Andemund Orchestra.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/168.风车 (Wind-mill) - Andemund Orchestra.m4a",},
{title:"169.雨空 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/169.雨空 - 纯音乐.m4a",},
{title:"170.春野 - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/170.春野 - 班得瑞.m4a",},
{title:"171.华丽的节奏钢琴 (Midnight Affair) - Tom Barabas.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/171.华丽的节奏钢琴 (Midnight Affair) - Tom Barabas.m4a",},
{title:"172.秘密的庭院 (钢琴轻音乐) - 理查德.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/172.秘密的庭院 (钢琴轻音乐) - 理查德.m4a",},
{title:"173.精灵之吻 - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/173.精灵之吻 - 班得瑞.m4a",},
{title:"174.满天星 - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/174.满天星 - 班得瑞.m4a",},
{title:"175.迷雾水珠 - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/175.迷雾水珠 - 班得瑞.m4a",},
{title:"176.秘密 - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/176.秘密 - 班得瑞.m4a",},
{title:"177.森林中的一夜 - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/177.森林中的一夜 - 班得瑞.m4a",},
{title:"178.我心深处 - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/178.我心深处 - 班得瑞.m4a",},
{title:"179.印地安之梦 - 班得瑞.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/179.印地安之梦 - 班得瑞.m4a",},
{title:"180.蓝色星球 - Guido Negraszus.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/180.蓝色星球 - Guido Negraszus.m4a",},
{title:"181.我的歌声里 - 钢琴曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/181.我的歌声里 - 钢琴曲.m4a",},
{title:"182.Moon Flow (听起来十分舒畅) - Nomak.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/182.Moon Flow (听起来十分舒畅) - Nomak.m4a",},
{title:"183.Autumn Journey 秋之旅 - Eric Chiryoku.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/183.Autumn Journey 秋之旅 - Eric Chiryoku.m4a",},
{title:"184.无尽之雨 (唯美钢琴曲) - 林有三.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/184.无尽之雨 (唯美钢琴曲) - 林有三.m4a",},
{title:"185.夏恋 - Otokaze.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/185.夏恋 - Otokaze.m4a",},
{title:"186.夏日星 (Summer Star) - Lanx.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/186.夏日星 (Summer Star) - Lanx.m4a",},
{title:"187.轻松的古典小夜曲 (Serenade) - Andre Rieu.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/187.轻松的古典小夜曲 (Serenade) - Andre Rieu.m4a",},
{title:"188.海阔天空 - 钢琴.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/188.海阔天空 - 钢琴.m4a",},
{title:"189.森林之歌 Forest Hymn - Bill Douglas.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/189.森林之歌 Forest Hymn - Bill Douglas.m4a",},
{title:"190.没有夜晚（There Is No Night） - Mairead Nesbitt.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/190.没有夜晚（There Is No Night） - Mairead Nesbitt.m4a",},
{title:"191.全心全意 (Heart and Soul) - Kenny G.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/191.全心全意 (Heart and Soul) - Kenny G.m4a",},
{title:"192.寂静之声 (吉他) - 明仔.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/192.寂静之声 (吉他) - 明仔.m4a",},
{title:"193.阿兰胡埃斯协奏曲 - Julian Bream.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/193.阿兰胡埃斯协奏曲 - Julian Bream.m4a",},
{title:"194.Between Worlds (带有力量的宁静) - Roger Subirana.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/194.Between Worlds (带有力量的宁静) - Roger Subirana.m4a",},
{title:"195.寂静之声 (吉他) - 明仔.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/195.寂静之声 (吉他) - 明仔.m4a",},
{title:"196.After the Rain (雨后) - Kevin Kern.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/196.After the Rain (雨后) - Kevin Kern.m4a",},
{title:"197.小酒窝钢琴版 - 王喆.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/197.小酒窝钢琴版 - 王喆.m4a",},
{title:"198.你的微笑 (Tu Sonrisa 微风吉他二重奏) - La Vienta.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/198.你的微笑 (Tu Sonrisa 微风吉他二重奏) - La Vienta.m4a",},
{title:"199.美丽的神话 - Pure Music.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/199.美丽的神话 - Pure Music.m4a",},
{title:"200.季节的轮回 - 奥户巴寿.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/200.季节的轮回 - 奥户巴寿.m4a",},
{title:"201.当我遇 - 甘仕良.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/201.当我遇 - 甘仕良.m4a",},
{title:"202.神秘园之歌 钢琴曲 - 赵海洋.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/202.神秘园之歌 钢琴曲 - 赵海洋.m4a",},
{title:"203.玛奇朵飘浮 (手风琴) - 王雁盟.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/203.玛奇朵飘浮 (手风琴) - 王雁盟.m4a",},
{title:"204.落日大道 - Guido Negraszus.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/204.落日大道 - Guido Negraszus.m4a",},
{title:"205.别说我的眼泪你无所谓 (钢琴) - 王喆.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/205.别说我的眼泪你无所谓 (钢琴) - 王喆.m4a",},
{title:"206.秋～華恋～ - α·Pav.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/206.秋～華恋～ - α·Pav.m4a",},
{title:"207.你的心河 (River Flows In You) - Eisblume.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/207.你的心河 (River Flows In You) - Eisblume.m4a",},
{title:"208.蓝色生死恋I主题曲 - Lawrence.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/208.蓝色生死恋I主题曲 - Lawrence.m4a",},
{title:"209.季节的女王 (The Queen Of Season) - Danbi.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/209.季节的女王 (The Queen Of Season) - Danbi.m4a",},
{title:"210.一起走过的日子(古筝) - 李炜.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/210.一起走过的日子(古筝) - 李炜.m4a",},
{title:"211.以思念 (十九岁的纯情背景音乐) - 钢琴曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/211.以思念 (十九岁的纯情背景音乐) - 钢琴曲.m4a",},
{title:"212.Childhood's Memory 陶笛版 (思い出の小箱) - 宗次郎.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/212.Childhood's Memory 陶笛版 (思い出の小箱) - 宗次郎.m4a",},
{title:"213.卡农 (小提琴) - 利未人室内乐团.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/213.卡农 (小提琴) - 利未人室内乐团.m4a",},
{title:"214.我在那一角落患过伤风 - 赵海洋.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/214.我在那一角落患过伤风 - 赵海洋.m4a",},
{title:"215.Follow Your Heart (聆听心灵深处的呼唤) - Karunesh.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/215.Follow Your Heart (聆听心灵深处的呼唤) - Karunesh.m4a",},
{title:"216.微笑的弧度 (Silent Love) - 何真真.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/216.微笑的弧度 (Silent Love) - 何真真.m4a",},
{title:"217.花言叶 - α·Pav.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/217.花言叶 - α·Pav.m4a",},
{title:"218.欢乐的珍珠——凯文·科恩.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/218.欢乐的珍珠——凯文·科恩.m4a",},
{title:"219.生命之舞(钢琴与排笛) - Brad White & Pierre Grill.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/219.生命之舞(钢琴与排笛) - Brad White & Pierre Grill.m4a",},
{title:"220.希望曙光 - 喵步小雨中.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/220.希望曙光 - 喵步小雨中.m4a",},
{title:"221.睁不开眼就看不见- 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/221.睁不开眼就看不见- 纯音乐.m4a",},
{title:"222.suiren - a_hisa.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/222.suiren - a_hisa.m4a",},
{title:"223.游戏《蓝莓花园》的原声集 (Entre deux) - Daduk.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/223.游戏《蓝莓花园》的原声集 (Entre deux) - Daduk.m4a",},
{title:"224.善良的心 - Marc Enfroy.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/224.善良的心 - Marc Enfroy.m4a",},
{title:"225.梦中见——凯文·科恩.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/225.梦中见——凯文·科恩.m4a",},
{title:"226.久远~光和波的记忆~ -日本ACG.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/226.久远~光和波的记忆~ -日本ACG.m4a",},
{title:"227.雪花颂E (Snow Flower Song E) - Sweet Rain.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/227.雪花颂E (Snow Flower Song E) - Sweet Rain.m4a",},
{title:"228.爱的记忆- Phil Coulter.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/228.爱的记忆- Phil Coulter.m4a",},
{title:"229.醉梦西班牙 - Aage Kvalbein.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/229.醉梦西班牙 - Aage Kvalbein.m4a",},
{title:"230.舒伯特：天鹅之歌 (小夜曲) - Arthur Grumiaux.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/230.舒伯特：天鹅之歌 (小夜曲) - Arthur Grumiaux.m4a",},
{title:"231.Numb 钢琴版 - 林肯公园.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/231.Numb 钢琴版 - 林肯公园.m4a",},
{title:"232.ひだまりの（向阳之乡） - 日本ACG.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/232.ひだまりの（向阳之乡） - 日本ACG.m4a",},
{title:"233.Palace Memories~Sunset - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/233.Palace Memories~Sunset - 纯音乐.m4a",},
{title:"234.Your Beautiful Love - Back to Earth.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/234.Your Beautiful Love - Back to Earth.m4a",},
{title:"235.暗恋过结局呢(节奏) - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/235.暗恋过结局呢(节奏) - 纯音乐.m4a",},
{title:"236.悲歌 Cancion Triste - Jesse Cook.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/236.悲歌 Cancion Triste - Jesse Cook.m4a",},
{title:"237.小夜曲 - 舒伯特.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/237.小夜曲 - 舒伯特.m4a",},
{title:"238.跨越时代的思念 (钢琴曲) - 和田薰.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/238.跨越时代的思念 (钢琴曲) - 和田薰.m4a",},
{title:"239.我爱你 Ya Tebya Lubliu (吉他) - Acoustic Alchemy.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/239.我爱你 Ya Tebya Lubliu (吉他) - Acoustic Alchemy.m4a",},
{title:"240.散花 - Key Sounds Label.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/240.散花 - Key Sounds Label.m4a",},
{title:"241.Lost my pieces (龙与虎 感人配乐) - 桥本由香利.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/241.Lost my pieces (龙与虎 感人配乐) - 桥本由香利.m4a",},
{title:"242.Do You Live, Do You Love (活着而爱着) - Danny Wright.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/242.Do You Live, Do You Love (活着而爱着) - Danny Wright.m4a",},
{title:"243.Pachebel's Canon in D (卡农钢琴曲) - Danny Wright.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/243.Pachebel's Canon in D (卡农钢琴曲) - Danny Wright.m4a",},
{title:"244.Sleepless beauty (万有引力) - 浅仑大介.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/244.Sleepless beauty (万有引力) - 浅仑大介.m4a",},
{title:"245.河西走廊之梦-雅尼.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/245.河西走廊之梦-雅尼.m4a",},
{title:"246.如果我能告诉你-雅尼.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/246.如果我能告诉你-雅尼.m4a",},
{title:"247.当星星落下时-安菲尔.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/247.当星星落下时-安菲尔.m4a",},
{title:"248.雨中漫步-雅尼.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/248.雨中漫步-雅尼.m4a",},
{title:"249.永远不会太晚-雅尼.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/249.永远不会太晚-雅尼.m4a",},
{title:"250.一直在我心中 - Udo Vismann.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/250.一直在我心中 - Udo Vismann.m4a",},
{title:"251.秋天的色彩 - Soothing Relaxation.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/251.秋天的色彩 - Soothing Relaxation.m4a",},
{title:"252.Always 永远 - Soothing Relaxation.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/252.Always 永远 - Soothing Relaxation.m4a",},
{title:"253.绿袖子 (Greensleeves) - 理查德.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/253.绿袖子 (Greensleeves) - 理查德.m4a",},
{title:"254.胡伟立 - 温馨时刻.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/254.胡伟立 - 温馨时刻.m4a",},
{title:"255.纯音乐 - 莫失莫忘.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/255.纯音乐 - 莫失莫忘.m4a",},
{title:"256.胡伟立 - 雪千寻.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/256.胡伟立 - 雪千寻.m4a",},
{title:"257.如梦岁月-纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/257.如梦岁月-纯音乐.m4a",},
{title:"258.刹那永恒-纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/258.刹那永恒-纯音乐.m4a",},
{title:"259.秋的思念 - 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/259.秋的思念 - 纯音乐.m4a",},
{title:"260.中华通络操-纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/260.中华通络操-纯音乐.m4a",},
{title:"261.我和我的祖国-钢琴曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/261.我和我的祖国-钢琴曲.m4a",},
{title:"262.我爱你中国 -小提琴.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/262.我爱你中国 -小提琴.m4a",},
{title:"263.如烟长廊-吉他.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/263.如烟长廊-吉他.m4a",},
{title:"264.牧羊曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/264.牧羊曲.m4a",},
{title:"265.AIR-青空（钢琴版）.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/265.AIR-青空（钢琴版）.m4a",},
{title:"266.青空.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/266.青空.m4a",},
{title:"267.空纳万境.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/267.空纳万境.m4a",},
{title:"268.告白の夜.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/268.告白の夜.m4a",},
{title:"269.幻昼.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/269.幻昼.m4a",},
{title:"270.风平浪静.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/270.风平浪静.m4a",},
{title:"271.夜、萤火虫和你.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/271.夜、萤火虫和你.m4a",},
{title:"272.一人静.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/272.一人静.m4a",},
{title:"273.岩山---昭乌达盟民歌.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/273.岩山---昭乌达盟民歌.m4a",},
{title:"274.Einsamer Hirte 孤独的牧羊人 ( 口琴 ).m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/274.Einsamer Hirte 孤独的牧羊人 ( 口琴 ).m4a",},
{title:"275.Heavenly (feat. Felicia Farerre).m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/275.Heavenly (feat. Felicia Farerre).m4a",},
{title:"276.心绪 Continuous Thought.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/276.心绪 Continuous Thought.m4a",},
{title:"277.打雷下雨的声音真好听.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/277.打雷下雨的声音真好听.m4a",},
{title:"278.痴情冢 【笛子版】.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/278.痴情冢 【笛子版】.m4a",},
{title:"279.someone like you 原版伴奏.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/279.someone like you 原版伴奏.m4a",},
{title:"280.雨碎江南，花影斑斓-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/280.雨碎江南，花影斑斓-唯美纯音乐.m4a",},
{title:"281.茶.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/281.茶.m4a",},
{title:"282.好听的古典音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/282.好听的古典音乐.m4a",},
{title:"283.桃花渡.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/283.桃花渡.m4a",},
{title:"284.临安初雨，春水凝碧-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/284.临安初雨，春水凝碧-唯美纯音乐.m4a",},
{title:"285.探清水河.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/285.探清水河.m4a",},
{title:"286.云海间.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/286.云海间.m4a",},
{title:"287.山野幽居，宁静幽谧-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/287.山野幽居，宁静幽谧-唯美纯音乐.m4a",},
{title:"288.苍竹滴翠，寂然如水-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/288.苍竹滴翠，寂然如水-唯美纯音乐.m4a",},
{title:"289.回想-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/289.回想-唯美纯音乐.m4a",},
{title:"290.琵琶行-钢琴曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/290.琵琶行-钢琴曲.m4a",},
{title:"291.三个人的时光.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/291.三个人的时光.m4a",},
{title:"292.繁华的寂静-钢琴曲.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/292.繁华的寂静-钢琴曲.m4a",},
{title:"293.秋来风起，叶落禅意-唯美轻音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/293.秋来风起，叶落禅意-唯美轻音乐.m4a",},
{title:"294.伴读静心唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/294.伴读静心唯美纯音乐.m4a",},
{title:"295.那些关于你的爱恨情长.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/295.那些关于你的爱恨情长.m4a",},
{title:"296.那个你熟悉且难忘的声音 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/296.那个你熟悉且难忘的声音 - 唯美纯音乐.m4a",},
{title:"297.雨韵悠然，滋润心田- 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/297.雨韵悠然，滋润心田- 唯美纯音乐.m4a",},
{title:"298.千年一叹，婉韵悠远（古筝） - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/298.千年一叹，婉韵悠远（古筝） - 唯美纯音乐.m4a",},
{title:"299.水姻缘（古筝新韵）-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/299.水姻缘（古筝新韵）-唯美纯音乐.m4a",},
{title:"300.女儿情 （古筝） - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/300.女儿情 （古筝） - 唯美纯音乐.m4a",},
{title:"301.水-禅意名曲 (茶禅一味) - 唯美轻音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/301.水-禅意名曲 (茶禅一味) - 唯美轻音乐.m4a",},
{title:"302.睡莲（二胡）-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/302.睡莲（二胡）-唯美纯音乐.m4a",},
{title:"303.碧玉的江孜（净化心灵的西藏乐曲）- 纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/303.碧玉的江孜（净化心灵的西藏乐曲）- 纯音乐.m4a",},
{title:"304.潮汐的旋律，心灵的慰藉 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/304.潮汐的旋律，心灵的慰藉 - 唯美纯音乐.m4a",},
{title:"305.天籁之音,来自印第安 -唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/305.天籁之音,来自印第安 -唯美纯音乐.m4a",},
{title:"306.花开不记年-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/306.花开不记年-唯美纯音乐.m4a",},
{title:"307.姻缘（古典）-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/307.姻缘（古典）-唯美纯音乐.m4a",},
{title:"308.墨兰香，韵悠扬-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/308.墨兰香，韵悠扬-唯美纯音乐.m4a",},
{title:"309.天籁排箫 最后的莫西干人.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/309.天籁排箫 最后的莫西干人.m4a",},
{title:"310.织女·心丝 (笛箫版) - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/310.织女·心丝 (笛箫版) - 唯美纯音乐.m4a",},
{title:"311.风云依旧，人已老 (钢琴曲) - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/311.风云依旧，人已老 (钢琴曲) - 唯美纯音乐.m4a",},
{title:"312.下雨的时候（小提琴） -唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/312.下雨的时候（小提琴） -唯美纯音乐.m4a",},
{title:"313.红颜旧，此情不忘，忍别离 (笛子版)-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/313.红颜旧，此情不忘，忍别离 (笛子版)-唯美纯音乐.m4a",},
{title:"314.《水墨兰亭》沉静如水，静逸如诗-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/314.《水墨兰亭》沉静如水，静逸如诗-唯美纯音乐.m4a",},
{title:"315.司岗里情，相依相望-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/315.司岗里情，相依相望-唯美纯音乐.m4a",},
{title:"316.江南印象，隽永舒畅-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/316.江南印象，隽永舒畅-唯美纯音乐.m4a",},
{title:"317.薰衣草的阴影-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/317.薰衣草的阴影-唯美纯音乐.m4a",},
{title:"318.缘聚 （醉人的水墨中国风）-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/318.缘聚 （醉人的水墨中国风）-唯美纯音乐.m4a",},
{title:"319.绾青丝，别离殇（二胡）唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/319.绾青丝，别离殇（二胡）唯美纯音乐.m4a",},
{title:"320.玉烟笛梦，诉说人生-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/320.玉烟笛梦，诉说人生-唯美纯音乐.m4a",},
{title:"321.是谁在你耳畔呢喃-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/321.是谁在你耳畔呢喃-唯美纯音乐.m4a",},
{title:"322.相恋在夏季-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/322.相恋在夏季-唯美纯音乐.m4a",},
{title:"323.曾经追梦，现已不年轻-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/323.曾经追梦，现已不年轻-唯美纯音乐.m4a",},
{title:"324.爱恨离别，梁祝化蝶 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/324.爱恨离别，梁祝化蝶 - 唯美纯音乐.m4a",},
{title:"325.时光如流沙，珍惜当下 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/325.时光如流沙，珍惜当下 - 唯美纯音乐.m4a",},
{title:"326.世外桃源 ，飘逸幽远 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/326.世外桃源 ，飘逸幽远 - 唯美纯音乐.m4a",},
{title:"327.放空自己，心灵之旅- 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/327.放空自己，心灵之旅- 唯美纯音乐.m4a",},
{title:"328.深山禅林，幽远意境 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/328.深山禅林，幽远意境 - 唯美纯音乐.m4a",},
{title:"329.尽余欢，今宵别梦寒-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/329.尽余欢，今宵别梦寒-唯美纯音乐.m4a",},
{title:"330.《静水禅音》静心极乐 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/330.《静水禅音》静心极乐 - 唯美纯音乐.m4a",},
{title:"331.佛号静心，涤荡红尘-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/331.佛号静心，涤荡红尘-唯美纯音乐.m4a",},
{title:"332.月下起舞（傣族民乐）-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/332.月下起舞（傣族民乐）-唯美纯音乐.m4a",},
{title:"333.生活安详，舟渔晚唱 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/333.生活安详，舟渔晚唱 - 唯美纯音乐.m4a",},
{title:"334.万水千山总是情 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/334.万水千山总是情 - 唯美纯音乐.m4a",},
{title:"335.湖光水面，宁静幽远 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/335.湖光水面，宁静幽远 - 唯美纯音乐.m4a",},
{title:"336.旭日清晨，唯美醉人 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/336.旭日清晨，唯美醉人 - 唯美纯音乐.m4a",},
{title:"337.流水潺潺，筝音婉转-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/337.流水潺潺，筝音婉转-唯美纯音乐.m4a",},
{title:"338.别样晚秋，是喜是忧-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/338.别样晚秋，是喜是忧-唯美纯音乐.m4a",},
{title:"339.恢弘史诗，大气磅礴-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/339.恢弘史诗，大气磅礴-唯美纯音乐.m4a",},
{title:"340.岁月华章，再现辉煌-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/340.岁月华章，再现辉煌-唯美纯音乐.m4a",},
{title:"341.不变的心，永恒的爱-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/341.不变的心，永恒的爱-唯美纯音乐.m4a",},
{title:"342.梦里水乡，让人向往 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/342.梦里水乡，让人向往 - 唯美纯音乐.m4a",},
{title:"343.且听风吟 ，触动人心 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/343.且听风吟 ，触动人心 - 唯美纯音乐.m4a",},
{title:"344.安静养心，舒缓心情 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/344.安静养心，舒缓心情 - 唯美纯音乐.m4a",},
{title:"345.永浴爱河 ，至真至深- 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/345.永浴爱河 ，至真至深- 唯美纯音乐.m4a",},
{title:"346.真爱永恒，相伴一生 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/346.真爱永恒，相伴一生 - 唯美纯音乐.m4a",},
{title:"347.青春短暂，让人怀念 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/347.青春短暂，让人怀念 - 唯美纯音乐.m4a",},
{title:"348.一曲一净土，一弦一清心 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/348.一曲一净土，一弦一清心 - 唯美纯音乐.m4a",},
{title:"349.余生很短，请别错过 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/349.余生很短，请别错过 - 唯美纯音乐.m4a",},
{title:"350.秋叶珊珊，伴君入眠 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/350.秋叶珊珊，伴君入眠 - 唯美纯音乐.m4a",},
{title:"351.竹笛声悠扬，和夜莺很像-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/351.竹笛声悠扬，和夜莺很像-唯美纯音乐.m4a",},
{title:"352.音符跳动，抚慰心灵-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/352.音符跳动，抚慰心灵-唯美纯音乐.m4a",},
{title:"353.灵魂的呼唤，雄鹰之歌-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/353.灵魂的呼唤，雄鹰之歌-唯美纯音乐.m4a",},
{title:"354.英雄落寞，悲壮豪迈-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/354.英雄落寞，悲壮豪迈-唯美纯音乐.m4a",},
{title:"355.清新自然，雪的梦幻 - 唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/355.清新自然，雪的梦幻 - 唯美纯音乐.m4a",},
{title:"356.失去你，我会迷失-唯美纯音乐.m4a",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/唯美纯音乐/356.失去你，我会迷失-唯美纯音乐.m4a",}

];

	// Load playlist
	for (var i = 0; i < playlist.length; i++) {
		var item = playlist[i];
		$('#playlist').append('<li>' + item.artist + ' - ' + item.title + '</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		audio, timeout, isPlaying, playCounts;

	var play = function () {
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	};

	var pause = function () {
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	};

	// Update progress
	var setProgress = function (value) {
		var currentSec = parseInt(value % 60) < 10 ? '0' + parseInt(value % 60) : parseInt(value % 60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value / 60) + ':' + currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	};

	var updateProgress = function () {
		setProgress(audio.currentTime);
	};

	// Progress slider
	$('.progress .slider').slider({
		step: 0.1,
		slide: function (event, ui) {
			$(this).addClass('enable');
			setProgress(audio.duration * ui.value / 100);
			clearInterval(timeout);
		},
		stop: function (event, ui) {
			audio.currentTime = audio.duration * ui.value / 100;
			$(this).removeClass('enable');
			timeout = setInterval(updateProgress, 500);
		}
	});

	// Volume slider
	var setVolume = function (value) {
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	};

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({
		max: 1,
		min: 0,
		step: 0.01,
		value: volume,
		slide: function (event, ui) {
			setVolume(ui.value);
			$(this).addClass('enable');
			$('.mute').removeClass('enable');
		},
		stop: function () {
			$(this).removeClass('enable');
		}
	}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function () {
		if ($(this).hasClass('enable')) {
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function (i) {
		if (i < 0) {
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length) {
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	};

	// Shuffle
	var shufflePlay = function () {
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function () {
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1) {
			play();
		} else {
			if (shuffle === 'true') {
				shufflePlay();
			} else {
				if (repeat == 2) {
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function () {
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) + '%');
	}

	// Fire when track loaded completely
	var afterLoad = function () {
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function (i) {
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="' + item.mp3 + '"><source src="' + item.ogg + '">').appendTo('#player');

		$('.cover').html('<img src="' + item.cover + '" alt="' + item.album + '">');
		$('.tag').html('<strong>' + item.title + '</strong><span class="artist">' + item.artist + '</span><span class="album">' + item.album + '</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function () {
		if ($(this).hasClass('playing')) {
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function () {
		if (shuffle === 'true') {
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function () {
		if (shuffle === 'true') {
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function (i) {
		var _i = i;
		$(this).on('click', function () {
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1) {
		$('.repeat').addClass('once');
	} else if (repeat == 2) {
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function () {
		if ($(this).hasClass('once')) {
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')) {
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function () {
		if ($(this).hasClass('enable')) {
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
		$(".download img").hover(function(){
		$(this).attr({ "src" : "img/link2.png" });
	}, function(){
		$(this).attr({ "src" : "img/link1.png" });
	});
});