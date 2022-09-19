import {toggleContactMethods} from './toggleContactMethods'
import {
    ICONS_HEIGHT,
    CONTAINER_WIDTH,
    CONTACT_US_ICON_LABEL,
    CONTACT_METHODS
} from './config'

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
    <a href="javascript:void(0);" id="toggleContactMethods" class="tooltip">
        <span id="main-icon-tooltip" class="tooltiptext">${CONTACT_US_ICON_LABEL}</span>
        <img id="main-icon" title="${CONTACT_US_ICON_LABEL}" alt="${CONTACT_US_ICON_LABEL}" src="./src/images/contact.png" style="height:${ICONS_HEIGHT}px" />
    </a>
    </div>`

window.onload = function () {
    document.body.innerHTML += html

    document.getElementById('toggleContactMethods').addEventListener('click', function(e){
        e.preventDefault()
        toggleContactMethods()
    })
}
