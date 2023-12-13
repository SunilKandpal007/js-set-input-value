function showInput(){
    let userName = document.getElementById('username').value;
    let userMsg = document.getElementById('usermessage').value;
    if(userName == ''){
      document.getElementById('myResult').innerText = `Alert! Please Enter Your Name.`;
    }
    else if(userMsg == ''){
      document.getElementById('myResult').innerText = `Alert! Please Enter Your Message.`;
    }
    else{ 
      document.getElementById('myResult').innerHTML = `${userName}: ${userMsg}`;
      document.getElementById('myResult').style.color = "black";
      document.getElementById('myResult').style.background = "violet";
    }
  }