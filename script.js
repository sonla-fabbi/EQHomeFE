// tab bar
function quanLyChuyenMuc(chuyenMuc) {
    var i;
    var x = document.getElementsByClassName("qLCM");
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    document.getElementById(chuyenMuc).style.display = "flex";
    document.getElementById(chuyenMuc).style.flexWrap = "wrap";
  }

  function quanLyBDS(BDS) {
    var i;
    var x = document.getElementsByClassName("batDongSan");
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    document.getElementById(BDS).style.display = "flex";
  }

  function quanLyNguoiDung(nD) {
    var i;
    var x = document.getElementsByClassName("nguoiDung");
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    document.getElementById(nD).style.display = "flex";
  }

