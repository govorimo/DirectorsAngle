import React from 'react';

import {RouteProp} from '@react-navigation/native';

import DirectorsIcon from '../../assets/icons/directors_icon.svg';
import DirectorsIconActive from '../../assets/icons/directors_icon_active.svg';
import FilmsIcon from '../../assets/icons/films_icon.svg';
import FilmsIconActive from '../../assets/icons/films_icon_active.svg';
import InterviewsIcon from '../../assets/icons/interviews_icon.svg';
import InterviewsIconActive from '../../assets/icons/interviews_icon_active.svg';

type RouteName = 'DirectorsTab' | 'FilmsTab' | 'InterviewsTab';

type TabBarIconProps = {
  route: RouteProp<{[key in RouteName]: undefined}, RouteName>;
  focused: boolean;
};

const getTabBarIcon: React.FC<TabBarIconProps> = ({route, focused}) => {
  if (route.name === 'DirectorsTab') {
    return focused ? (
      <DirectorsIconActive width={22} />
    ) : (
      <DirectorsIcon width={22} />
    );
  }
  if (route.name === 'FilmsTab') {
    return focused ? <FilmsIconActive width={22} /> : <FilmsIcon width={22} />;
  }
  if (route.name === 'InterviewsTab') {
    return focused ? (
      <InterviewsIconActive width={22} />
    ) : (
      <InterviewsIcon width={22} />
    );
  }
  return null;
};

export default getTabBarIcon;
