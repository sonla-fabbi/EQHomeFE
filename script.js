// tab bar
function quanLyChuyenMuc(chuyenMuc) {
    var i;
    var x = document.getElementsByClassName("qLCM");debugger
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }debugger
    document.getElementById(chuyenMuc).style.display = "block";  
  }
