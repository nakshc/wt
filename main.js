function preload() {
	mario_gameover = loadSound("gameover.wav");//gameover
	mario_jump = loadSound("jump.wav");//noseY
	mario_coin = loadSound("coin.wav");//coins
	mario_kick = loadSound("kick.wav");//killing
	mario_die = loadSound("mariodie.wav");//die
	//class 142 step 1
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');

	instializeInSetup(mario);
// class 141 copy from p5 editor change width and height
	video = createCapture(VIDEO);
	video.size(800, 400);
	
	
	video.parent('game_console');
// class 141
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}

function modelLoaded() {
	console.log('Model Loaded!');
}

function gotPoses(results) 
{
	if (results.length > 0) 
	{
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() 
{
	game();
}






