let username = document.getElementById("username");
let password = document.getElementById("pass");
let flaguser=0;
let flagpass=0;
        
                function validate(){
                    if(username.value == "")
                        {
                            document.getElementById("usererror").innerHTML = "User Name can not be empty";
                            flaguser = 0;
                        }
                    else if(username.value.length < 4){
                            document.getElementById("usererror").innerHTML = "User Name should be of 5 characters<br> atleast";
                            flaguser = 0;
                        }
                    else{
                        document.getElementById("usererror").innerHTML = "";
                        flaguser = 1;
                    }
        
                    if(password.value == "")
                        {
                            document.getElementById("passerror").innerHTML = "Password can not be empty";
                            flagpass = 0;
                        }
                    else if(password.value.length < 7){
                            document.getElementById("passerror").innerHTML = "Password should be of 7 characters <br> atleast";
                            flagpass = 0;
                        }
                    else{
                        document.getElementById("passerror").innerHTML = "";
                        flagpass = 1;
                    }
                    
                    if(flaguser==1 && flagpass==1){
                        return true;
                    }
                    else{
                        return false;
                    }
                }