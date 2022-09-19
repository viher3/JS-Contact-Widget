const PHONE_NUMBER = ''
const WHATSAPP_NUMBER = ''
const TELEGRAM_NUMBER = ''
const EMAIL_ADDRESS = ''
const ICONS_HEIGHT = 80
const CONTAINER_WIDTH = 80

const CONTACT_METHODS = [
    {
        "name": "Phone call",
        "href": "tel:610397312",
        "image": "./src/images/phone.png"
    },
    {
        "name": "Whatsapp",
        "href": "tel:610397312",
        "image": "./src/images/whatsapp.png"
    },
    {
        "name": "Telegram",
        "href": "tel:610397312",
        "image": "./src/images/telegram.png"
    },
    {
        "name": "Email",
        "href": "mailto:info@info.com",
        "image": "./src/images/email.png"
    },
]

let contactMethodsHtml = ''

CONTACT_METHODS.reverse().map(contactMethod => {
    contactMethodsHtml += `
        <a href="${contactMethod.href}" title="${contactMethod.name}" class="tooltip">
            <span class="tooltiptext">${contactMethod.name}</span>
            <img src="${contactMethod.image}" title="${contactMethod.name}" alt="${contactMethod.name}" style="height:${ICONS_HEIGHT}px" />
        </a>`
})

const styles = `
    <style>
        .chat-hidden{display:none;}
        div#chat-container{ width:${CONTAINER_WIDTH}px; }
        div#chat-container a {margin-bottom: 15px;display:block; }
        .tooltip {
          position: relative;
          display: inline-block;
        }
        .tooltip .tooltiptext {
          font-family: sans-serif;
          font-weight: bold;
          visibility: hidden;
          width: 120px;
          background-color: black;
          color: #fff;
          text-align: center;
          padding: 5px 0;
          border-radius:3px;
          position: absolute;
          z-index: 1;
          right: 95px;
          top: 29px;
        }
        .tooltip:hover .tooltiptext {
          visibility: visible;
        }
    </style>`

const html = styles +
    `<div style="position:fixed;bottom:50px;right:50px;">
        <div id="chat-container" class="chat-hidden">
        ${contactMethodsHtml}
    </div>
    <a href="javascript:void(0);" onclick="showContactMethods()" class="tooltip">
        <span class="tooltiptext">Contact us</span>
        <img title="Contact us" alt="Contat us" src="./src/images/contact.png" style="height:${ICONS_HEIGHT}px" />
    </a>
    </div>`

window.onload = function () {
    document.body.innerHTML += html
}

function showContactMethods() {
    const chatContainer = document.getElementById('chat-container')

    if (chatContainer.classList.contains('chat-hidden')) {
        chatContainer.classList.remove('chat-hidden')
    } else {
        chatContainer.classList.add('chat-hidden')
    }
    console.log('click')
}
