import { useEffect, useState } from 'react';

import { API } from 'aws-amplify';
import { useTranslation } from 'react-i18next';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

const Projects = ({ checked, toggleChecked }) => {
  const { t } = useTranslation();
  document.title = `${t('navigation.components')} - VirtualC`;

  return (
    <section
      id='projects'
      style={{ paddingTop: '109px' }}
      className='d-flex flex-column'
    >
      <Stack gap={3}>
        <Card body style={{ maxWidth: 'fit-content' }}>
          <h2>Web projects</h2>
        </Card>
        <Row>
          <Col lg={12}>
            <Card body >
              <p>
                I'm Tomáš Gabriel. I am from Czechia, and I studied IT at a high
                school located in Uherské Hradiště called OAUH.
              </p>
              <p>
                Here are some of my accounts, which you might find interesting:
              </p>
            </Card>
          </Col>
        </Row>
      </Stack>
    </section>
  );
};

export default Projects;
