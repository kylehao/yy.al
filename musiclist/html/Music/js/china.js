﻿$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"ALin-给我一个理由忘记",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/ALin-给我一个理由忘记.mp3",},
{title:"ALin-有一种悲伤",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/ALin-有一种悲伤.mp3",},
{title:"阿悄-陪我去流浪",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/阿悄-陪我去流浪.mp3",},
{title:"阿桑-疯了",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/阿桑-疯了.mp3",},
{title:"阿桑-寂寞在唱歌",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/阿桑-寂寞在唱歌.mp3",},
{title:"阿桑-受了点伤",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/阿桑-受了点伤.mp3",},
{title:"岑宁儿-追光者",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/岑宁儿-追光者.mp3",},
{title:"岑雨桥、萧全-触电(爱的魔力转圈圈)",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/岑雨桥、萧全-触电(爱的魔力转圈圈).mp3",},
{title:"陈冠蒲-就让你走",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/陈冠蒲-就让你走.mp3",},
{title:"陈冠蒲-太多",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/陈冠蒲-太多.mp3",},
{title:"陈慧娴-千千阙歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/陈慧娴-千千阙歌.mp3",},
{title:"陈琳-爱就爱了",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/陈琳-爱就爱了.mp3",},
{title:"陈明-等你爱我",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/陈明-等你爱我.mp3",},
{title:"陈明-我要找到你",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/陈明-我要找到你.mp3",},
{title:"陈瑞-白狐",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/陈瑞-白狐.mp3",},
{title:"陈淑桦-情关",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/陈淑桦-情关.mp3",},
{title:"陈伟霆、宝石Gem-野狼Disco",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/陈伟霆、宝石Gem-野狼Disco.mp3",},
{title:"成龙、金喜善-无尽的爱",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/成龙、金喜善-无尽的爱.mp3",},
{title:"大壮-我们不一样",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/大壮-我们不一样.mp3",},
{title:"戴佩妮-爱疯了",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/戴佩妮-爱疯了.mp3",},
{title:"戴佩妮-街角的祝福",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/戴佩妮-街角的祝福.mp3",},
{title:"戴佩妮-你要的爱",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/戴佩妮-你要的爱.mp3",},
{title:"戴佩妮-怎样",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/戴佩妮-怎样.mp3",},
{title:"邓紫棋-倒数",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/邓紫棋-倒数.mp3",},
{title:"邓紫棋-光年之外",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/邓紫棋-光年之外.mp3",},
{title:"邓紫棋-你把我灌醉",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/邓紫棋-你把我灌醉.mp3",},
{title:"邓紫棋-泡沫",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/邓紫棋-泡沫.mp3",},
{title:"迪丽热巴、汪苏泷-偏偏",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/迪丽热巴、汪苏泷-偏偏.mp3",},
{title:"付笛声、任静-知心爱人",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/付笛声、任静-知心爱人.mp3",},
{title:"高胜美、左宏元-渡情",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/高胜美、左宏元-渡情.mp3",},
{title:"光良-第一次",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/光良-第一次.mp3",},
{title:"光良-都是你",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/光良-都是你.mp3",},
{title:"光良-童话",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/光良-童话.mp3",},
{title:"韩雪-飘雪",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/韩雪-飘雪.mp3",},
{title:"韩雪-想起",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/韩雪-想起.mp3",},
{title:"黑豹乐队-无地自容",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/黑豹乐队-无地自容.mp3",},
{title:"胡夏、郁可唯-知否知否",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/胡夏、郁可唯-知否知否.mp3",},
{title:"黄小琥-伴",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/黄小琥-伴.mp3",},
{title:"黄小琥-没那么简单",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/黄小琥-没那么简单.mp3",},
{title:"黄小琥-顺其自然",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/黄小琥-顺其自然.mp3",},
{title:"黄小琥-重来",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/黄小琥-重来.mp3",},
{title:"火箭少女101-卡路里",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/火箭少女101-卡路里.mp3",},
{title:"姜育恒-梅花三弄",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/姜育恒-梅花三弄.mp3",},
{title:"李健-贝加尔湖畔",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/李健-贝加尔湖畔.mp3",},
{title:"李健-当你老了(Live)",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/李健-当你老了(Live).mp3",},
{title:"李健-风吹麦浪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/李健-风吹麦浪.mp3",},
{title:"李玟-想你的365天",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/李玟-想你的365天.mp3",},
{title:"李玟-月光爱人",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/李玟-月光爱人.mp3",},
{title:"李沁-小偷",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/李沁-小偷.mp3",},
{title:"李荣浩-麻雀",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/李荣浩-麻雀.mp3",},
{title:"李荣浩-模特",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/李荣浩-模特.mp3",},
{title:"李荣浩-年少有为",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/李荣浩-年少有为.mp3",},
{title:"李圣杰-痴心绝对",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/李圣杰-痴心绝对.mp3",},
{title:"李圣杰-手放开",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/李圣杰-手放开.mp3",},
{title:"李昕融、樊桐舟、李凯稠-你笑起来真好看",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/李昕融、樊桐舟、李凯稠-你笑起来真好看.mp3",},
{title:"李宇春-梨花香",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/李宇春-梨花香.mp3",},
{title:"李宇春-无价之姐",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/李宇春-无价之姐.mp3",},
{title:"梁静茹-爱你不是两三天",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/梁静茹-爱你不是两三天.mp3",},
{title:"梁静茹-可惜不是你",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/梁静茹-可惜不是你.mp3",},
{title:"梁静茹-勇气",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/梁静茹-勇气.mp3",},
{title:"林俊杰-江南",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/林俊杰-江南.mp3",},
{title:"林俊杰-一千年以后",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/林俊杰-一千年以后.mp3",},
{title:"林俊杰-醉赤壁",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/林俊杰-醉赤壁.mp3",},
{title:"林心如-落花",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/林心如-落花.mp3",},
{title:"林心如-倾听我",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/林心如-倾听我.mp3",},
{title:"林忆莲-不必在乎我是谁",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/林忆莲-不必在乎我是谁.mp3",},
{title:"林忆莲-伤痕",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/林忆莲-伤痕.mp3",},
{title:"林忆莲-至少还有你",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/林忆莲-至少还有你.mp3",},
{title:"林志炫-没离开过",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/林志炫-没离开过.mp3",},
{title:"林志炫-烟花易冷",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/林志炫-烟花易冷.mp3",},
{title:"零点乐队-相信自己",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/零点乐队-相信自己.mp3",},
{title:"刘德华-冰雨",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/刘德华-冰雨.mp3",},
{title:"刘珂矣-芙蓉雨",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/刘珂矣-芙蓉雨.mp3",},
{title:"刘若英-很爱很爱你",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/刘若英-很爱很爱你.mp3",},
{title:"刘若英-后来",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/刘若英-后来.mp3",},
{title:"刘若英-为爱痴狂",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/刘若英-为爱痴狂.mp3",},
{title:"刘若英-一辈子的孤单",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/刘若英-一辈子的孤单.mp3",},
{title:"卢冠廷-一生所爱",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/卢冠廷-一生所爱.mp3",},
{title:"罗文、甄妮-铁血丹心",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/罗文、甄妮-铁血丹心.mp3",},
{title:"满文军-懂你",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/满文军-懂你.mp3",},
{title:"梦然-少年",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/梦然-少年.mp3",},
{title:"莫文蔚-电台情歌",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/莫文蔚-电台情歌.mp3",},
{title:"莫文蔚-盛夏的果实",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/莫文蔚-盛夏的果实.mp3",},
{title:"潘玮柏-不得不爱",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/潘玮柏-不得不爱.mp3",},
{title:"潘玮柏-快乐崇拜",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/潘玮柏-快乐崇拜.mp3",},
{title:"潘越云-天天天蓝",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/潘越云-天天天蓝.mp3",},
{title:"潘越云-我是不是你最疼爱的人",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/潘越云-我是不是你最疼爱的人.mp3",},
{title:"齐秦-不让我的眼泪陪我过夜",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/齐秦-不让我的眼泪陪我过夜.mp3",},
{title:"齐秦-大约在冬季",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/齐秦-大约在冬季.mp3",},
{title:"齐秦-往事随风",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/齐秦-往事随风.mp3",},
{title:"齐秦-无情的雨无情的你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/齐秦-无情的雨无情的你.mp3",},
{title:"齐秦-夜夜夜夜",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/齐秦-夜夜夜夜.mp3",},
{title:"齐豫-橄榄树",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/齐豫-橄榄树.mp3",},
{title:"邱永传-十一年",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/邱永传-十一年.mp3",},
{title:"裘海正-爱我的人和我爱的人",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/裘海正-爱我的人和我爱的人.mp3",},
{title:"裘海正-九千九百九十九滴眼泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/裘海正-九千九百九十九滴眼泪.mp3",},
{title:"任贤齐-小雪",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/任贤齐-小雪.mp3",},
{title:"任贤齐-心太软",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/任贤齐-心太软.mp3",},
{title:"容祖儿-小小",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/容祖儿-小小.mp3",},
{title:"沙宝亮-暗香",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/沙宝亮-暗香.mp3",},
{title:"沙宝亮-斑马斑马",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/沙宝亮-斑马斑马.mp3",},
{title:"苏芮-牵手",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/苏芮-牵手.mp3",},
{title:"孙燕姿-天黑黑",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/孙燕姿-天黑黑.mp3",},
{title:"孙燕姿-我要的幸福",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/孙燕姿-我要的幸福.mp3",},
{title:"孙燕姿-遇见",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/孙燕姿-遇见.mp3",},
{title:"孙燕姿-原来你什么都不要",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/孙燕姿-原来你什么都不要.mp3",},
{title:"孙悦-心情不错",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/孙悦-心情不错.mp3",},
{title:"邰正宵、孙悦-好人好梦",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/邰正宵、孙悦-好人好梦.mp3",},
{title:"邰正宵-九百九十九朵玫瑰",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/邰正宵-九百九十九朵玫瑰.mp3",},
{title:"邰正宵-千纸鹤",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/邰正宵-千纸鹤.mp3",},
{title:"邰正宵-心要让你听见",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/邰正宵-心要让你听见.mp3",},
{title:"邰正宵-一千零一夜",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/邰正宵-一千零一夜.mp3",},
{title:"邰正宵-找一个字代替",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/邰正宵-找一个字代替.mp3",},
{title:"田馥甄-小幸运",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/田馥甄-小幸运.mp3",},
{title:"汪峰-北京北京",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/汪峰-北京北京.mp3",},
{title:"汪峰-存在",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/汪峰-存在.mp3",},
{title:"汪峰-怒放的生命",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/汪峰-怒放的生命.mp3",},
{title:"汪正正-超越梦想",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/汪正正-超越梦想.mp3",},
{title:"汪正正-重头再来",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/汪正正-重头再来.mp3",},
{title:"王菲-传奇",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/王菲-传奇.mp3",},
{title:"王杰-伤心1999",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/王杰-伤心1999.mp3",},
{title:"王杰-忘记你不如忘记自己",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/王杰-忘记你不如忘记自己.mp3",},
{title:"王杰-忘了你忘了我",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/王杰-忘了你忘了我.mp3",},
{title:"王杰-为了爱梦一生",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/王杰-为了爱梦一生.mp3",},
{title:"王杰-一场游戏一场梦",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/王杰-一场游戏一场梦.mp3",},
{title:"王杰-一无所有",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/王杰-一无所有.mp3",},
{title:"王力宏-爱的就是你",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/王力宏-爱的就是你.mp3",},
{title:"王力宏-唯一",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/王力宏-唯一.mp3",},
{title:"王铮亮-时间都去哪儿了",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/王铮亮-时间都去哪儿了.mp3",},
{title:"萧煌奇-偷走",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/萧煌奇-偷走.mp3",},
{title:"萧亚轩-Cappuccino",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/萧亚轩-Cappuccino.mp3",},
{title:"萧亚轩-HoneyHoneyHoney",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/萧亚轩-HoneyHoneyHoney.mp3",},
{title:"萧亚轩-窗外的天气",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/萧亚轩-窗外的天气.mp3",},
{title:"萧亚轩-突然想起你",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/萧亚轩-突然想起你.mp3",},
{title:"萧亚轩-我爱你那么多",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/萧亚轩-我爱你那么多.mp3",},
{title:"萧亚轩-一个人的精彩",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/萧亚轩-一个人的精彩.mp3",},
{title:"萧亚轩-最熟悉的陌生人",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/萧亚轩-最熟悉的陌生人.mp3",},
{title:"小潘潘、小峰峰-学猫叫",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/小潘潘、小峰峰-学猫叫.mp3",},
{title:"辛晓琪-味道",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/辛晓琪-味道.mp3",},
{title:"信乐团-海阔天空",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/信乐团-海阔天空.mp3",},
{title:"信乐团-假如",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/信乐团-假如.mp3",},
{title:"信乐团-离歌",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/信乐团-离歌.mp3",},
{title:"信乐团-死了都要爱",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/信乐团-死了都要爱.mp3",},
{title:"徐佳莹-突然好想你",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/徐佳莹-突然好想你.mp3",},
{title:"许慧欣-七月七日晴",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许慧欣-七月七日晴.mp3",},
{title:"许佳慧-预谋",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许佳慧-预谋.mp3",},
{title:"许美静-荡漾",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许美静-荡漾.mp3",},
{title:"许美静-都是夜归人",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许美静-都是夜归人.mp3",},
{title:"许美静-快乐无罪",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许美静-快乐无罪.mp3",},
{title:"许美静-蔓延",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许美静-蔓延.mp3",},
{title:"许美静-迷乱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许美静-迷乱.mp3",},
{title:"许美静-迫在眉梢",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许美静-迫在眉梢.mp3",},
{title:"许美静-铁窗",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许美静-铁窗.mp3",},
{title:"许美静-阳光总在风雨后",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许美静-阳光总在风雨后.mp3",},
{title:"许美静-遗憾",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许美静-遗憾.mp3",},
{title:"许茹芸-独角戏",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许茹芸-独角戏.mp3",},
{title:"许茹芸-泪海",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许茹芸-泪海.mp3",},
{title:"许茹芸-日光机场",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许茹芸-日光机场.mp3",},
{title:"许茹芸-如果云知道",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许茹芸-如果云知道.mp3",},
{title:"许茹芸-一直是晴天",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许茹芸-一直是晴天.mp3",},
{title:"许韶洋-花香",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许韶洋-花香.mp3",},
{title:"许韶洋-幸福的瞬间",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许韶洋-幸福的瞬间.mp3",},
{title:"许巍-曾经的你",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/许巍-曾经的你.mp3",},
{title:"薛之谦-暧昧",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/薛之谦-暧昧.mp3",},
{title:"薛之谦-丑八怪",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/薛之谦-丑八怪.mp3",},
{title:"薛之谦-你还要我怎样",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/薛之谦-你还要我怎样.mp3",},
{title:"薛之谦-演员",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/薛之谦-演员.mp3",},
{title:"严艺丹-三寸天堂",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/严艺丹-三寸天堂.mp3",},
{title:"杨宗纬 张碧晨-凉凉",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/杨宗纬 张碧晨-凉凉.mp3",},
{title:"叶丽仪-上海滩",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/叶丽仪-上海滩.mp3",},
{title:"叶倩文、林子祥-选择",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/叶倩文、林子祥-选择.mp3",},
{title:"叶倩文-真心真意过一生",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/叶倩文-真心真意过一生.mp3",},
{title:"于文文-体面",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/于文文-体面.mp3",},
{title:"俞静-红豆红",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/俞静-红豆红.mp3",},
{title:"羽·泉-感觉不到你",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/羽·泉-感觉不到你.mp3",},
{title:"羽·泉-冷酷到底",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/羽·泉-冷酷到底.mp3",},
{title:"羽·泉-深呼吸",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/羽·泉-深呼吸.mp3",},
{title:"羽·泉-最美",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/羽·泉-最美.mp3",},
{title:"庾澄庆-情非得已",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/庾澄庆-情非得已.mp3",},
{title:"郁可唯-时间煮雨",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/郁可唯-时间煮雨.mp3",},
{title:"郁可唯-思慕",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/郁可唯-思慕.mp3",},
{title:"袁娅维-说散就散",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/袁娅维-说散就散.mp3",},
{title:"张碧晨-年轮",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张碧晨-年轮.mp3",},
{title:"张惠妹-剪爱",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张惠妹-剪爱.mp3",},
{title:"张惠妹-哭不出来",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张惠妹-哭不出来.mp3",},
{title:"张惠妹-听海",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张惠妹-听海.mp3",},
{title:"张惠妹-站在高岗上",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张惠妹-站在高岗上.mp3",},
{title:"张靓颖-画心",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张靓颖-画心.mp3",},
{title:"张韶涵-呐喊",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张韶涵-呐喊.mp3",},
{title:"张韶涵-欧若拉",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张韶涵-欧若拉.mp3",},
{title:"张韶涵-隐形的翅膀",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张韶涵-隐形的翅膀.mp3",},
{title:"张韶涵-寓言",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张韶涵-寓言.mp3",},
{title:"张卫健-孤独不苦",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张卫健-孤独不苦.mp3",},
{title:"张卫健-虚虚实实",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张卫健-虚虚实实.mp3",},
{title:"张卫健-一辈子一场梦",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张卫健-一辈子一场梦.mp3",},
{title:"张信哲、范文芳-别让情两难",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲、范文芳-别让情两难.mp3",},
{title:"张信哲、刘嘉玲-有一点动心",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲、刘嘉玲-有一点动心.mp3",},
{title:"张信哲-爱不留",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲-爱不留.mp3",},
{title:"张信哲-爱就一个字",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲-爱就一个字.mp3",},
{title:"张信哲-爱如潮水",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲-爱如潮水.mp3",},
{title:"张信哲-别怕我伤心",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲-别怕我伤心.mp3",},
{title:"张信哲-不要对他说",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲-不要对他说.mp3",},
{title:"张信哲-从开始到现在",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲-从开始到现在.mp3",},
{title:"张信哲-过火",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲-过火.mp3",},
{title:"张信哲-宽容",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲-宽容.mp3",},
{title:"张信哲-某某某",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲-某某某.mp3",},
{title:"张信哲-难以抗拒你容颜",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲-难以抗拒你容颜.mp3",},
{title:"张信哲-太想爱你",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲-太想爱你.mp3",},
{title:"张信哲-信仰",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲-信仰.mp3",},
{title:"张信哲-用情",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲-用情.mp3",},
{title:"张信哲-直觉",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张信哲-直觉.mp3",},
{title:"张学友-当我想起你",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张学友-当我想起你.mp3",},
{title:"张学友-分手总要在雨天",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张学友-分手总要在雨天.mp3",},
{title:"张学友-情书",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张学友-情书.mp3",},
{title:"张学友-秋意浓",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张学友-秋意浓.mp3",},
{title:"张学友-吻别",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张学友-吻别.mp3",},
{title:"张学友-心如刀割",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张学友-心如刀割.mp3",},
{title:"张学友-一千个伤心的理由",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张学友-一千个伤心的理由.mp3",},
{title:"张宇-一言难尽",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张宇-一言难尽.mp3",},
{title:"张宇-雨一直下",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张宇-雨一直下.mp3",},
{title:"张雨生-大海",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张雨生-大海.mp3",},
{title:"张云雷-探清水河",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/张云雷-探清水河.mp3",},
{title:"赵方婧-闭月",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/赵方婧-闭月.mp3",},
{title:"赵方婧-尽头",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/赵方婧-尽头.mp3",},
{title:"赵方婧-芒种",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/赵方婧-芒种.mp3",},
{title:"赵方婧-青灯",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/赵方婧-青灯.mp3",},
{title:"赵方婧-瑞鹤仙",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/赵方婧-瑞鹤仙.mp3",},
{title:"赵方婧-小暑",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/赵方婧-小暑.mp3",},
{title:"赵方婧-直觉",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/赵方婧-直觉.mp3",},
{title:"赵雷-成都",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/赵雷-成都.mp3",},
{title:"赵露思-时光话",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/赵露思-时光话.mp3",},
{title:"周笔畅-笔记",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周笔畅-笔记.mp3",},
{title:"周传雄-黄昏",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周传雄-黄昏.mp3",},
{title:"周华健-风雨无阻",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周华健-风雨无阻.mp3",},
{title:"周华健-难念的经",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周华健-难念的经.mp3",},
{title:"周蕙-不想让你知道",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周蕙-不想让你知道.mp3",},
{title:"周蕙-风铃",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周蕙-风铃.mp3",},
{title:"周蕙-好想好好爱你",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周蕙-好想好好爱你.mp3",},
{title:"周蕙-没有你",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周蕙-没有你.mp3",},
{title:"周蕙-我看",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周蕙-我看.mp3",},
{title:"周蕙-相遇太早",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周蕙-相遇太早.mp3",},
{title:"周蕙-约定",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周蕙-约定.mp3",},
{title:"周杰伦-稻香",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周杰伦-稻香.mp3",},
{title:"周杰伦-告白气球",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周杰伦-告白气球.mp3",},
{title:"周杰伦-菊花台",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周杰伦-菊花台.mp3",},
{title:"周杰伦-青花瓷",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周杰伦-青花瓷.mp3",},
{title:"周深-触不可及",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周深-触不可及.mp3",},
{title:"周深-此生惟你",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周深-此生惟你.mp3",},
{title:"周深-大鱼",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周深-大鱼.mp3",},
{title:"周深-欢颜",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周深-欢颜.mp3",},
{title:"周深-年轮(Live)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周深-年轮(Live).mp3",},
{title:"周深-水形物语",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周深-水形物语.mp3",},
{title:"周深-微光海洋",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周深-微光海洋.mp3",},
{title:"周深-雪落下的声音(Live)",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周深-雪落下的声音(Live).mp3",},
{title:"周深-与卿",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周深-与卿.mp3",},
{title:"周深-愿得一心人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周深-愿得一心人.mp3",},
{title:"周迅-飘摇",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/周迅-飘摇.mp3",},
{title:"庄心妍、祁隆-一万个舍不得",artist: "",album:" ",cover:"img/3.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/庄心妍、祁隆-一万个舍不得.mp3",},
{title:"庄心妍-爱囚",artist: "",album:" ",cover:"img/4.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/庄心妍-爱囚.mp3",},
{title:"庄心妍-以后的以后",artist: "",album:" ",cover:"img/5.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/庄心妍-以后的以后.mp3",},
{title:"庄心妍-再见只是陌生人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/庄心妍-再见只是陌生人.mp3",},
{title:"庄心妍-走着走着就散了",artist: "",album:" ",cover:"img/2.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/国语/庄心妍-走着走着就散了.mp3",}


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