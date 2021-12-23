function ascending() {
    document.getElementById("category").innerHTML = "";
  var xmlhttp = new XMLHttpRequest();
  var url = "asset/data/tour.json";
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      ascending_2(myArr);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  function ascending_2(arr) {
    let i = document.getElementById("sapxep-select").value;
    arr = arr.sort(function (a, b) {
      if (i == "thap-cao") {
        return a.giatiennguoilon - b.giatiennguoilon;
      } else if (i == "cao-thap") {
        return b.giatiennguoilon - a.giatiennguoilon;
      } else if(i =='theogiamgia') {
        return b.giamgia - a.giamgia
      }
    });
    // document.getElementById("category").innerHTML = "";
    myFunction(arr);
  }
}