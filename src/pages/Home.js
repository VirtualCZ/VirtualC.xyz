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
  document.title = `${t('navigation.components')} - VirtualC`;
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
      <h1>{t('navigation.home')}</h1>
      <Construction />
      <CardHolder>
        <Card>
          <h1>Hey, I'm Tomáš Gabriel...</h1>
        </Card>
        <Card>
          <h2>...and I like to code!</h2>
        </Card>
      </CardHolder>
    </>
  );
};

export default Home;
