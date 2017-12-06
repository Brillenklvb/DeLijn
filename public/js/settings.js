/*var blok = document.getElementById("blok");
var readMore = document.getElementById("readmore");
blok.onclick = function(){
if (blok.className === "closed"){
	blok.className = "open";
	console.log(blok.className);
	readMore.innerHTML= "Read Less...";
}else{
	blok.className = "closed";
	console.log(blok.className);
	readMore.innerHTML= "Read More...";
}}*/

var settings = document.getElementsByClassName("settings");
var settingBtn = document.getElementsByName("settingBtn");
var content = document.getElementsByTagName("section");
var teller = 0;

 while (teller < settingBtn.length) {
   settingBtn[teller].onclick = function() {
     for (teller = 0; teller < settingBtn.length; teller++) {
       settingBtn[teller].className = "deselected";
       this.className = "selected";
       if (settingBtn[teller].className === "deselected") {
         content[teller].className = "setting-closed";
       } else {
         content[teller].className = "setting-open";
         settingBtn[teller].className = "selected";
       }
     }
   }
   teller++;
 }

/*
    settingBtn[0].onclick= function(){
  if (content[0].className === "closed"){
  	content[0].className = "open";
    content[1].className = "closed";
    content[2].className = "closed";
    console.log(content[0].className);
  }else {
    content[0].className = "open";
      }
    }
  settingBtn[1].onclick= function(){
  if (content[1].className === "closed"){
    	content[0].className = "closed";
      content[1].className = "open";
      content[2].className = "closed";
    }else {
      content[1].className = "open";
        }
      }
  settingBtn[2].onclick= function(){
  if (content[2].className === "closed"){
  	content[0].className = "closed";
    content[1].className = "closed";
    content[2].className = "open";
  }else {
    content[2].className = "open";
      }
    }
*/
