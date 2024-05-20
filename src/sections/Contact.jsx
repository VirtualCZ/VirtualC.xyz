import { useEffect, useState } from 'react';

import { API } from 'aws-amplify';
import { useTranslation } from 'react-i18next';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = ({ checked, toggleChecked }) => {
  const { t } = useTranslation();
  document.title = `${t('navigation.components')} - VirtualC`;

  return (
    <section id='contact'>
      <Row>
        <Col>
          <Card body>
            <Stack gap={2}>
              <h1 className='text-center'>CONTACT ME</h1>
              <p className='text-center'>If You Are Interested In A Web Page Contact Me Using The Form Below</p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" placeholder='Write Message...' />
                </Form.Group>
                <div className='d-flex justify-content-center'>
                  <Button variant="info" type="submit">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Stack>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
