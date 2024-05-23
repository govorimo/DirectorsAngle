import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ContextProvider from '../context/contextProvider';
import Biography from '../screens/Biography';
import Director from '../screens/Director';
import DirectorsAngle from '../screens/DirectorsAngle';
import DirectorsFilter from '../screens/DirectorsFilter';
import Film from '../screens/Film';
import Films from '../screens/Films';
import Interview from '../screens/Interview';
import Interviews from '../screens/Interviews';
import {RootStackParamList, Routes} from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const DirectorsAngleNavigator = () => {
  return (
    <ContextProvider>
      <Stack.Navigator
        initialRouteName={Routes.DIRECTORS_ANGLE}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={Routes.DIRECTORS_ANGLE}
          component={DirectorsAngle}
        />
        <Stack.Screen name={Routes.DIRECTOR} component={Director} />
        <Stack.Screen name={Routes.BIOGRAPHY} component={Biography} />
        <Stack.Screen name={Routes.INTERVIEW} component={Interview} />
        <Stack.Screen
          name={Routes.FILTER_DIRECTORS}
          component={DirectorsFilter}
        />
        <Stack.Screen name={Routes.FILM} component={Film} />
      </Stack.Navigator>
    </ContextProvider>
  );
};

export const FilmsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.FILMS}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.FILMS} component={Films} />
      <Stack.Screen name={Routes.FILM} component={Film} />
    </Stack.Navigator>
  );
};

export const InterviewsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.INTERVIEWS}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.INTERVIEWS} component={Interviews} />
      <Stack.Screen name={Routes.INTERVIEW} component={Interview} />
    </Stack.Navigator>
  );
};
