//Web implementation of the clipped audio subjective experimental evaluation

//Developed by Igor Kotvytskyi
// Date: May, 2020

const prvg_s = [4.7, 4.7, 4.6, 4.23, 3.98, 3.6, 3.1, 2.7,	2.3, 2, 1.8]; //average old speech data 32 listeners
const prvg_m = [4.7, 4.6, 4.4, 4.2, 3.97, 3.6 , 3.2 , 2.8, 2.4 , 2.1, 1.8] //average old music data 32 listeners
var prvg = [];
var x = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]; //clipping levels
var n_dist = 11; //amount of clipping files
var c = 0;
var cl = [];
var r = new Array(11).fill(0);;	//rate	
var avg = [];
var r1 = [];
//getting data for averaging	
var mwr = []; //for localStorage
var mwe = []; 


for (j = 0; j<=localStorage.length-1; j++) {
	mwr.push(parseFloat(localStorage.getItem(j)));	//calling data
};
console.log(mwr);


function newExp()
{
	location.reload();
}
//Changing rate range
function rateSp() {
	
	var rte = document.getElementById('rate').value;
	document.getElementById('rt').innerHTML = rte;
	document.getElementById('rt').style.background = '#ffffff';
	
};



//Evaluation button
function rateCmt() {
	
	var rte = document.getElementById('rate').value;
	r[n[c]] = rte;
	document.getElementById('eval').setAttribute('disabled', 'disabled'); //preventing inapropriate clicks
	document.getElementById('rate').setAttribute('disabled', 'disabled'); //preventing inapropriate clicks
	document.getElementById('lis').disabled = null;
	document.getElementById('dur').disabled = null; 
	c = c + 1;
	cl.push(c);
	var o = 11 - c;
	document.getElementById('cnr').innerHTML = ' ' + o + ' left';
	
	//test complete statement
	if (cl.length == n_dist) {
		document.getElementById('cnr').innerHTML = ' Done!';
		document.getElementById('lis').setAttribute('disabled', 'disabled'); //preventing inapropriate clicks
		document.getElementById('eval').setAttribute('disabled', 'disabled'); //preventing inapropriate clicks
		document.getElementById('rate').setAttribute('disabled', 'disabled'); 
		document.getElementById('dr_m').style.display = 'none'; 
		document.getElementById('dr_s').style.display = 'none';  
		document.getElementById('selm').setAttribute('disabled', 'disabled');
		document.getElementById('sels').setAttribute('disabled', 'disabled');
		document.getElementById('rt').style.background = '#d3d3d3';
		document.getElementById('dur').setAttribute('disabled', 'disabled');
		document.getElementById('new_e').disabled = null;
		document.getElementById("e").style.color = '#d3d3d3'; //heading color change
		document.getElementById("r").style.color = '#546877'; //heading color change
		
	
		
		//memory storing
		var rmem = r; //asigning for averaging
		
		
		for (j = 0; j<=n_dist-1; j++){
			localStorage.setItem(j, rmem[j]); 	//memory recording
			
		};
		
		
		ratePlot();
		oldPlot();
		document.getElementById("legend").style.display = 'block'; //legend apears
		
		
	};
	document.getElementById('rt').style.background = '#d3d3d3';
};


