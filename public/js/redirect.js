document.getElementById("login").onclick = getlogin
    console.log('username is', req.body.Username)
    console.log('password is', req.body.Password)
    if(req.body.Username=="admin" && req.body.Password){
        alert('success')
    }else{
        alert('failed')
    }


document.getElementById("login").onclick = function(){
    alert('hello');
};