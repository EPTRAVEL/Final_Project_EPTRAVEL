
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
