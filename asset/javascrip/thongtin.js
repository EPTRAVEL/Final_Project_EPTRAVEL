function cong1() {
    //lấy giá trị của text box
    var t = document.getElementById("textbox1").value;
    //cộng thêm 1đvi rồi gán trở lại cho textbox
    document.getElementById("textbox1").value = parseInt(t) + 1;
}

function cong2() {
    var t = document.getElementById("textbox2").value;
    document.getElementById("textbox2").value = parseInt(t) + 1;
}

function cong3() {
    var t = document.getElementById("textbox3").value;
    document.getElementById("textbox3").value = parseInt(t) + 1;
}

function cong4() {
    var t = document.getElementById("textbox4").value;
    document.getElementById("textbox4").value = parseInt(t) + 1;
}

function tru1() {
    var t = document.getElementById("textbox1").value;
    if (parseInt(t) > 0) {
        document.getElementById("textbox1").value = parseInt(t) - 1;
    }
}

function tru2() {
    var t = document.getElementById("textbox2").value;
    if (parseInt(t) > 0) {
        document.getElementById("textbox2").value = parseInt(t) - 1;
    }
}

function tru3() {
    var t = document.getElementById("textbox3").value;
    if (parseInt(t) > 0) {
        document.getElementById("textbox3").value = parseInt(t) - 1;
    }
}

function tru4() {
    var t = document.getElementById("textbox4").value;
    if (parseInt(t) > 0) {
        document.getElementById("textbox4").value = parseInt(t) - 1;
    }
}

function trove() {
    history.back();
}