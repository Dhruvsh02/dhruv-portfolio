import emailjs from '@emailjs/browser'

const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY // api 
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

emailjs.init(PUBLIC_KEY)

export async function sendEmail({ name, email, message }) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      title:   'Portfolio Contact',
      name:    name,
      time:    new Date().toLocaleString('en-IN'),
      message: message,
      email:   email,
    },
    PUBLIC_KEY
  )
}
