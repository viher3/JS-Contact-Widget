const PHONE_NUMBER = '123456789'

const WHATSAPP_COUNTRY_PREFIX = '34'
const WHATSAPP_NUMBER = '123456789'
const WHATSAPP_DEFAULT_MESSAGE = 'Hello!'

const TELEGRAM_CHANNEL_NAME = '123456789'

const EMAIL_ADDRESS = 'hello@reaccionestudio.com'

const ICONS_HEIGHT = 80
const CONTAINER_WIDTH = 80
const CONTACT_US_ICON_LABEL = 'Contact us'
const CONTACT_US_CLOSE_LABEL = 'Close'

const CONTACT_METHODS = [
    {
        "name": "Phone call",
        "href": "tel:" + PHONE_NUMBER ,
        "image": "./src/images/phone.png"
    },
    {
        "name": "Whatsapp",
        "href": "https://wa.me/" + WHATSAPP_COUNTRY_PREFIX + WHATSAPP_NUMBER + '?text=' + WHATSAPP_DEFAULT_MESSAGE,
        "image": "./src/images/whatsapp.png"
    },
    {
        "name": "Telegram",
        "href": "https://telegram.me/" + TELEGRAM_CHANNEL_NAME,
        "image": "./src/images/telegram.png"
    },
    {
        "name": "Email",
        "href": "mailto:" + EMAIL_ADDRESS,
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
    <a href="javascript:void(0);" onclick="toggleContactMethods()" class="tooltip">
        <span id="main-icon-tooltip" class="tooltiptext">${CONTACT_US_ICON_LABEL}</span>
        <img id="main-icon" title="${CONTACT_US_ICON_LABEL}" alt="${CONTACT_US_ICON_LABEL}" src="./src/images/contact.png" style="height:${ICONS_HEIGHT}px" />
    </a>
    </div>`

function toggleContactMethods() {
    const chatContainer = document.getElementById('chat-container')
    const mainIcon = document.getElementById('main-icon')
    const mainIconTooltip = document.getElementById('main-icon-tooltip')

    if (chatContainer.classList.contains('chat-hidden')) {
        chatContainer.classList.remove('chat-hidden')
        mainIcon.setAttribute('src', './src/images/close.png')
        mainIconTooltip.innerHTML = CONTACT_US_CLOSE_LABEL
    } else {
        chatContainer.classList.add('chat-hidden')
        mainIcon.setAttribute('src', './src/images/contact.png')
        mainIconTooltip.innerHTML = CONTACT_US_ICON_LABEL
    }
}

window.onload = function () {
    document.body.innerHTML += html
}
