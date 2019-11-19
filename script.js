const index = 'IT Events in Regina'
const addEvent = 'Add Event'

window.onload = function() {
    // console.log(itevents[0].name)
    const title = document.querySelector('title').innerText
    if (title === index) {
        renderHTMLHead(title)
        renderITEventsBody()
    }
}

function renderHTMLHead(headtitle) {

    const metaCharset = document.createElement('meta')
    const metaHTTP = document.createElement('meta')
    const metaOther1 = document.createElement('meta')
    const metaOther2 = document.createElement('meta')
    const metaOther3 = document.createElement('meta')
    const link1 = document.createElement('link')
    const link2 = document.createElement('link')
    metaCharset.setAttribute('chartset','UTF-8')
    metaHTTP.setAttribute('http-equiv','X-UA-Compatible')
    metaHTTP.setAttribute('content','ie=edge')
    metaOther1.setAttribute('name','keywords')
    metaOther1.setAttribute('content','information technology, IT, coding, programming, HTML, HTML5, CSS, XML, XHTML, JavaScript, Regina')
    metaOther2.setAttribute('name','description')
    metaOther2.setAttribute('content','Listing the IT events in Regina SK')
    metaOther3.setAttribute('name','author')
    metaOther3.setAttribute('content','zhaoyzhcyx')
    link1.setAttribute('rel','shortcut icon')
    link1.setAttribute('href','image/Dever.png')
    link1.setAttribute('type','image/x-icon')
    link2.setAttribute('rel','stylesheet')
    link2.setAttribute('href','styles.css')
    
    document.head.appendChild(metaCharset)
    document.head.appendChild(metaHTTP)
    document.head.appendChild(metaOther1)
    document.head.appendChild(metaOther2)
    document.head.appendChild(metaOther3)
    document.head.appendChild(link1)
    document.head.appendChild(link2)
}

function renderITEventsBody() {

    const ul = document.createElement('ul')
    document.body.appendChild(ul)

    itevents.forEach(event => {
        const li = document.createElement('li')
        const h2 = document.createElement('h2')
        h2.innerText = event.name
        const p = document.createElement('p')
        p.innerHTML = `<a href="${event.orgURL}" target="_blank">${event.organizer}</a>,  ${event.date}, ${event.location}</br>${event.description}`
        const div = document.createElement('div')
        div.innerHTML = `<img src="${event.img}">`
        
        li.appendChild(h2)
        li.appendChild(p)
        li.appendChild(div)
        ul.appendChild(li)
    })
}