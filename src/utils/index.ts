import {ImageSourcePropType, Linking} from 'react-native';

export const openExternalLink = (url: string) => {
  Linking.canOpenURL(url)
    .then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Opening URL not supported: " + url);
      }
    })
    .catch(err => console.error('An error occurred', err));
};

export const calculateDecadesActive = (yearsActive: string) => {
  const [start, end] = yearsActive.split('-').map(year => parseInt(year, 10));
  const decades: string[] = [];
  for (
    let year = start;
    year <= (end || new Date().getFullYear());
    year += 10
  ) {
    const decade = `${Math.floor(year / 10) * 10}s`;
    if (!decades.includes(decade)) {
      decades.push(decade);
    }
  }
  return decades;
};

export interface ImageSource {
  uri: string;
}

type Thumbnail = string | ImageSource;

export const getImageSource = (
  thumbnail: Thumbnail | undefined,
  defaultImage: ImageSourcePropType,
): ImageSourcePropType => {
  if (typeof thumbnail === 'string' && thumbnail.startsWith('http')) {
    return {uri: thumbnail};
  } else {
    return (thumbnail as ImageSourcePropType) || defaultImage;
  }
};
