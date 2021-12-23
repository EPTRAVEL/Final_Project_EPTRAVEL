
$(document).on("change", ".sapxep[0]", function () {

    var sortingMethod = $(this).val();

    if (sortingMethod == 'thap-cao') {
        tangdan();
    }
    else if (sortingMethod == 'cao-thap') {
        giamdan();
    }

});
function tangdan() {
    var touritem = $('.tour-item');
    touritem.sort(function (a, b) {
        return $(a).data("giatiennguoilon") - $(b).data("giatiennguoilon")
    });
    $(".locsanpham-tour").html(touritem);
}

function giamdan() {
    var touritem = $('.tour-item');
    touritem.sort(function (a, b) { return $(b).data("giatiennguoilon") - $(a).data("giatiennguoilon") });
    $(".locsanpham-tour").html(touritem);
}


var xmlhttp = new XMLHttpRequest();
var url = "asset/data/tour.json";
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
        myFunction_loc(myArr);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function goThongtin(id){
    window.location.href = 'thongtin.html?matour=' + id;
}
function goChiTiet(id){
    window.location.href = 'chitiettour.html?matour=' + id;
}
function myFunction(arr) {
    var div = "<div class='locsanpham-tour'>";
    var i;
    for (i = 0; i < arr.length; i++) {
            var close_del = '';
            var open_del = '';
            var giaSauKM = 0;
            var giaSauKM_element = '';
            if(arr[i].giamgia != 0){
                open_del = "<del>"
                close_del = "</del>"
                giaSauKM = arr[i].giatiennguoilon*(100-arr[i].giamgia)/100;
                var giaSauKM_element = '<span>'+ formatNumber(giaSauKM) +'đ</span>';
            }
            if(arr[i].giamgia != 0){
               
            }

            

        div += "<div class='tour-item'><div class='tour-item__image'><img src='" +
            arr[i].images[1] + "'alt='" +
            arr[i].ten_tour + "'></div><div class='card-body'><div  class='tour-item__title'><h3>" +
            arr[i].ten_tour + "</h3></div><div class='detail-content'><p class='tour-item__code'> Mã Tour: <span>" +
            arr[i].ma_tour + "</span></p><p class='tour-item__departure'>Nơi khởi hành: <span>" +
            arr[i].noikhoihanh + "</span></p><div class='tour-item__price--current__number'>Giá "+ open_del + "<span id='tour-item__price--current__number'>" +
            formatNumber(arr[i].giatiennguoilon) + "đ" + close_del +"</span>/Khách</div><div class='tour-item__price--current__number' id='tour-item__price--current__number'>"+ giaSauKM_element +"</div></div><div class='tour-item__price--current'><button  class='btn btn-book' onclick=" + 'goThongtin(' + "'"+  arr[i].ma_tour + "'" + ')' + "><span id='icon'><img src='./asset/images/ICON/cart.png' alt='Đặt hàng'></span> Đặt ngay</button><button class='btn btn-block' onclick='goChiTiet("+ '"' +arr[i].ma_tour + '"' +")'>Xem chi tiết</button></div><button style='z-index: 10;' onclick='themvaoyeuthich(this)' class='yeuthich'><span id='icon'><img src='./asset/images/ICON/plus.png'alt='plus'></span> Thêm vào yêu thích</button></div></div>"
        // div += "<div class='tour-item'><a href='chitiettour.html?matour=" +
        //     arr[i].ma_tour + "' title='" +
        //     arr[i].ten_tour + "'><div class='tour-item__image'><img src='" +
        //     arr[i].images[1] + "'alt='" +
        //     arr[i].ten_tour + "'></div><div class='card-body'><div  class='tour-item__title'><h3>" +
        //     arr[i].ten_tour + "</h3></div><p class='tour-item__code'> Mã Tour: <span>" +
        //     arr[i].ma_tour + "</span></p><p class='tour-item__departure'>Nơi khởi hành: <span>" +
        //     arr[i].noikhoihanh + "</span></p><div class='tour-item__price--current__number'>Giá <span id='tour-item__price--current__number'>" +
        //     formatNumber(arr[i].giatiennguoilon) + "đ</span>/Khách</div><div class='tour-item__price--current'><button  class='btn btn-book' onclick='window.location.href='chitiettour.html?matour='" +
        //     arr[i].ma_tour + "'><span id='icon'><img src='./asset/images/ICON/cart.png' alt='Đặt hàng'></span> Đặt ngay</button><button class='btn btn-block' onclick='window.location.href='chitiettour.html?matour='" +
        //     arr[i].ma_tour + "'>Xem chi tiết</button></div><button style='z-index: 10;' onclick='themvaoyeuthich(this)' class='yeuthich'><span id='icon'><img src='./asset/images/ICON/plus.png'alt='plus'></span> Thêm vào yêu thích</button></div></a></div>"

        // onclick='goThongTin("+arr[i].ma_tour+")'
    }
    div += "</div>";
    document.getElementById("category").innerHTML = div;
}
//sắp xếp tour
function ascending(){
    let i = document.getElementById('sapxep-select').value
    arr = arr.sort(function (a,b){
        if (i=='thap-cao'){
            return a.giatiennguoilon - b.giatiennguoilon
        }
        else if (i=='cao-thap'){
            return b.giatiennguoilon - a.giatiennguoilon
        }
        else {
            
        }
    })
    document.getElementById('category').innerHTML = ''
    myFunction(arr)

}
function myFunction_loc(arr) {

    // arrKhuVuc = [a,b];
    // arrDiemDen = [];
    // arrSoNgayTour = [];
    var arrKhuVuc_tn = new Array();
    var arrKhuVuc_nn = new Array();


    var arrDiemDen_tn = new Array();
    var arrDiemDen_nn = new Array();


    var arrSoNgayTour = new Array();



    // add từ data thành arr
    // for (i = 0; i < arr.length; i++) {
    //     arrKhuVuc.push(arr[i].khuvuc);
    //     arrDiemDen.push(arr[i].diemden);
    //     arrSoNgayTour.push(arr[i].thoigian);
    // }
    for (i = 0; i < arr.length; i++) {
        if (arr[i].quocgia == 'Tour du lịch trong nước') {
            arrKhuVuc_tn.push(arr[i].khuvuc);
            arrDiemDen_tn.push(arr[i].diemden);
        }
        if (arr[i].quocgia == 'Tour du lịch nước ngoài') {
            arrKhuVuc_nn.push(arr[i].khuvuc);
            arrDiemDen_nn.push(arr[i].diemden);
        }


        arrSoNgayTour.push(arr[i].thoigian);
    }
    arrKhuVuc_tn = arrKhuVuc_tn.filter((item, index) => arrKhuVuc_tn.indexOf(item) === index);
    arrKhuVuc_nn = arrKhuVuc_nn.filter((item, index) => arrKhuVuc_nn.indexOf(item) === index);

    arrDiemDen_tn = arrDiemDen_tn.filter((item, index) => arrDiemDen_tn.indexOf(item) === index);
    arrDiemDen_nn = arrDiemDen_nn.filter((item, index) => arrDiemDen_nn.indexOf(item) === index);

    arrSoNgayTour = arrSoNgayTour.filter((item, index) => arrSoNgayTour.indexOf(item) === index);
    // arrDiemDen = [...new Set(arrDiemDen)];
    // arrSoNgayTour = [...new Set(arrSoNgayTour)];

    var div = '<h2>LỌC KẾT QUẢ</h2><div><select onchange="locQuocGia(); " name="quocgia" id="quocgia" class=" select-item"><option value="0" id="op_none">--Chọn quốc gia--</option><option id="op_trongnuoc" value="1">Tour trong nước</option><option value="2" id="op_ngoainuoc">Tour ngoài nước</option></select></div><div ><select onclick="locQuocGia()" name="khuvuc" id="khuvuc" class=" select-item"><option value="0">--Chọn khu vực--</option>';

    for (var i = 0; i < arrKhuVuc_tn.length; i++) {
        div += '<option class="TrongNuoc-distinguish" value="' + arrKhuVuc_tn[i] + '">' + arrKhuVuc_tn[i] + '</option>';
    };
    for (var i = 0; i < arrKhuVuc_nn.length; i++) {
        div += '<option class="NgoaiNuoc-distinguish" value="' + arrKhuVuc_nn[i] + '">' + arrKhuVuc_nn[i] + '</option>';
    }

    div += '</select></div><div><select name="diemdi"id="diemdi" class=" select-item"><option value="0">--Điểm đi--</option><option value="Hà Nội">Hà Nội</option><option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option></select></div><div><select onclick="locQuocGia()" name="diemden" id="diemden" class="select-item"><option  value="0">--Điểm đến--</option>'

    for (var i = 0; i < arrDiemDen_tn.length; i++) {
        div += '<option class="TrongNuoc-distinguish" value="' + arrDiemDen_tn[i] + '">' + arrDiemDen_tn[i] + '</option>';
    };
    for (var i = 0; i < arrDiemDen_nn.length; i++) {
        div += '<option class="NgoaiNuoc-distinguish" value="' + arrDiemDen_nn[i] + '">' + arrDiemDen_nn[i] + '</option>';
    }

    div += '</select></div><div><select name="songaytour" id="songaytour" class="select-item"><option value="0">--Số ngày tour--</option>'

    for (var i = 0; i < arrSoNgayTour.length; i++) {
        div += '<option value="' + arrSoNgayTour[i] + '">' + arrSoNgayTour[i] + '</option>';
    }

    div += '</select></div>'
    document.getElementById("locSanPham").innerHTML = div;

}



function locQuocGia() {
    var value = document.getElementById("quocgia").value;
    var tn = document.getElementsByClassName("TrongNuoc-distinguish");
    var nn = document.getElementsByClassName("NgoaiNuoc-distinguish");
    if (value === '0') {
        // window.location.href = ('tourdulich.html');
        for (i = 0; i < tn.length; i++) {
            tn[i].style.display = 'block';
        }
        for (i = 0; i < nn.length; i++) {
            nn[i].style.display = 'block';
        }
    }
    else if (value === '1') {
        // window.location.href = ('tourdulich.html?quocgia=Trong Nước');
        for (i = 0; i < tn.length; i++) {
            tn[i].style.display = 'block';
        }
        for (i = 0; i < nn.length; i++) {
            nn[i].style.display = 'none';
        }


    }
    else if (value === '2') {
        // window.location.href = ('tourdulich.html?quocgia=NgoaiNuoc');

        for (i = 0; i < tn.length; i++) {
            tn[i].style.display = 'none';
        }
        for (i = 0; i < nn.length; i++) {
            nn[i].style.display = 'block';
        }
    }
}