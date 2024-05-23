import {fontFamily, fontSize, padding} from '../styles';

const bottomTabsHeight = 60;

export const tabBarLabelStyle = {
  fontSize: fontSize.small,
  fontFamily: fontFamily.raleway.medium,
  paddingHorizontal: padding.small,
  paddingTop: padding.xxsmall,
  paddingBottom: padding.small,
};

export const getTabBarStyle = (bottomInsets: number) => {
  return {
    height: bottomTabsHeight + bottomInsets,
    paddingVertical: padding.small,
  };
};
