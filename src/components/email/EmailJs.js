import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './emailUs.css'

export default function ContactUs() {
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ksb6abn', 'template_pye18i9', form.current, '-S0HOz513PBA-eNvm')
      .then((result) => {
        if (result.status === 200) {
          name.current.value = ''
          email.current.value = ''
          message.current.value = ''
          alert('邮箱已发送')
        }
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='info-from-background'>
      <form className='info-from' ref={form} onSubmit={sendEmail}>
        <div className='inro-from-wrap'>
          <h3>Input Your Info</h3>
          <label className='info-name-title' for='user_name'>Name</label>
          <input placeholder='please input your name' className='info-name' ref={name} type="text" id='user_name' name="user_name" />
          <label className='info-email-title' for='user_email'>Email</label>
          <input placeholder='please input your email' className='info-email' ref={email} type="email" id='user_email' name="user_email" />
          <label className='info-message-title' for='message'>Message</label>
          <textarea className='info-message' ref={message} id='message' name="message" />
          <input className='info-submit' type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};