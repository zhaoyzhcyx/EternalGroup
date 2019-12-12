const index = 'IT Events in Regina'
const handlingform = 'form'
var itevents = []

window.onload = function() {

    //- //- index.pug for ajax
    //- #eventcontainer.container-fluid
    //-   h1
    //-     span.badge.badge-secondary IT Events in Regina

    const title = document.querySelector('title').innerText
    if (title === index) {
        fetch("/events").then(res => {
            return res.json();
        }).then((data) => {
            itevents = data
            // renderHTMLHead(title)
            renderITEventsBody()
        })
    } else if (title === handlingform) {

    } 
}

function renderITEventsBody() {

    const divcontainer = document.getElementById('eventcontainer')
    const div = document.createElement('div')
    div.classList.add('card','col-md-9','mb-3')

    itevents.forEach(event => {
        const div1 = document.createElement('div')
        div1.classList.add('card-header')
        div1.innerText = event.name
        div.appendChild(div1)

        const div2 = document.createElement('div')
        div2.classList.add('card-body')
        const eventdate = document.createElement('h5')
        eventdate.classList.add('card-title')
        eventdate.innerHTML = `${event.date}`
        div2.appendChild(eventdate)
        const h5 = document.createElement('h5')
        h5.classList.add('card-title')
        h5.innerHTML = `${event.location}, <a href="${event.orgURL}" target="_blank">${event.organizer}</a>`
        div2.appendChild(h5)
        const p = document.createElement('p')
        p.classList.add('card-text')
        p.innerText = event.description
        div2.appendChild(p)
        
        if (event.img != "") {
            const div3 = document.createElement('div')
            div3.classList.add('card-text')
            div3.innerHTML = `<img src="${event.img}" class="img-fluid" alt="Responsive image">`
            div2.appendChild(div3)
        }
        div.appendChild(div2)
        divcontainer.appendChild(div)
    })
}

function renderHTMLHead(headtitle) {

    const metaCharset = document.createElement('meta')
    const metaHTTP = document.createElement('meta')
    const metaOther1 = document.createElement('meta')
    const metaOther2 = document.createElement('meta')
    const metaOther3 = document.createElement('meta')
    const metaOther4 = document.createElement('meta')
    const link1 = document.createElement('link')
    // const link2 = document.createElement('link')
    metaCharset.setAttribute('chartset','UTF-8')
    metaHTTP.setAttribute('http-equiv','X-UA-Compatible')
    metaHTTP.setAttribute('content','ie=edge')
    metaOther1.setAttribute('name','keywords')
    metaOther1.setAttribute('content','information technology, IT, coding, programming, HTML, HTML5, CSS, XML, XHTML, JavaScript, Regina')
    metaOther2.setAttribute('name','description')
    metaOther2.setAttribute('content','Listing the IT events in Regina SK')
    metaOther3.setAttribute('name','author')
    metaOther3.setAttribute('content','zhaoyzhcyx')
    metaOther4.setAttribute('name','viewport')
    metaOther4.setAttribute('content','width=device-width, initial-scale=1, shrink-to-fit=no')
    link1.setAttribute('rel','shortcut icon')
    link1.setAttribute('href','image/Dever.png')
    link1.setAttribute('type','image/x-icon')
    // link2.setAttribute('rel','stylesheet')
    // link2.setAttribute('href','/css/styles.css')
    
    document.head.appendChild(metaCharset)
    document.head.appendChild(metaHTTP)
    document.head.appendChild(metaOther1)
    document.head.appendChild(metaOther2)
    document.head.appendChild(metaOther3)
    document.head.appendChild(metaOther4)
    document.head.appendChild(link1)
    // document.head.appendChild(link2)
}