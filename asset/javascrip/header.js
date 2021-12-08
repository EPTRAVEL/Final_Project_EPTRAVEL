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

function hamburger_o(){
    document.getElementById('nav_id').style.display = 'block';
    document.getElementById('hamburger-o').style.display = 'none';
    document.getElementById('hamburger-x').style.display = 'block';

    
}
function hamburger_x(){
    document.getElementById('nav_id').style.display = 'none';
    document.getElementById('hamburger-o').style.display = 'block';
    document.getElementById('hamburger-x').style.display = 'none';

    
}


  