//music or speech select
r1 = r; //current data storing
function ploType(){
	
	if (document.getElementById('p1_select').checked) {
		prvg = prvg_m;
		ref = p1;
		document.getElementById('sel_m').innerHTML = 'Popular 1	';
		document.getElementById('sel_s').innerHTML = 'Speech	';
	}
	else if (document.getElementById('p2_select').checked) {
		prvg = prvg_m;
		ref = p2;
		document.getElementById('sel_m').innerHTML = 'Popular 2	';
		document.getElementById('sel_s').innerHTML = 'Speech	';
	}
	else if (document.getElementById('p3_select').checked) {
		prvg = prvg_m;
		ref = p3;
		document.getElementById('sel_m').innerHTML = 'Popular 3	';
		document.getElementById('sel_s').innerHTML = 'Speech	';
	}
	else if (document.getElementById('p4_select').checked) {
		prvg = prvg_m;
		ref = p4;
		document.getElementById('sel_m').innerHTML = 'Popular 4	';
		document.getElementById('sel_s').innerHTML = 'Speech	';
	}
	else if (document.getElementById('c1_select').checked) {
		prvg = prvg_m;
		ref = c1;
		document.getElementById('sel_m').innerHTML = 'Classical 1	';
		document.getElementById('sel_s').innerHTML = 'Speech	';
	}
	else if (document.getElementById('c2_select').checked) {
		prvg = prvg_m;
		ref = c2;
		document.getElementById('sel_m').innerHTML = 'Classical 2	';
		document.getElementById('sel_s').innerHTML = 'Speech	';
	}
	else if (document.getElementById('c3_select').checked) {
		prvg = prvg_m;
		ref = c3;
		document.getElementById('sel_m').innerHTML = 'Classical 3	';
		document.getElementById('sel_s').innerHTML = 'Speech	';
	}
	else if (document.getElementById('c4_select').checked) {
		prvg = prvg_m;
		ref = c4;
		document.getElementById('sel_m').innerHTML = 'Classical 4	';
		document.getElementById('sel_s').innerHTML = 'Speech	';
	}
	else if (document.getElementById('f1_select').checked) {
		prvg = prvg_s;
		ref = f1;
		document.getElementById('sel_s').innerHTML = 'Female 1	';
		document.getElementById('sel_m').innerHTML = 'Music	';
	}
	else if (document.getElementById('f2_select').checked) {
		prvg = prvg_s;
		ref = f2;
		document.getElementById('sel_s').innerHTML = 'Female 2	';
		document.getElementById('sel_m').innerHTML = 'Music	';
	}
	else if (document.getElementById('f3_select').checked) {
		prvg = prvg_s;
		ref = f3;
		document.getElementById('sel_s').innerHTML = 'Female 3	';
		document.getElementById('sel_m').innerHTML = 'Music	';
	}
	else if (document.getElementById('f4_select').checked) {
		prvg = prvg_s;
		ref = f4;
		document.getElementById('sel_s').innerHTML = 'Female 4	';
		document.getElementById('sel_m').innerHTML = 'Music	';
	}
	else if (document.getElementById('m1_select').checked) {
		prvg = prvg_s;
		ref = m1;
		document.getElementById('sel_s').innerHTML = 'Male 1	';
		document.getElementById('sel_m').innerHTML = 'Music	';
	}
	else if (document.getElementById('m2_select').checked) {
		prvg = prvg_s;
		ref = m2;
		document.getElementById('sel_s').innerHTML = 'Male 2	';
		document.getElementById('sel_m').innerHTML = 'Music	';
	}
	else if (document.getElementById('m3_select').checked) {
		prvg = prvg_s;
		ref = m3;
		document.getElementById('sel_s').innerHTML = 'Male 3	';
		document.getElementById('sel_m').innerHTML = 'Music	';
	}
	else if (document.getElementById('m4_select').checked) {
		prvg = prvg_s;
		ref = m4;
		document.getElementById('sel_s').innerHTML = 'Male 4	';
		document.getElementById('sel_m').innerHTML = 'Music	';
	};
};
//chart plotting
function ratePlot() {
	
	var c = document.getElementById("graph");
	var ctx = c.getContext("2d");
	
	
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.lineJoin = "round";
	ctx.strokeStyle = '#ff0000'; //red line
	
	//line starts
	
	var cf = 6;
	ctx.moveTo((cl[0])*42, 42*(cf-r[0]));
	ctx.lineTo((cl[1])*42, 42*(cf-r[1]));
	ctx.stroke();
	//line
	for (ter=1; ter<=cl.length+1; ter++) {
		ctx.moveTo((cl[ter])*42, 42*(cf-r[ter]));
		ctx.lineTo((cl[ter+1])*42, 42*(cf-r[ter+1]));
		ctx.stroke();
	};
	//dots
	for (ter=0; ter<=cl.length+1; ter++) {
		ctx.beginPath();
		ctx.arc((cl[ter])*42, 42*(cf-r[ter]), 3, 0, 2 * Math.PI);
		ctx.stroke();
	};
	
	
};	
// plotting of old average data
function oldPlot() {
	
	var c = document.getElementById("graph");
	var ctx = c.getContext("2d");
	
	
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.lineJoin = "round";
	ctx.strokeStyle = '#0033cc'; //blue line
	
	//line starts
	
	var cf = 6;
	ctx.moveTo((cl[0])*42, 42*(cf-prvg[0]));
	ctx.lineTo((cl[1])*42, 42*(cf-prvg[1]));
	ctx.stroke();
	//line
	for (ter=1; ter<=cl.length+1; ter++) {
		ctx.moveTo((cl[ter])*42, 42*(cf-prvg[ter]));
		ctx.lineTo((cl[ter+1])*42, 42*(cf-prvg[ter+1]));
		ctx.stroke();
	};
	//dots
	for (ter=0; ter<=cl.length+1; ter++) {
		ctx.beginPath();
		ctx.arc((cl[ter])*42, 42*(cf-prvg[ter]), 3, 0, 2 * Math.PI);
		ctx.stroke();
	};
	
	
	// legend
	
	var lnd = document.getElementById("legend");
	var ld = lnd.getContext("2d");
	ld.font = "12px Times New Roman";
	ld.fillText('Your', 55, 17);
	ld.fillText('Average', 55, 40);
	
	ld.beginPath();
	ld.lineWidth = 2;
	ld.lineJoin = "round";
	ld.strokeStyle = '#ff0000'; //red line
	ld.moveTo(15, 12);
	ld.lineTo(42, 12);
	ld.stroke();
	ld.arc(15, 12, 3, 0, 2 * Math.PI);
	ld.stroke();
	ld.arc(42, 12, 3, 0, 2 * Math.PI);
	ld.stroke();
	
	ld.beginPath();
	ld.strokeStyle = '#0033cc'; //blue line
	ld.moveTo(15, 35);
	ld.lineTo(42, 35);
	ld.stroke();
	ld.arc(15, 35, 3, 0, 2 * Math.PI);
	ld.stroke();
	ld.arc(42, 35, 3, 0, 2 * Math.PI);
	ld.stroke();
	
	
};	

