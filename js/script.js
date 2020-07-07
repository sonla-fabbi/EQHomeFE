// tab bar
function quanLyChuyenMuc(evt, chuyenMuc) {
    var x = document.getElementsByClassName("tab-content");
    for (var i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    var z = document.getElementsByClassName("tab-bar-link");
    for (i = 0; i < z.length; i++) {
      z[i].className = z[i].className.replace(" active", "");
    }
    document.getElementById(chuyenMuc).style.display = "flex";
    document.getElementById(chuyenMuc).style.flexWrap = "wrap";
    evt.currentTarget.className += " active"; 
  }

  function quanLyBDS(evt, BDS) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    var z = document.getElementsByClassName("tab-bar-link");
    for (i = 0; i < z.length; i++) {
      z[i].className = z[i].className.replace(" active", "");
    }
    document.getElementById(BDS).style.display = "flex";
    evt.currentTarget.className += " active";
  }

  function quanLyNguoiDung(evt, nD) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    var z = document.getElementsByClassName("tab-bar-link");
    for (i = 0; i < z.length; i++) {
      z[i].className = z[i].className.replace(" active", "");
    }
    document.getElementById(nD).style.display = "flex";
    evt.currentTarget.className += " active";
  }

  function quanLyHuongNha(evt, hN) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    var z = document.getElementsByClassName("tab-bar-link");
    for (i = 0; i < z.length; i++) {
      z[i].className = z[i].className.replace(" active", "");
    }
    document.getElementById(hN).style.display = "flex";
    evt.currentTarget.className += " active";
  }

  function quanLyLaiSuat(evt, lS) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    var z = document.getElementsByClassName("tab-bar-link");
    for (i = 0; i < z.length; i++) {
      z[i].className = z[i].className.replace(" active", "");
    }
    document.getElementById(lS).style.display = "flex";
    evt.currentTarget.className += " active";
  }

  function quanLyKyGui(evt, kG) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    var z = document.getElementsByClassName("tab-bar-link");
    for (i = 0; i < z.length; i++) {
      z[i].className = z[i].className.replace(" active", "");
    }
    document.getElementById(kG).style.display = "flex";
    evt.currentTarget.className += " active";
  }

  function gioiThieu(evt, gT) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    var z = document.getElementsByClassName("tab-bar-link");
    for (i = 0; i < z.length; i++) {
      z[i].className = z[i].className.replace(" active", "");
    }
    document.getElementById(gT).style.display = "flex";
    evt.currentTarget.className += " active";
  }

  function tinBDS(evt, tBDS) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    var z = document.getElementsByClassName("tab-bar-link");
    for (i = 0; i < z.length; i++) {
      z[i].className = z[i].className.replace(" active", "");
    }
    document.getElementById(tBDS).style.display = "flex";
    evt.currentTarget.className += " active";
  }

  function showDetail(detail) {
    var i;
    var x = document.getElementsByClassName("sDetail");
    for (i = 0; i < x.length; i++){
      x[i].style.display = "none";  
    }
    document.getElementById(detail).style.display = "flex";
  }
  
  document.getElementById("defaultOpen").click();

  //side bar
  

