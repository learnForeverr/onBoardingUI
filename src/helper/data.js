import {Dimensions} from 'react-native';
import FirstSlide from '../svgIcons/FirstSlide';
import SecondSlide from '../svgIcons/SecondSlide';
import ThirdSlide from '../svgIcons/ThirdSlide';

export const data = [
  {
    id: 1,
    title: 'Set Your Goals',
    icon: FirstSlide,
    color: '#0e2a57',
    description: 'A goal without plan is only a dream',
  },
  {
    id: 2,
    title: 'Work On Your Agenda',
    icon: SecondSlide,
    color: '#223d3a',
    description: 'The secret of your success is determined by your agenda',
  },
  {
    id: 3,
    title: 'Analyse In Details',
    icon: ThirdSlide,
    color: '#522a14',
    description: 'The more you analyse, the more you learn',
  },
];

export const _WIDTH = Dimensions.get('window').width;
export const _HEIGHT = Dimensions.get('window').height;

export const interpolation = data.map((_, i) => i * _WIDTH);
