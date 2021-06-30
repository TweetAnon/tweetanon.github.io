var a;

//displayed time & date difference
var dyear;
var dmonth;
var dday;
var dhr;
var dmin;
var dsec;

var count = document.querySelector('#countup');

window.onload = function() {
	datetime_diff();
    loopstats();
};

//increments countup
function loopstats() {
	a = setInterval(datetime_diff, 1000);
};

function datetime_diff() {
	var then = moment('2021-07-01 00:00:00');
	var now = moment();
	var diff = moment.preciseDiff(then, now);
	count.innerHTML = diff;
	
};
	count.innerHTML = (dyear + " Years") + ', ' + (dmonth + " Months") + ', ' + (dday + " Days") + ("0" + dhr).slice(-2) + ' Hours, ' + ("0" + dmin).slice(-2) + ' Minutes, ' + ("0" + dsec).slice(-2) + ' Seconds';

