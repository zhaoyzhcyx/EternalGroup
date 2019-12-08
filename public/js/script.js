// newevent.pug functions

// initializing the enddate value using startdate value
window.onload = function() {
    // let endDate = document.getElementById('enddate')
    // if (endDate.value === '') {
    //     console.log('sd' + endDate.value)
    // }

    let str="The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god"

    console.log(str.split(' ').map(strvar => {
        return strvar.split('').reverse().join('')
    }).join(' '))

    // console.log(strtemp.join(' '))
}
function setEndDate() {
    let startDate = document.getElementById('startdate')
    let endDate = document.getElementById('enddate')

    if (endDate.value === '') {
        endDate.value = startDate.value
    }
}