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
    <section
      id='contact'
      style={{ paddingTop: '109px' }}
      className='d-flex flex-column'
    >
      <Stack gap={3}>
        <Card body style={{ maxWidth: 'fit-content' }}>
          <h2>Contact me</h2>
        </Card>
        <Row>
          <Col lg={12}>
            <Card body>
              <Card.Text>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Enter Your Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder='Write Message...' />
                  </Form.Group>
                  <div className='d-flex justify-content-center'>
                    <Button variant="info" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Stack>
    </section>
  );
};

export default Contact;
