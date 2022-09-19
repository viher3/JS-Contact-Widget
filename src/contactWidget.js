const PHONE_NUMBER = ''
const WHATSAPP_NUMBER = ''
const TELEGRAM_NUMBER = ''
const EMAIL_ADDRESS = ''

const html = '<style>.chat-hidden{display:none}</style>' +
    '<div style="position:fixed;bottom:50px;right:50px;">' +
        '<a href="javascript:void(0);" onclick="showContactMethods()">' +
            '<img title="Contact with us" src="./src/images/contact.png" style="height:90px" />' +
        '</a>' +
        '<div id="chat-container" class="chat-hidden">chat-hidden</div>' +
    '</div>'

window.onload = function () {
    document.body.innerHTML += html
}

function showContactMethods()
{
    const chatContainer = document.getElementById('chat-container')

    if(chatContainer.classList.contains('chat-hidden')){
        chatContainer.classList.remove('chat-hidden')
    }else{
        chatContainer.classList.add('chat-hidden')
    }
    console.log('click')
}
