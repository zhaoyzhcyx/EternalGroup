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

//used by register.pug to check email
function checkEmail() {

    const username = document.getElementById('username')

    let nameRegex = '^[a-zA-Z0-9/*@]*$';
    let validUserName = username.value.match(nameRegex)
    if(validUserName == null){
        username.focus()
        document.getElementById('usernameresult').innerHTML="<font color='red'>letter or number or / * @</font>"; 
        return
    }

    if (username != '') {
        fetch("/checkusername/" + username.value).then(res => {
            return res.json();
        }).then((data) => {
            if (data.length >0) {
                username.focus()
                document.getElementById('usernameresult').innerHTML="<font color='red'>user exists！</font>"; 
            }
            else {
                document.getElementById('usernameresult').innerHTML="<font color='green'>ok</font>"; 
            }
        })
    }
}

//used by register.pug to check username
function checkUserName() {

    const username = document.getElementById('username')

    let nameRegex = '^[a-zA-Z0-9/*@]*$';
    let validUserName = username.value.match(nameRegex)
    if(validUserName == null){
        username.focus()
        document.getElementById('usernameresult').innerHTML="<font color='red'>letter or number or / * @</font>"; 
        return
    }

    if (username != '') {
        fetch("/checkusername/" + username.value).then(res => {
            return res.json();
        }).then((data) => {
            if (data.length >0) {
                username.focus()
                document.getElementById('usernameresult').innerHTML="<font color='red'>user exists！</font>"; 
            }
            else {
                document.getElementById('usernameresult').innerHTML="<font color='green'>ok</font>"; 
            }
        })
    }
}