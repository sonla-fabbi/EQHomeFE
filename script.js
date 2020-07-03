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

  function quanLyHuongNha(hN) {
    var i;
    var x = document.getElementsByClassName("huongNha");
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    document.getElementById(hN).style.display = "flex";
  }

  function quanLyLaiSuat(lS) {
    var i;
    var x = document.getElementsByClassName("laiSuat");
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    document.getElementById(lS).style.display = "flex";
  }

  function showDetail(detail) {
    var i;
    var x = document.getElementsByClassName("sDetail");
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    document.getElementById(detail).style.display = "flex";
  }

