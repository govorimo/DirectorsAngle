import React from 'react';

import {Text} from 'react-native';

import InfoDictionary from '../../../../components/InfoDictionary';
import {BORN_CAPTION, YEARS_ACTIVE_CAPTION} from '../../../../constants';

import {getStyles} from './styles';

interface MainInfoProps {
  name: string;
  city: string;
  country: string;
  yearsActive: string;
}

const MainInfo: React.FC<MainInfoProps> = ({
  name,
  city,
  country,
  yearsActive,
}) => {
  const styles = getStyles();

  return (
    <>
      <Text style={styles.detailsName}>{name}</Text>
      <InfoDictionary caption={BORN_CAPTION} value={`${city}, ${country}`} />
      <InfoDictionary caption={YEARS_ACTIVE_CAPTION} value={yearsActive} />
    </>
  );
};

export default MainInfo;
