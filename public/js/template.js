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
