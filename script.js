// tab bar
function quanLyChuyenMuc(chuyenMuc) {
    var i;
    var x = document.getElementsByClassName("qLCM");
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    document.getElementById(chuyenMuc).style.display = "flex";
    document.getElementById(chuyenMuc).style.flexWrap = "wrap";
    // document.getElementById(chuyenMuc).style.borderBottomColor ="#007bff"
  }
