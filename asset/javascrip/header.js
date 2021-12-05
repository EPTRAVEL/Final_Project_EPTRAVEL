function user_block() {
    if (document.getElementById('user-block').style.display == 'none') {
        document.getElementById('user-block').style.display = 'block';
        

    }
    else {
        document.getElementById('user-block').style.display = 'none'
    }
    
}
function user_block_open() {
    document.getElementById('user-block').style.display = 'block';
}
function user_block_close(){
    document.getElementById('user-block').style.display = 'none';
    // setTimeout(function(){
        
    // }, 5000);
}