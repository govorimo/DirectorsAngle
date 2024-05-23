import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ReduxProvider} from '../store';
import {colors} from '../styles';
import getTabBarIcon from '../styles/getTabBarIcons';
import {BottomTabParamList} from '../types/navigation';

import {
  DirectorsAngleNavigator,
  FilmsNavigator,
  InterviewsNavigator,
} from './navigators';
import {getTabBarStyle, tabBarLabelStyle} from './styles';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = () => {
  const insets = useSafeAreaInsets();
  const bottomInsets = insets.bottom;

  return (
    <ReduxProvider>
      <BottomTab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => getTabBarIcon({route, focused}),
          headerShown: false,
          tabBarActiveTintColor: colors.lightBlue,
          tabBarInactiveTintColor: colors.charcoal,
          tabBarLabelStyle: tabBarLabelStyle,
          tabBarStyle: getTabBarStyle(bottomInsets),
        })}>
        <BottomTab.Screen
          name="DirectorsTab"
          component={DirectorsAngleNavigator}
          options={{tabBarLabel: 'Directors'}}
        />
        <BottomTab.Screen
          name="FilmsTab"
          component={FilmsNavigator}
          options={{tabBarLabel: 'Films'}}
        />
        <BottomTab.Screen
          name="InterviewsTab"
          component={InterviewsNavigator}
          options={{tabBarLabel: 'Interviews'}}
        />
      </BottomTab.Navigator>
    </ReduxProvider>
  );
};

export default BottomTabs;
