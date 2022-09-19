import {
    CONTACT_US_CLOSE_LABEL,
    CONTACT_US_ICON_LABEL
} from './config'

export function toggleContactMethods() {
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
