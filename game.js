var canvas = null;
var context = null;
var framerate = 30;
var frame = 0;

var assets = ['http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk00.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk01.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk02.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk03.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk04.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk05.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk06.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk07.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk08.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk09.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk10.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk11.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk12.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk13.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk14.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk15.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk16.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk17.png',
			  'http://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk18.png'
			 ];
var frames = [];

var onImageLoad = function(){
	console.log("Robot loaded!");
};

var setup = function() {
	body = document.getElementById('body');
	canvas = document.createElement('canvas');

	context = canvas.getContext('2d');
	
	canvas.width = 100;
	canvas.height = 100;

	body.appendChild(canvas);

	// Load each image URL from the assets array into the frames array 
	// in the correct order.
	// Afterwards, call setInterval to run at a framerate of 30 frames 
	// per second, calling the animate function each time.
	
	for( var i = 0; i < assets.length; i++ ) {
		img = new Image();
		img.onload = function() { onImageLoad(); };
		img.src = assets[i];
		frames.push(img);
	}

	setInterval(animate, 1000 / framerate);
};

var animate = function(){
	// Draw each frame in order, looping back around to the 
	// beginning of the animation once you reach the end.
    // Draw each frame at a position of (0,0) on the canvas.
  
    // Try your code with this call to clearRect commented out
    // and uncommented to see what happens!
    //
    
    context.clearRect(0,0,canvas.width, canvas.height);
  	
	context.drawImage(frames[frame], 0, 0);
	frame = (frame+1) % frames.length;
	console.log(frame);
};
