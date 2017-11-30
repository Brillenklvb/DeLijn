function main() {
          var figures = document.getElementsByTagName("figure");
          var teller = 0;
          while (teller < figures.length) {
            figures[teller].innerHTML = "";
            teller++;
          }
}

window.onload = function() {
       main();
}
