// newevent.pug functions

// initializing the enddate value using startdate value
window.onload = function() {
    // document.getElementById('startdate').value = new Date('2019-11-11T11:11')
    // let startDate = document.getElementById('startdate')
    // if (endDate.value === '') {
    //     console.log('sd' + endDate.value)
    // }
}

//used by newevent.pug to auto-set enddate value same with startdate
function setEndDate() {
    let startDate = document.getElementById('startdate')
    let endDate = document.getElementById('enddate')

    if (endDate.value === '') {
        endDate.value = startDate.value
    }
}

//used by login pug to check the username and password
function checkUser() {
    const username = document.getElementById('username').value
    const pw = document.getElementById('password').value

    fetch("/logincheck/" + username).then(res => {
        return res.json();
    }).then((data) => {
        if (data.length >0) {
            inputedPW = crypt.decrypt(data[0].password)
            if (inputedPW === pw) {
                //set up session
                fetch("/session/" + username).then(res => {
                    // return res.json();
                }).then((data) => {
                })

                window.location.href = "/"
            }else {
                document.getElementById('loginresult').innerHTML="<font color='red'>invalid password!</font>"; 
            }
        }
        else {
            document.getElementById('loginresult').innerHTML="<font color='red'>invalid username!</font>"; 
        }
    })
}

//used by register.pug to check email
function checkEmail() {
    const email = document.getElementById('email')
    if (email.value == '') return

    let nameRegex = '^[^@]+@[^@]+\.[^@]+$';
    let validUserName = email.value.match(nameRegex)
    if(validUserName == null){
        email.focus()
        document.getElementById('emailresult').innerHTML="<font color='red'>invalid email!</font>"; 
        return
    }

    if (email != '') {
        fetch("/checkemail/" + email.value).then(res => {
            return res.json();
        }).then((data) => {
            if (data.length >0) {
                // email.focus()
                document.getElementById('emailresult').innerHTML="<font color='red'>email exists！</font>"; 
            }
            else {
                document.getElementById('emailresult').innerHTML="<font color='green'>ok</font>"; 
            }
        })
    }
}

//used by register.pug to check username
function checkUserName() {

    const username = document.getElementById('username')
    if (username.value == '') return

    let nameRegex = '^[a-zA-Z0-9/*@]*$';
    let validUserName = username.value.match(nameRegex)
    if(validUserName == null){
        // username.focus()
        document.getElementById('usernameresult').innerHTML="<font color='red'>letter or number or / * @</font>"; 
        return
    }

    if (username != '') {
        fetch("/checkusername/" + username.value).then(res => {
            return res.json();
        }).then((data) => {
            if (data.length >0) {
                // username.focus()
                document.getElementById('usernameresult').innerHTML="<font color='red'>user exists！</font>"; 
            }
            else {
                document.getElementById('usernameresult').innerHTML="<font color='green'>ok</font>"; 
            }
        })
    }
}

//used by register pug to encrpt the password and save into the hidden element with id 'pwresult'
function encrpPW() {
    const pw = document.getElementById('password')
    if (pw.value == '') return
    if (pw.value.length < 8) {
        document.getElementById('pwalert').innerHTML="<font color='red'>password must at least eight letters！</font>"
        return
    }

    let nameRegex = '^[a-zA-Z0-9]*$';
    let validUserName = pw.value.match(nameRegex)
    if(validUserName == null){
        document.getElementById('pwalert').innerHTML="<font color='red'>password must include at least one letter and one number！</font>"
        return
    }

    document.getElementById('pwalert').innerHTML="<font color='green'>ok</font>"
    document.getElementById('pwresult').value = crypt.encrypt(document.getElementById('password').value)
}

var crypt = {
    secret : "CIPHERKEY",
    encrypt : function (clear){
    // encrypt() : encrypt the given clear text

      var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
      cipher = cipher.toString();
      return cipher;
    },

    decrypt : function (cipher) {
    // decrypt() : decrypt the given cipher text

      var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
      decipher = decipher.toString(CryptoJS.enc.Utf8);
      return decipher;
    }
  };

  