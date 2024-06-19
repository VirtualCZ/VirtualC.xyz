import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useTranslation } from 'react-i18next';

import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = ({ contactSection }) => {
  const { t } = useTranslation();

  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "g")

  const [formData, setFormData] = useState(
    {
      email: "",
      subject: "",
      text: "",
    }
  )

  const [touched, setTouched] = useState(
    {
      email: false,
      subject: false,
      text: false,
    }
  )

  const chngFn = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
  if (form.checkValidity() === false) {
    e.stopPropagation();
    setTouched({
      email: true,
      subject: true,
      text: true,
    })
  }
  if (form.checkValidity() === true) {
    emailJS(form)
    setFormData({
      email: "",
      subject: "",
      text: "",
    })
    setTouched({
      email: false,
      subject: false,
      text: false,
    })
    }
  }

  const emailJS = (superforma) => {
    // https://dashboard.emailjs.com/admin
    emailjs
    .sendForm(import.meta.env.VITE_EMAILJS_SERVICE, import.meta.env.VITE_EMAILJS_TEMPLATE, superforma, {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('Email sent!');
      },
      (error) => {
        console.log('Request failed...', error.text);
      },
    );
  }

  return (
    <section 
      id='contact'
      ref={contactSection}
    >
      <Card body>
        <Stack gap={2}>
          <h1 className='text-center'>CONTACT ME</h1>
          <p className='text-center'>If You Are Interested In A Web Page Contact Me Using The Form Below</p>
          <Form id="contact-form" noValidate onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={chngFn}
                required
                onBlur={()=>setTouched({...touched, email:true})}
                isInvalid={
                    touched.email &&
                    !regex.test(formData.email)
                }
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                placeholder="Enter Your Subject"
                value={formData.subject}
                onChange={chngFn}
                required
                minLength={4}
                onBlur={()=>setTouched({...touched, subject:true})}
                isInvalid={
                  touched.subject &&
                  formData.subject.length < 4
                }
              />
              <Form.Control.Feedback type="invalid">
                Please enter a subject that's longer than 3 letters.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                name="text"
                placeholder='Write Message...'
                value={formData.text}
                onChange={chngFn}
                required
                minLength={4}
                onBlur={()=>setTouched({...touched, text:true})}
                isInvalid={
                  touched.text &&
                  formData.text.length < 4
                }
              />
              <Form.Control.Feedback type="invalid">
                Please enter text that's longer than 3 letters.
              </Form.Control.Feedback>
            </Form.Group>
            <div className='d-flex justify-content-center'>
              <Button variant="info" type="submit">
                Send Message
              </Button>
            </div>
          </Form>
        </Stack>
      </Card>
    </section>
  );
};

export default Contact;
