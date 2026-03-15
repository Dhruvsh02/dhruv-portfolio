import emailjs from '@emailjs/browser'

const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

emailjs.init(PUBLIC_KEY)

/**
 * Sends an email via EmailJS.
 * @param {{ name: string, email: string, message: string }} formData
 * @returns {Promise}
 */
export async function sendEmail({ name, email, message }) {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    from_name:  name,
    from_email: email,
    message,
    to_name:    'Dhruv',
  })
}