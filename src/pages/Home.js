import { useEffect, useState } from 'react';

import CheckBox from '../elements/checkbox/CheckBox';
import DropdownButton from '../elements/dropdownButton/DropdownButton';
import RadioButton from '../elements/radioButton/RadioButton';
import Rating from '../elements/rating/Rating';
import Slider from '../elements/slider/Slider';
import TextInput from '../elements/textInput/TextInput';
import ToggleSwitch from '../elements/toggleSwitch/ToggleSwitch';
import News from '../elements/news/News';
import { API } from 'aws-amplify';
import Construction from '../elements/Construction';
import Card from '../elements/card/Card';
import CardHolder from '../elements/card/CardHolder';
import { useTranslation } from 'react-i18next';

const Home = ({ checked, toggleChecked }) => {
  const { t } = useTranslation();
  document.title = `${t('navigation.home')} - VirtualC`;
  const [inputValue, setInputValue] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [ratingValue, setRatingValue] = useState(0);

  const myAPI = 'api949e256f';
  const path = '/customers';

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    console.log('Star rating: ', ratingValue);
    // Do whatever you want with the input and rating values here
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // const handleRatingChange = (event) => {
  //   setRatingValue(event.target.value);
  // };

  const [input, setInput] = useState('');
  const [customers, setCustomers] = useState([]);

  //Function to fetch from our backend and update customers array
  function getCustomer(e) {
    let customerId = e.input;
    API.get(myAPI, path + '/' + customerId)
      .then((response) => {
        console.log(response);
        let newCustomers = [...customers];
        newCustomers.push(response);
        setCustomers(newCustomers);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {/* <Construction /> */}
      <h1>{t('navigation.home')}</h1>

      <CardHolder>
        <Card>
          <p>Test</p>
        </Card>
        <Card>
          <p>of</p>
        </Card>
        <Card>
          <p>card (overflow)(overflow)(overflow)(overflow)(overflow)</p>
        </Card>
        <Card>
          <p>row</p>
        </Card>
      </CardHolder>

      <CardHolder>
        <Card>
          <form onSubmit={handleSubmit}>
            <Slider
              value={sliderValue}
              onChange={(event) => {
                setSliderValue(event.target.value);
              }}
            />

            <Rating value={ratingValue} setValue={setRatingValue} />

            <DropdownButton
              name='Normal'
              options={[
                {
                  option: 'Option 1',
                  onClick: () => {
                    console.log('skskssk');
                  },
                },
                {
                  option: 'Option 2',
                  href: 'https://www.google.com/',
                  onClick: () => {
                    console.log('pspsps');
                  },
                },
                {
                  option: 'Option 3',
                  href: 'https://www.google.com/',
                  onClick: () => {
                    console.log('grgrgr');
                  },
                },
              ]}
            />
            <DropdownButton
              name='Centered'
              centered={true}
              options={[
                {
                  option: 'Option 1 center',
                  onClick: () => {
                    console.log('skskssk');
                  },
                },
                {
                  option: 'Option 2',
                  href: 'https://www.google.com/',
                  onClick: () => {
                    console.log('pspsps');
                  },
                },
                {
                  option: 'Option 3',
                  href: 'https://www.google.com/',
                  onClick: () => {
                    console.log('grgrgr');
                  },
                },
              ]}
            />
            <DropdownButton
              name='Selectable'
              selectable={true}
              options={[
                {
                  option: 'Option 1',
                  onClick: () => {
                    console.log('skskssk');
                  },
                },
                {
                  option: 'Option 2',
                  href: 'https://www.google.com/',
                  onClick: () => {
                    console.log('pspsps');
                  },
                },
                {
                  option: 'Option 3',
                  href: 'https://www.google.com/',
                  onClick: () => {
                    console.log('grgrgr');
                  },
                },
              ]}
            />

            <DropdownButton
              name='Selectable centered'
              selectable={true}
              centered={true}
              options={[
                {
                  option: 'Option 1 center',
                  onClick: () => {
                    console.log('skskssk');
                  },
                },
                {
                  option: 'Option 2',
                  href: 'https://www.google.com/',
                  onClick: () => {
                    console.log('pspsps');
                  },
                },
                {
                  option: 'Option 3',
                  href: 'https://www.google.com/',
                  onClick: () => {
                    console.log('grgrgr');
                  },
                },
              ]}
            />

            <ToggleSwitch
              label='Toggle Theme'
              id='theme-toggle'
              checked={checked}
              onChange={toggleChecked}
            />

            <ToggleSwitch label='Toggle Switch' id='switch-toggle' />
            <RadioButton />

            <CheckBox />

            <TextInput
              label='Name:'
              placeholder='Enter your name'
              value={inputValue}
              onChange={handleInputChange}
            />

            <input type='submit' value='Submit' />
          </form>
        </Card>
      </CardHolder>

      <CardHolder>
        <Card>
          <h1 id='text-output'>{inputValue}</h1>
        </Card>
      </CardHolder>

      <CardHolder>
        <Card>
          <News />
        </Card>
      </CardHolder>

      <CardHolder>
        <Card>
          <h2 className='xl'>1920 (xl)</h2>
          <h2 className='md'>1440 (md)</h2>
          <h2 className='sm'>960 (sm)</h2>

          <p>
            Normal <a href='/'>Strong</a> p text and{' '}
            <a className='disabled' href='/'>
              disabled
            </a>
            hyperlink
          </p>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <p>
            Normal <strong>Strong</strong> p text
          </p>
          <p className='caption'>Caption text</p>

          <h2>API </h2>
          <div>
            <input
              placeholder='customer id'
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <br />
          <button onClick={() => getCustomer({ input })}>
            Get Customer From Backend
          </button>

          <h2
            style={{ visibility: customers.length > 0 ? 'visible' : 'hidden' }}
          >
            Response
          </h2>
          {customers.map((thisCustomer, index) => {
            return (
              <div key={thisCustomer.customerId}>
                <span>
                  <b>CustomerId:</b> {thisCustomer.customerId} -{' '}
                  <b>CustomerName</b>: {thisCustomer.customerName}
                </span>
              </div>
            );
          })}
        </Card>
      </CardHolder>
    </>
  );
};

export default Home;
