//plot empty graph and load default settings

function onLoad() {
	ref = p1;
	document.getElementById('rt').innerHTML = document.getElementById('rate').value; 
	document.getElementById('dr').innerHTML = document.getElementById('dur').value; 
	document.getElementById('cnr').innerHTML = ' 11 left';
	document.getElementById('new_e').setAttribute('disabled', 'disabled'); 
	
	var ld = document.getElementById("legend"); //legend clear
	var lnd = ld.getContext("2d");
	lnd.clearRect(0, 0, 105, 50);
		
	var pl = document.getElementById('player');
	pl.volume = "0.2";  //setting volume
	
	var c = document.getElementById("graph");
	var b = document.getElementById("coord");
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, 500, 250);
	ctx.beginPath();
	ctx.lineWidth = 1;
	shuffle(n); //randomizing
	//chart grid
	for (a = 1; a<=n_dist; a++){
		ctx.moveTo(a*42, 0.5);
		ctx.lineTo(a*42, 250.5);
		ctx.strokeStyle = '#d3d3d3';
		ctx.stroke();
	};
	
	for (a = 1; a<=5; a++){
		ctx.moveTo(500.5,a*42);
		ctx.lineTo(0.5, a*42);
		ctx.strokeStyle = '#d3d3d3';
		ctx.stroke();
	};
	
	//axis X	
	var canvas = document.getElementById("axis_x");
	var ax = canvas.getContext("2d");
	ax.clearRect(0, 0, 570, 42);
	ax.font = "15px Times New Roman";
	
	
	for (k=0; k<=n_dist-1; k++){
		ax.fillText(x[k],(k+1)*42+40,15);
	};	
	ax.font = "20px Times New Roman";
	ax.fillText('k (dB)', 270, 35);
	
	//axis Y
	
	var canvas = document.getElementById("axis_y");
	var ay = canvas.getContext("2d");
	ay.clearRect(0, 0, 42, 280);
	ay.font = "20px Times New Roman";
	
	ay.save();
	ay.translate(10, 140);
	ay.rotate(-Math.PI/2);
	ay.textAlign = "center";
	ay.fillText("MOS", 0, 10);
	ay.restore();
	
	var y = [5, 4, 3, 2, 1];
	ay.font = "15px Times New Roman";
	for (k=0; k<=4; k++){
		ay.fillText(y[k], 24,(k+1)*42+30);
	};	
	
	
	
	document.getElementById("r").style.color = '#d3d3d3'; //heading color change
	document.getElementById("e").style.color = '#546877';
	prvg = prvg_m;
	
	
	
	
	
};