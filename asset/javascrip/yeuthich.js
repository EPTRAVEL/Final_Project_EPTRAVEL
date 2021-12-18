var yeuthich = new Array();
var kt = yeuthich.length;

function themvaoyeuthich(x) {

    //Lấy ID bằng click  -> DOM
    var getID = x.parentElement.children;
    var id = getID[1].children[0].innerText;
    // alert(id);
    var yt = new Array(id);
    var title = getID[0].children[0].innerText; //Lấy title
    for (var i = 0; i < yeuthich.length; i++) {
      if (yeuthich[i][0] == id) {
        return alert("Tour"+ title +" đã có sẵn trong danh mục yêu thích");
      }
    }
    yeuthich.push(yt);
   
    alert(title + " đã được thêm vào yêu thích");
  
    //Lưu giỏ hàng
    sessionStorage.setItem("yeuthich", JSON.stringify(yeuthich));
  }

  function xoayeuthich_store(x) {
    var mt = x.parentElement;
    var matour = mt.parentElement.children[1].children[1].children[1].innerText;

    // mt.remove();
    alert(matour);
  
    //Xóa sp trong mảng
    
    var yt = sessionStorage.getItem("yeuthich");
    var yeuthich = JSON.parse(yt);
  
    for(let i=0; i<yeuthich.length;i++){
      if(yeuthich[i][0] == matour){
        yeuthich.splice(i,1);
      }
    }
    sessionStorage.setItem("yeuthich", JSON.stringify(yeuthich));
  
    mt.parentElement.remove();
  }