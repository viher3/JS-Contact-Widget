export const PHONE_NUMBER = '123456789'

export const WHATSAPP_COUNTRY_PREFIX = '34'
export const WHATSAPP_NUMBER = '123456789'
export const WHATSAPP_DEFAULT_MESSAGE = 'Hello!'

export const TELEGRAM_CHANNEL_NAME = '123456789'

export const EMAIL_ADDRESS = 'hello@reaccionestudio.com'

export const ICONS_HEIGHT = 80
export const CONTAINER_WIDTH = 80
export const CONTACT_US_ICON_LABEL = 'Contact us'
export const CONTACT_US_CLOSE_LABEL = 'Close'

export const CONTACT_METHODS = [
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
