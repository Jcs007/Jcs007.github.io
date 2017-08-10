function refreshTime(){
	var d=new Date();
	var p=document.getElementById('time0');
	p.innerHTML=d.toLocaleString();
	setTimeout('refreshTime()',1000);
}	
