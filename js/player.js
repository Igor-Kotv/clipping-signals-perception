//reference audio selector
var j = 0; 

const p1 = ["audio/pop1_0.wav", "audio/pop1_2.wav", "audio/pop1_4.wav",
	"audio/pop1_6.wav", "audio/pop1_8.wav", "audio/pop1_10.wav",
	"audio/pop1_12.wav", "audio/pop1_14.wav", "audio/pop1_16.wav", "audio/pop1_18.wav",
"audio/pop1_20.wav"];
const p2 = ["audio/pop2_0.wav", "audio/pop2_2.wav", "audio/pop2_4.wav",
	"audio/pop2_6.wav", "audio/pop2_8.wav", "audio/pop2_10.wav",
	"audio/pop2_12.wav", "audio/pop2_14.wav", "audio/pop2_16.wav", "audio/pop2_18.wav",
"audio/pop2_20.wav"];
const p3 = ["audio/pop3_0.wav", "audio/pop3_2.wav", "audio/pop3_4.wav",
	"audio/pop3_6.wav", "audio/pop3_8.wav", "audio/pop3_10.wav",
	"audio/pop3_12.wav", "audio/pop3_14.wav", "audio/pop3_16.wav", "audio/pop3_18.wav",
"audio/pop3_20.wav"];
const p4 = ["audio/pop4_0.wav", "audio/pop4_2.wav", "audio/pop4_4.wav",
	"audio/pop4_6.wav", "audio/pop4_8.wav", "audio/pop4_10.wav",
	"audio/pop4_12.wav", "audio/pop4_14.wav", "audio/pop4_16.wav", "audio/pop4_18.wav",
"audio/pop4_20.wav"];
const c1 = ["audio/clas1_0.wav", "audio/clas1_2.wav", "audio/clas1_4.wav",
	"audio/clas1_6.wav", "audio/clas1_8.wav", "audio/clas1_10.wav",
	"audio/clas1_12.wav", "audio/clas1_14.wav", "audio/clas1_16.wav", "audio/clas1_18.wav",
"audio/clas1_20.wav"];
const c2 = ["audio/clas2_0.wav", "audio/clas2_2.wav", "audio/clas2_4.wav",
	"audio/clas2_6.wav", "audio/clas2_8.wav", "audio/clas2_10.wav",
	"audio/clas2_12.wav", "audio/clas2_14.wav", "audio/clas2_16.wav", "audio/clas2_18.wav",
"audio/clas2_20.wav"];
const c3 = ["audio/clas3_0.wav", "audio/clas3_2.wav", "audio/clas3_4.wav",
	"audio/clas3_6.wav", "audio/clas3_8.wav", "audio/clas3_10.wav",
	"audio/clas3_12.wav", "audio/clas3_14.wav", "audio/clas3_16.wav", "audio/clas3_18.wav",
"audio/clas3_20.wav"];
const c4 = ["audio/clas4_0.wav", "audio/clas4_2.wav", "audio/clas4_4.wav",
	"audio/clas4_6.wav", "audio/clas4_8.wav", "audio/clas4_10.wav",
	"audio/clas4_12.wav", "audio/clas4_14.wav", "audio/clas4_16.wav", "audio/clas4_18.wav",
"audio/clas4_20.wav"];

const f1 = ["audio/woman1_0.wav", "audio/woman1_2.wav", "audio/woman1_4.wav",
	"audio/woman1_6.wav", "audio/woman1_8.wav", "audio/woman1_10.wav",
	"audio/woman1_12.wav", "audio/woman1_14.wav", "audio/woman1_16.wav", "audio/woman1_18.wav",
"audio/woman1_20.wav"];
const f2 = ["audio/woman2_0.wav", "audio/woman2_2.wav", "audio/woman2_4.wav",
	"audio/woman2_6.wav", "audio/woman2_8.wav", "audio/woman2_10.wav",
	"audio/woman2_12.wav", "audio/woman2_14.wav", "audio/woman2_16.wav", "audio/woman2_18.wav",
"audio/woman2_20.wav"];
const f3 = ["audio/woman3_0.wav", "audio/woman3_2.wav", "audio/woman3_4.wav",
	"audio/woman3_6.wav", "audio/woman3_8.wav", "audio/woman3_10.wav",
	"audio/woman3_12.wav", "audio/woman3_14.wav", "audio/woman3_16.wav", "audio/woman3_18.wav",
"audio/woman3_20.wav"];
const f4 = ["audio/woman4_0.wav", "audio/woman4_2.wav", "audio/woman4_4.wav",
	"audio/woman4_6.wav", "audio/woman4_8.wav", "audio/woman4_10.wav",
	"audio/woman4_12.wav", "audio/woman4_14.wav", "audio/woman4_16.wav", "audio/woman4_18.wav",
"audio/woman4_20.wav"];
const m1 = ["audio/man1_0.wav", "audio/man1_2.wav", "audio/man1_4.wav",
	"audio/man1_6.wav", "audio/man1_8.wav", "audio/man1_10.wav",
	"audio/man1_12.wav", "audio/man1_14.wav", "audio/man1_16.wav", "audio/man1_18.wav",
"audio/man1_20.wav"];
const m2 = ["audio/man2_0.wav", "audio/man2_2.wav", "audio/man2_4.wav",
	"audio/man2_6.wav", "audio/man2_8.wav", "audio/man2_10.wav",
	"audio/man2_12.wav", "audio/man2_14.wav", "audio/man2_16.wav", "audio/man2_18.wav",
"audio/man2_20.wav"];
const m3 = ["audio/man3_0.wav", "audio/man3_2.wav", "audio/man3_4.wav",
	"audio/man3_6.wav", "audio/man3_8.wav", "audio/man3_10.wav",
	"audio/man3_12.wav", "audio/man3_14.wav", "audio/man3_16.wav", "audio/man3_18.wav",
"audio/man3_20.wav"];
const m4 = ["audio/man4_0.wav", "audio/man4_2.wav", "audio/man4_4.wav",
	"audio/man4_6.wav", "audio/man4_8.wav", "audio/man4_10.wav",
	"audio/man4_12.wav", "audio/man4_14.wav", "audio/man4_16.wav", "audio/man4_18.wav",
"audio/man4_20.wav"];



var ref = [];
var n = Array.from(Array(11).keys());	

//Changing audio range
function durSp() {
	var dr = document.getElementById('dur').value;
	document.getElementById('dr').innerHTML = dr;
	document.getElementById('dr').style.background = '#ffffff';
};
function shuffle(array) {
	array.sort(() => Math.random() - 0.5); //randomizer
}

//Listen button
function lsnCmt() {
	document.getElementById('dr_m').style.display = 'none'; 
	document.getElementById('dr_s').style.display = 'none';  
	document.getElementById('selm').setAttribute('disabled', 'disabled');
	document.getElementById('sels').setAttribute('disabled', 'disabled');
	var tm = document.getElementById('dur').value*1000; //time of listening
	var pl = document.getElementById('player');
	//pl.volume = "0.5";
	pl.src=ref[n[j]];//choosing track
	pl.play();
	document.getElementById('lis').setAttribute('disabled', 'disabled'); //preventing inapropriate clicks	
	document.getElementById('dur').setAttribute('disabled', 'disabled');
	document.getElementById('dr').style.background = '#d3d3d3'
	setTimeout(enAbler, tm);
	console.log(n[j]);
	j = j + 1;
		
};
function enAbler() {
	var pl = document.getElementById('player');
	pl.pause();
	document.getElementById('eval').disabled = null; //ativate eval button
	document.getElementById('rate').disabled = null; //ativate range
};