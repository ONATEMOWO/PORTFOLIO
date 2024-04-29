import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
          <ContactInfoCard
          iconUrl="src/assets/211604_email_icon.png"
          text="folutek@gmail.com"
          />
          <ContactInfoCard
          iconUrl="src/assets/github.svg"
          text="https://github.com/ONATEMOWO"
          />
          <div style={{flex: 1}}>
            <ContactForm />
          </div>
        </div>
    </section>
  )
}

export default ContactMe
