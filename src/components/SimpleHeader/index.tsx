import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {Text, View, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import BackArrow from '../../../assets/icons/back-arrow.svg';

import {styles as getStyles} from './styles';


interface SimpleHeaderProps {
  title: string;
  showBackButton?: boolean;
  titleIsBold?: boolean;
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({
  title,
  showBackButton,
  titleIsBold,
}) => {
  const navigation = useNavigation();

  const handleOnPressBackArrow = () => {
    navigation.goBack();
  };

  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  const styles = getStyles(
    statusBarHeight,
    showBackButton as boolean,
    titleIsBold as boolean,
  );

  return (
    <View style={styles.header}>
      {showBackButton ? (
        <Pressable onPress={handleOnPressBackArrow}>
          <BackArrow style={styles.backArrow} />
        </Pressable>
      ) : null}
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default SimpleHeader;
