var idOf = function(id){return document.getElementById(id)};/*
var map = [//
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1],
	[1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1],
	[1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1],
	[1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1],
	[1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1],
	[1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,2,2,3,3,4,4,5,5,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,2,2,3,3,4,4,5,5,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,6,6,7,7,8,8,9,9,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,6,6,7,7,8,8,9,9,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]
];*/
var map = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1],
	[1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1],
	[1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1],
	[1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1],
	[1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1],
	[1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]
];//*/
var pauseMe = 0;
var player = {
	x: 5.5,					// current x position from left of map array
	y: 7,					// current y position from top of the map array
	dir: 0,					// the direction that the player is turning, either -1 for left or 1 for right.
	rot: .5*Math.PI,		// the current angle of rotation
	moveSpeed: 0.02,		// how far (in map units) does the player move each step/update
	step: 1,				// how long the player been moving
	distance: 0,			// how far has the screen been moved
	chunks: 4,				// how many chunks (8, 12 or 16 lines per chunk)
	level: 1,				// determines what type of walls will be generated for each chunk
	levelTime: 0,			// determines when the level increases
	bg: 0					// after the first 9 levels have been completed, change player.bg into an interval that randomizes the background.
}
var settings = {
	brightness: 255,		// how bright light objects will be against white backgrounds
	darkness: 0,			// how bright dark objects will be against black backgrounds
	aspectRatio: 0,			// how wide the map will be + 31
	difficulty: 18,			// 2 is hardest and 18 is easiest
	state: 'paused',		// to be changed into an interval when the game is running
	cycleDelay: 33,			// time in milliseconds between frames (about 30fps)
	r: 'rgb(255, 60, 60)',	// the color of the red walls
	g: 'rgb(80, 235, 60)',	// the color of the green walls
	b: 'rgb(60, 60, 255)',	// the color of the blue walls
	k: 'rgb(180, 180, 180)',// the color of the grey walls
	rgbCanToggle: false		// whether or not settings.r/g/b/k can be changed
}
var miniMapScale = 16;
var lastGameCycleTime = 0;
function wHeight(){return $(window).height()}
function init(){
	$('body').css('background-color','rgb(255,255,255)');
	if(settings.difficulty > 18){settings.difficulty = 18}
	else if(settings.difficulty < 2){settings.difficulty = 2}
	settings.chunkDifficulty = Math.round((18 - settings.difficulty)/8)*4;
	player.chunks = 24/(settings.chunkDifficulty + 8);
	$('#removables').css('display','none');
	$('#escher').css('display','none');
	if(settings.aspectRatio > 0){
		for(var y = 0 ; y < map.length - 4 ; ++y){
			for(var i = 0 ; i < settings.aspectRatio/2 ; ++i){
				map[y].unshift(1);
				map[y].push(1);
			}
		}
		for(var i = 0 ; i < settings.aspectRatio/2	; ++i){map[map.length - 4].push(0,1);}
		for(var i = 0 ; i < settings.aspectRatio	; ++i){map[map.length - 3].push(0);}
		for(var i = 0 ; i < settings.aspectRatio	; ++i){map[map.length - 2].push(0);}
		for(var i = 0 ; i < settings.aspectRatio/2	; ++i){map[map.length - 1].push(0,1);}
		player.x = 5.5 + settings.aspectRatio/2;
	}
	map[map.length-4][Math.floor(map[map.length - 4].length - 2.5)/2] = 0;
	map[map.length-4][Math.floor(map[map.length - 4].length - .5)/2] = 0;
	map[map.length-4][Math.ceil(map[map.length - 4].length + .5)/2] = 0;
	map[map.length-3].push(1);
	map[map.length-2].push(1);
	mapWidth	= map[0].length;
	mapHeight	= map.length;
	bindKeys();
	$(window).off();
	checkWindowSize();
	drawMiniMap();
	prerender();
	settings.state = setInterval(gameCycle, settings.cycleDelay);
	newForest();
	$(window).on('resize',checkWindowSize);
}
function checkWindowSize(){
	miniMapScale			= wHeight()/mapHeight;
	var miniMap				= idOf("minimap");			// the actual map
	var miniMapCtr			= idOf("minimapcontainer");	// the container div element
	var miniMapObjects		= idOf("minimapobjects");	// the canvas used for drawing the objects on the map (player character, etc)
	//set the left position of canvases
	$('#minimap').css('left',(wWide()/2 - miniMapScale*mapWidth/2));
	$('#minimapobjects').css('left',(wWide()/2 - miniMapScale*mapWidth/2));
	miniMap.width			= mapWidth*miniMapScale;	// resize the internal canvas dimensions 
	miniMap.height			= mapHeight*miniMapScale;	// of both the map canvas and the object canvas
	miniMapObjects.width	= miniMap.width;
	miniMapObjects.height	= miniMap.height;
	var w = (mapWidth*miniMapScale) + "px";				// minimap CSS dimensions
	var h = (mapHeight*miniMapScale) + "px";
	miniMap.style.width		= miniMapObjects.style.width = miniMapCtr.style.width = w;
	miniMap.style.height	= miniMapObjects.style.height = miniMapCtr.style.height = h;
	
	//resize precanvases
	prerender();
}
function wWide(){return $(window).width()}
function bindKeys(){// bind keyboard events to game functions (movement, etc)
	document.onkeydown = function(e) {
		e = e || window.event;
		switch (e.keyCode) { // which key was pressed?
			case 37: // left (arrow)
				player.dir = 3;
				player.rot = Math.PI
				break;
			case 38: // up (arrow)
				player.dir = 2;
				player.rot = 1.5 * Math.PI
				break;
			case 39: // right (arrow)
				player.dir = 1;
				player.rot = 0
				break;
			case 40: // down (arrow)
				player.dir = 0;
				player.rot = .5 * Math.PI
				break;
			case 87: // up		(W)
				player.dir = 2;
				player.rot = 1.5 * Math.PI
				break;
			case 65: // left	(A)
				player.dir = 3;
				player.rot = Math.PI
				break;
			case 83: // down	(S)
				player.dir = 0;
				player.rot = .5 * Math.PI
				break;
			case 68: // right	(D)
				player.dir = 1;
				player.rot = 0
				break;
		}
	}
}
function gameCycle(){
/*	FPS
	var now = new Date().getTime();
	var timeDelta = now - lastGameCycleTime;// time since last game logic
	if(timeDelta < now){console.log(Math.round(100000/timeDelta)/100);}*/
	move();
	updateMiniMap();
	drawMiniMap();
//	lastGameCycleTime = now;//FPS
//	setTimeout(gameCycle,gameCycleDelay);
}
function incrLevel(){
	if(player.levelTime >= 7){
		if(player.level < 9){
			++player.level;
		}
		else{
			player.level = 1;
			if(player.bg == 0){
				player.bg = setInterval(disorient,15000);
			}
			else{
				clearInterval(player.bg);
				disorient = function() {
					var dis = [
						function(){
							$('body').css('background-color', rndC);
							settings.rgbCanToggle = true;
							setTimeout('settings.rgbCanToggle = false;',20000);
						},
						function(){
							$('body').css('background-image', 'url("assets/images/stripbg.png")')
						},
						function(){
							$('body').css({
									'background-image': 'url("assets/images/animbg1.gif")',
									'background-position': Math.floor(Math.random()*80)
							})
						},
						function(){
							$('body').css({
								'background-color': 'rgb('+settings.darkness+','+settings.darkness+','+settings.darkness+')',
								'background-image':'none'
							});
						},
						function(){
							$('body').css('background-color', 'rgb(255,255,255)');
							$('#minimap').css('transform', 'none');
							$('#minimapobjects').css('transform', 'none');
						},
						function() {
							var degs = [
								Math.ceil(Math.random()*140 - 70),
								Math.ceil(Math.random()*140 - 70)
							];
							var wdth = map[0].length;
							var r = Math.sqrt((wdth/2)*(wdth/2) + 144);
							var matematicas = 12/(Math.sin(Math.abs(degs[1])*Math.PI/180)*(Math.sin(Math.atan(24/wdth) + Math.abs(degs[0])*Math.PI/180)*r - 12) + 12);
							$('#minimap').css('transform',			'rotateX(' + degs[0] + 'deg) rotateY(' + degs[1] + 'deg) scale(' + matematicas + ')');
							$('#minimapobjects').css('transform',	'rotateX(' + degs[0] + 'deg) rotateY(' + degs[1] + 'deg) scale(' + matematicas + ')');
						},
						function() {
							var degs = [
								Math.ceil(Math.random()*140 - 70),
								Math.ceil(Math.random()*140 - 70)
							];
							var wdth = map[0].length;
							var r = Math.sqrt((wdth/2)*(wdth/2) + 144);
							var matematicas = 12/(Math.sin(Math.atan(24/wdth) + Math.abs(degs[0])*Math.PI/180)*r);
							$('#minimap').css('transform',			'rotateZ(' + degs[0] + 'deg) rotateY(' + degs[1] + 'deg) scale(' + matematicas + ')');
							$('#minimapobjects').css('transform',	'rotateZ(' + degs[0] + 'deg) rotateY(' + degs[1] + 'deg) scale(' + matematicas + ')');
						},
						function() {
							var degs = [
								Math.ceil(Math.random()*140 - 70),
								Math.ceil(Math.random()*140 - 70)
							];
							var wdth = map[0].length;
							var r = Math.sqrt((wdth/2)*(wdth/2) + 144);
							var matematicas = 12/(Math.sin(Math.atan(24/wdth) + Math.abs(degs[1])*Math.PI/180)*r);
							$('#minimap').css('transform',			'rotateX(' + degs[0] + 'deg) rotateZ(' + degs[1] + 'deg) scale(' + matematicas + ')');
							$('#minimapobjects').css('transform',	'rotateX(' + degs[0] + 'deg) rotateZ(' + degs[1] + 'deg) scale(' + matematicas + ')');
						},
						function() {
							var degs = [
								Math.ceil(Math.random()*140 - 70),
								Math.ceil(Math.random()*140 - 70),
								Math.ceil(Math.random()*140 - 70)
							];
							var wdth = map[0].length;
							var r = Math.sqrt((wdth/2)*(wdth/2) + 144);
							var matematicas = 12/(Math.sin(Math.atan(24/wdth) + Math.abs(degs[2])*Math.PI/180)*r);
							$('#minimap').css('transform',			'rotateX(' + degs[0] + 'deg) rotateY(' + degs[1] + 'deg) rotateZ(' + degs[2] + 'deg) scale(' + matematicas + ')');
							$('#minimapobjects').css('transform',	'rotateX(' + degs[0] + 'deg) rotateY(' + degs[1] + 'deg) rotateZ(' + degs[2] + 'deg) scale(' + matematicas + ')');
						},
						function() {
							var degs = Math.ceil(Math.random()*40 + 12)*(Math.round(Math.random())*2 - 1);
							var timesTwisted = 0;
							var wdth = map[0].length;
							var r = Math.sqrt((wdth/2)*(wdth/2) + 144);
							var matematicas = 12/(Math.sin(Math.atan(24/wdth) + Math.abs(degs)*Math.PI/180)*r);
							
							function rotMaps(toDegs){
								$('#minimap').css('transform',			'rotateZ(' + toDegs + 'deg) scale(' + matematicas + ')');
								$('#minimapobjects').css('transform',	'rotateZ(' + toDegs + 'deg) scale(' + matematicas + ')');
								if(timesTwisted < 3){
									++timesTwisted
									setTimeout(function(){rotMaps(-toDegs)}, 3050);
								}
							}
							rotMaps(degs, matematicas);
						}
					];
					var disChosen = Math.floor(Math.random()*dis.length);
					dis[disChosen]();
				}
				
				player.bg = setInterval(disorient, 12000);
			}
		}
		player.levelTime = 0;
	}
	else{
		player.levelTime += (settings.chunkDifficulty + 8)/8;
	}


/*/
player.bg = '  ^.^ nyaa~  ';
player.level = 9;
player.levelTime = 7;
/*/
}
var  disorient = function(){
	var dis = [
		function(){
			$('body').css('background-color', rndC);
			settings.rgbCanToggle = true;
			setTimeout('settings.rgbCanToggle = false;',20000);
		},
		function(){
			$('body').css('background-image', 'url("assets/images/stripbg.png")')
		},
		function(){
			$('body').css({
					'background-image': 'url("assets/images/animbg1.gif")',
					'background-position': Math.floor(Math.random()*80)
			})
		},
		function(){
			$('body').css('background-color', 'rgb('+settings.darkness+','+settings.darkness+','+settings.darkness+')').css('background-image','none')
		},
		function(){
			$('body').css('background-color', 'rgb(255,255,255)')
		}
	];
	var disChosen = Math.floor(Math.random()*dis.length);
	dis[disChosen]();
};
function move(){
	var newX = player.x + Math.cos(player.rot) * player.moveSpeed;
	var newY = player.y + Math.sin(player.rot) * player.moveSpeed;
	if(isBlocking(newX, newY)){// are we allowed to move to the new position?
		player.moveSpeed = .02;
		player.step = 1;
		if(player.rot == 0){//if right
			player.x = Math.floor(newX) - .01
		}
		else if (player.rot == 1.5*Math.PI){//if up
			player.y = Math.ceil(newY) + .01
		}
		else if (player.rot == Math.PI){//if left
			player.x = Math.ceil(newX) + .01
		}
		else{//if down
			player.y = Math.floor(newY) - .01
		}
	}
	else{
		player.x = newX;// set new position
		player.y = newY;
		if (player.dir == 0 && player.y > 18 + player.distance) {
			player.distance = player.y - 18
			moveDown();
		}
		++player.step;
		player.moveSpeed = player.step/(3*player.step + 47);
	}
}
function moveDown(){
	if(player.chunks*(8 + settings.chunkDifficulty) <= Math.ceil(player.y) + 6){
		++player.chunks;
		incrLevel();
		newForest();
	}
}
function newForest(){
	function checkNetwork(searchValY,searchValX) {//checks the index of a group of (what should be if you don't screw with this code) contiguous edges
		var tome = '';
		for(var i = 0 ; i < forestNetwork.length ; ++i){
			$.each(forestNetwork[i],function(){
				if(this.ycoord == searchValY && this.xcoord == searchValX){
					tome = i;
					i=forestNetwork.length;
				}
			});
		}
		return tome;
	}
	function checkEdges(searchValY,searchValX) {//place on a vertex (tree) to detect if the tree has edges
		var tome = '';
		for(var i = 0 ; i < forestNetwork.length ; ++i){
			$.each(forestNetwork[i],function(){
				if(this.ycoord == searchValY && this.xcoord == searchValX){
					tome = true;
					i=forestNetwork.length;
				}
			});
		}
		return tome;
	}
	function ev(value){//returns 'x' if value is even or 0, returns 'y' if value is odd
		if(value%2 == 0){
			return 'x';
		}
		else{
			return 'y';
		}
	}
	function EJ(){return Math.ceil(Math.random()*settings.difficulty)}//edge weight (no wall)
	var TREE = 0;//tree (vertex)
	var WALL = 'wall';//space (wall)
	var forestNetwork = new Array();
	var forest = [//									   1												 2
//		 0	  1	   2	3    4    5    6    7    8    9    0    1    2    3    4    5    6    7    8    9    0    1    2    3    4    5    6    7    8
/*0*/	[TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE],
/*1*/	[EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ()],
/*2*/	[TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE],
/*3*/	[EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ()],
/*4*/	[TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE],
/*5*/	[EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ()],
/*6*/	[TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE],
/*7*/	[EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ()],
/*8*/	[TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE]
	];
	for(var i = 0 ; i < settings.chunkDifficulty/2 ; ++i){//push for extra chunk size
		forest.push([EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ(),WALL,EJ()]);
		forest.push([TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE,EJ(),TREE]);
	}
	if(settings.aspectRatio > 0){//push for extra width
		for(var y = 0 ; y < forest.length ; ++y){
			if(ev(y) == 'x'){
				for(var i = 0 ; i < settings.aspectRatio/2 ; ++i){
					forest[y].push(EJ(),TREE);
				}
			}
			else{
				for(var i = 0 ; i < settings.aspectRatio/2 ; ++i){
					forest[y].push(WALL,EJ());
				}
			}
		}
	}
	for(var z = 1 ; z <= settings.difficulty ; ++z){//weight of line
		for(var y = 0 ; y < forest.length ; ++y){//y position of line
			for(var x = 0 ; x < forest[y].length ; ++x){//x position of line
				if(forest[y][x] == z){//if the value of this position on the graph is the lowest weight
					if(ev(y) == 'x'){//if the edge is horizontal
						if (checkEdges(y,x-1) || checkEdges(y,x+1)) {//if either adjacent trees have edges
							if (checkEdges(y,x-1) && checkEdges(y,x+1)) {//if trees to the left and right have edges
								if (checkNetwork(y,x-1) > checkNetwork(y,x+1)) {//if trees to the left and right are in different groups
									var tempGroup = forestNetwork[checkNetwork(y,x-1)];//create var for second group
									forestNetwork.splice(checkNetwork(y,x-1),1);//splice second group out of network
									forestNetwork[checkNetwork(y,x+1)] = forestNetwork[checkNetwork(y,x+1)].concat(tempGroup);//concat var to first group in network
									forest[y][x] = 0;
								}
								else if (checkNetwork(y,x-1) < checkNetwork(y,x+1)) {//if trees to the left and right are in different groups
									var tempGroup = forestNetwork[checkNetwork(y,x+1)];//create var for second group
									forestNetwork.splice(checkNetwork(y,x+1),1);//splice second group out of network
									forestNetwork[checkNetwork(y,x-1)] = forestNetwork[checkNetwork(y,x-1)].concat(tempGroup);//concat var to first group in network
									forest[y][x] = 0;
								}
							}
							else if (checkEdges(y,x-1)) {//if tree to the left has edges
								forestNetwork[checkNetwork(y,x-1)].push({ycoord: y,xcoord: x+1});
								forest[y][x] = 0;
							}
							else {//if tree to the right has edges
								forestNetwork[checkNetwork(y,x+1)].push({ycoord: y,xcoord: x-1});
								forest[y][x] = 0;
							}
						}
						else {//if neither adjacent trees have edges
							forestNetwork.push([{ycoord: y,xcoord: x-1},{ycoord: y,xcoord: x+1}]);
							forest[y][x] = 0;
						}
					}
					else {//if the edge is vertical
						if (checkEdges(y-1,x) || checkEdges(y+1,x)) {
							if (checkEdges(y-1,x) && checkEdges(y+1,x)) {
								if (checkNetwork(y-1,x) > checkNetwork(y+1,x)) {
									var tempGroup = forestNetwork[checkNetwork(y-1,x)];
									forestNetwork.splice(checkNetwork(y-1,x),1);
									forestNetwork[checkNetwork(y+1,x)] = forestNetwork[checkNetwork(y+1,x)].concat(tempGroup);
									forest[y][x] = 0;
								}
								else if (checkNetwork(y-1,x) < checkNetwork(y+1,x)) {
									var tempGroup = forestNetwork[checkNetwork(y+1,x)];
									forestNetwork.splice(checkNetwork(y+1,x),1);
									forestNetwork[checkNetwork(y-1,x)] = forestNetwork[checkNetwork(y-1,x)].concat(tempGroup);
									forest[y][x] = 0;
								}
							}
							else if (checkEdges(y-1,x)) {//if tree to the left has edges
								forestNetwork[checkNetwork(y-1,x)].push({ycoord: y+1,xcoord: x});
								forest[y][x] = 0;
							}
							else {//if tree to the right has edges
								forestNetwork[checkNetwork(y+1,x)].push({ycoord: y-1,xcoord: x});
								forest[y][x] = 0;
							}
						}
						else {//if neither adjacent trees have edges
							forestNetwork.push([{ycoord: y-1,xcoord: x},{ycoord: y+1,xcoord: x}]);
							forest[y][x] = 0;
						}
					}
				}
			}
		}
	}
	forest.splice(0,1);
	for(var i = 0 ; i < forest.length ; ++i){
		for(var a = 0 ; a < forest[i].length ; ++a){
			if(forest[i][a] != 0){
				forest[i][a] = player.level;
			}
		}
		forest[i].unshift(player.level);
		forest[i].push(player.level);
		map.push(forest[i]);
	}
}
function isBlocking(x,y){
	// return true if the map block is not 0, ie. if there is a blocking wall. 
	if (map[Math.floor(y)] == undefined || map[Math.floor(y)][Math.floor(x)] > 0 || Math.floor(y) <= player.distance) {
		return true
	}
}
function updateMiniMap(){
	var miniMap = idOf("minimap");
	var miniMapObjects = idOf("minimapobjects");
	var objectCtx = miniMapObjects.getContext("2d");
	objectCtx.clearRect(0,0,miniMap.width,miniMap.height);
	objectCtx.fillRect(// draw a dot at the current player position
		player.x*miniMapScale - 3, 
		(player.y-player.distance)*miniMapScale - 3,
		6, 6
	);/*//nose
	objectCtx.beginPath();
	objectCtx.moveTo(player.x * miniMapScale + 1, player.y * miniMapScale + 1);
	objectCtx.lineTo(
		(player.x + Math.cos(player.rot)*.4) * miniMapScale,
		(player.y + Math.sin(player.rot)*.4) * miniMapScale
	);
	objectCtx.closePath();
	objectCtx.stroke();
*/}
function drawMiniMap(){
	if(settings.rgbCanToggle){rgbMe()}
	var miniMap = idOf("minimap");
	var ctx = miniMap.getContext("2d");
	ctx.clearRect(0,0,miniMap.width,miniMap.height);
	var xth = 0;
	var yth = 0;
	// loop through all blocks on the map
	for (var y = Math.floor(player.distance) ; y < map.length ; y++){
		xth = 0;
		for (var x = 0 ; x < mapWidth ; x++) {
			var wall = map[y][x];
			
			if (wall == 1) {// grey wall
				ctx.fillStyle	= settings.k;
				ctx.fillRect(
					Math.floor(x*miniMapScale),
					Math.floor((y - player.distance) * miniMapScale),
					Math.ceil(miniMapScale + .7),Math.ceil(miniMapScale + .7)
				);
			}
			else if (wall == 2) { // red wall
				ctx.fillStyle	= settings.r;
				ctx.fillRect(
					Math.floor(x * miniMapScale),
					Math.floor((y - player.distance) * miniMapScale),
					Math.ceil(miniMapScale + .7),Math.ceil(miniMapScale + .7)
				);
			}
			else if (wall == 3) { // green wall
				ctx.fillStyle	= settings.g;
//				ctx.fillStyle	= rgbMe(80,235,60);
				ctx.fillRect(
					Math.floor(x * miniMapScale),
					Math.floor((y - player.distance) * miniMapScale),
					Math.ceil(miniMapScale + .7),Math.ceil(miniMapScale + .7)
				);
			}
			else if (wall == 4) { // blue wall
				ctx.fillStyle	= settings.b;
//				ctx.fillStyle	= rgbMe(60,60,255);
				ctx.fillRect(
					Math.floor(x * miniMapScale),
					Math.floor((y - player.distance) * miniMapScale),
					Math.ceil(miniMapScale + .7),Math.ceil(miniMapScale + .7)
				);
			}
			else if (wall == 6) { // hollow wall
				ctx.strokeStyle	= 'rgb(20,20,20)';
				ctx.lineWidth	= Math.ceil(miniMapScale*.1);
				ctx.strokeRect(
					Math.floor(x*miniMapScale + miniMapScale*.05),
					Math.ceil((y - player.distance)*miniMapScale + miniMapScale*.05),
					Math.ceil(miniMapScale + .7 - 2 - miniMapScale*.05),Math.ceil(miniMapScale + .7 - 2 - miniMapScale*.05)
				);
			}
			else if (wall == 7) {// rainbow wall
				ctx.fillStyle	= rndC();
				ctx.fillRect(
					Math.floor(x * miniMapScale),
					Math.floor((y - player.distance) * miniMapScale),
					Math.ceil(miniMapScale),Math.ceil(miniMapScale)
				);
			}
			else if (wall == 9) { // flashy wall
				ctx.fillStyle	= 'rgb(' + rndF() + ')';
				ctx.fillRect(
					Math.ceil(x * miniMapScale),
					Math.ceil((y - player.distance) * miniMapScale),
					Math.ceil(miniMapScale + .7),Math.ceil(miniMapScale + .7)
				);
			}
			else if (wall == 8) {//illusory wall
				ctx.drawImage(idOf('illCanvas' + (yth + xth)).getContext('2d').canvas,
					Math.floor(x*miniMapScale),Math.floor((y - player.distance)*miniMapScale)
				);
			}
			else if (wall == 5) {// brick wall
				ctx.drawImage(idOf('brickCanvas').getContext('2d').canvas,
					Math.floor(x*miniMapScale),Math.floor((y - player.distance)*miniMapScale)
				);
			}
			else if (wall > 0 ) {// fail safe for any wall that isn't 1-9
				ctx.fillStyle	= 'rgb(180,180,180)';
				ctx.fillRect(
					x * miniMapScale,
					y * miniMapScale,
					miniMapScale + .7,miniMapScale + .7
				);
			}
			++xth;
			if(xth == 8){xth = 0}
		}
		++yth;
		if(yth == 8){yth = 0}
	}
	updateMiniMap();
}
function rndC(){
	return 'rgb(' + (Math.round(Math.random()*(255 - settings.darkness)/5)*5 + settings.darkness) + ',' + (Math.round(Math.random()*(255 - settings.darkness)/5)*5 + settings.darkness) + ',' + (Math.round(Math.random()*(255 - settings.darkness)/5)*5 + settings.darkness) + ')';
}
function rndF(override){
	if(Math.round(Math.random()*10) == 0){
		return '0,0,0';
	}
	else {
		return (settings.brightness - 5) + ',' + (settings.brightness - 5) + ',' + (settings.brightness - 5);
	}
}
function reAspect(){
	var block = wHeight()/map.length;
	function wWidth(){
		return Math.floor($(window).width()/block)
	}
	if(47 >= wWidth() && wWidth() > 33){
		settings.aspectRatio = Math.floor((wWidth() - 31)/2 - .5)*2;
	}
	else if(wWidth() > 47){
		settings.aspectRatio = 16;
	}
	else{
		settings.aspectRatio = 0;
	}
}
function demoBrights(){
	var l = $('#brightnessSlider').slider('value');
	var d = l - 220;
	function greyscale(weight){
		return 'rgb('+weight+','+weight+','+weight+')';
	}
	if(d < 0){d = 0};
	$('#demoDark').css('background-color',greyscale(d));
	$('#demoLight').css('background-color',greyscale(l));
	settings.brightness = l;
	settings.darkness = d;
	localStorage.setItem('setup',JSON.stringify({
			'brightness': l,
			'difficulty': $('#difficultySlider').slider('value')
	}));
}
function redoDifficulty(){
	var tempVal = $('#difficultySlider').slider('value');
	settings.difficulty = 18 - tempVal;
	localStorage.setItem('setup',JSON.stringify({
			'brightness': $('#brightnessSlider').slider('value'),
			'difficulty': tempVal
	}));
	if(settings.difficulty <= 6){
		$('.difficultyMSG').text('Remember to not get frustrated at this game. Remember that it\'s just a game').css('font-weight','800');
	}
	else if(settings.difficulty == 18){
		$('.difficultyMSG').text('Click and drag the difficulty setting to a position where you feel most comfortable playing at, pansy.').css('font-weight', '400');
	}
	else{
		$('.difficultyMSG').text('Click and drag the difficulty setting to a position where you feel most comfortable playing at.').css('font-weight', '400');
	}
}
function rgbMe(){
	console.log('ding');
	var bodyRGB	= $('body').css('background-color').toString();
	var rgbList	= {
		r:[255,60,60],
		g:[80,255,60],
		b:[60,60,255],
		k:[180,180,180]
	};
	var cList	= [
		parseInt(bodyRGB.substring(bodyRGB.indexOf('(') + 1, bodyRGB.indexOf(','))),
		parseInt(bodyRGB.substring(bodyRGB.indexOf(', ') + 2, bodyRGB.lastIndexOf(','))),
		parseInt(bodyRGB.substring(bodyRGB.lastIndexOf(', ') + 2, bodyRGB.indexOf(')')))
	];
	$.each(cList,function(index){
			rgbList.r[index] = 255 - Math.abs(rgbList.r[index] + cList[index] - 255);
			rgbList.g[index] = 255 - Math.abs(rgbList.g[index] + cList[index] - 255);
			rgbList.b[index] = 255 - Math.abs(rgbList.b[index] + cList[index] - 255);
			rgbList.k[index] = 255 - Math.abs(rgbList.k[index] + cList[index] - 255);
	});
	settings.r = 'rgb(' + rgbList.r[0] + ', ' + rgbList.r[1] + ', ' + rgbList.r[2] + ')';
	settings.g = 'rgb(' + rgbList.g[0] + ', ' + rgbList.g[1] + ', ' + rgbList.g[2] + ')';
	settings.b = 'rgb(' + rgbList.b[0] + ', ' + rgbList.b[1] + ', ' + rgbList.b[2] + ')';
	settings.k = 'rgb(' + rgbList.k[0] + ', ' + rgbList.k[1] + ', ' + rgbList.k[2] + ')';
}
function animateBG(){
	$('#escher').css({
		'transition': 'none',
		'-o-transition': 'none',
		'-ms-transition': 'none',
		'-moz-transition': 'none',
		'-webkit-transition': 'none',
	});
	if(settings.state == 'paused'){
		$('#escher').css('left','0px').animate({left: -7809},180000,'linear',animateBG);
	}
}
function prerender(){
	//set width/height of precanvases
	for (var i = 0 ; i < 15 ; ++i){
		idOf('illCanvas' + i).width = Math.ceil(miniMapScale);
		idOf('illCanvas' + i).height = Math.ceil(miniMapScale);
	}
	idOf('brickCanvas').width = Math.ceil(miniMapScale);
	idOf('brickCanvas').height = Math.ceil(miniMapScale);
	
	//generate illusory
		var ctx = [
			idOf('illCanvas0').getContext('2d'),
			idOf('illCanvas1').getContext('2d'),
			idOf('illCanvas2').getContext('2d'),
			idOf('illCanvas3').getContext('2d'),
			idOf('illCanvas4').getContext('2d'),
			idOf('illCanvas5').getContext('2d'),
			idOf('illCanvas6').getContext('2d'),
			idOf('illCanvas7').getContext('2d'),
			idOf('illCanvas8').getContext('2d'),
			idOf('illCanvas9').getContext('2d'),
			idOf('illCanvas10').getContext('2d'),
			idOf('illCanvas11').getContext('2d'),
			idOf('illCanvas12').getContext('2d'),
			idOf('illCanvas13').getContext('2d'),
			idOf('illCanvas14').getContext('2d')
		];
		for (var i = 0 ; i < ctx.length ; ++i){
			var startAngle	= (i/4)*Math.PI;
			var endAngle	= (i/4 + 1)*Math.PI;
			
			ctx[i].fillStyle	= 'rgb(0,245,0)';
			ctx[i].fillRect(
				0,
				0,
				Math.ceil(miniMapScale + .7),Math.ceil(miniMapScale + .7)
			);
    	    
			ctx[i].beginPath();
			ctx[i].arc(
				miniMapScale*.5,
				miniMapScale*.5,
				miniMapScale*.4, startAngle, endAngle, false
			);
			ctx[i].strokeStyle	= 'white';
			ctx[i].lineWidth	= miniMapScale*.15;
			ctx[i].closePath();
			ctx[i].stroke();
    	    
			ctx[i].beginPath();
			ctx[i].arc(
				miniMapScale*.5,
				miniMapScale*.5,
				miniMapScale*.4, startAngle, endAngle, true
			);
			ctx[i].strokeStyle	= 'black';
			ctx[i].lineWidth	= miniMapScale*.15;
			ctx[i].closePath();
			ctx[i].stroke();
    	    
			ctx[i].beginPath();
			ctx[i].arc(
				.5*miniMapScale,
				.5*miniMapScale,
				miniMapScale*.35, 0, 2*Math.PI, false
			);
			ctx[i].fillStyle	= 'rgb(80,80,80)';
			ctx[i].closePath();
			ctx[i].fill();
		}
	//generate bricks
		ctx = idOf('brickCanvas').getContext('2d');
		ctx.fillStyle = 'rgb(220,220,220)';
		ctx.fillRect(
			0,
			0,
			Math.ceil(miniMapScale + .7),Math.ceil(miniMapScale + .7)
		);
		ctx.fillStyle = 'rgb(140,40,12)';
		ctx.fillRect(//top brick
			Math.ceil(.1*miniMapScale),
			0,
			Math.ceil(miniMapScale*.9),Math.floor(.42*miniMapScale)
		);
		ctx.fillRect(//bottom left brick
			0,
			Math.floor(.5*miniMapScale),
			Math.ceil(.4*miniMapScale),Math.ceil(.4*miniMapScale)
		);
		ctx.fillRect(//bottom right brick
			Math.ceil(.5*miniMapScale),
			Math.floor(.5*miniMapScale),
			Math.ceil(.5*miniMapScale),Math.ceil(.4*miniMapScale)
		);
}
$(function(){
		var setup = JSON.parse(typeof localStorage['setup'] == "undefined" ? '{"difficulty": 8, "brightness": 248}' : localStorage['setup']);
		$('#difficultySlider').slider({
				max:		16,
				stop:		redoDifficulty,
				value:		setup.difficulty,
				range:		'min',
				slide:		redoDifficulty,
				orientation:'horizontal'
		});
		$('#brightnessSlider').slider({
				min:		200,
				max:		255,
				stop:		demoBrights,
				value:		setup.brightness,
				range:		'min',
				slide:		demoBrights,
				orientation:'horizontal'
		});
		demoBrights();
		redoDifficulty();
		$('#startButton').on('click',init);
		reAspect();
		$(window).on('resize',reAspect);
		$('#escher').css('left','-7809px');
		settings.escherMove = setTimeout(animateBG,293299);
		$('#resetSettingsBtn').on('click',function(){
				localStorage.removeItem('setup');
				$('#difficultySlider').slider('value',8);
				$('#brightnessSlider').slider('value',248);
				redoDifficulty();
				demoBrights();
		});
});