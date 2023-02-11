import React from 'react';
import { useNavigate } from 'react-router-dom';
import GetStartedBanner from '../assets/GetStartedBanner.svg';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Text from '../components/Text';
import Title from '../components/Title';
import styles from './GetStarted.module.css';

function GetStarted() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <section className={ styles.container }>
      <Banner image={ GetStartedBanner } alt="homem sentado na cadeira" />
      <Title title="Get things done with TODo" />
      <Text
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo numquam
        vitae sed esse aliquid asperiores minus necessitatibus tempore, animi
        odit expedita saepe iste ut natus, harum atque rerum voluptatibus
        explicabo."
      />
      <Button onClick={ handleClick }>
        Get Started
      </Button>
    </section>
  );
}

export default GetStarted;
