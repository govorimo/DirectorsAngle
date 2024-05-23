import React from 'react';

import {ImageSourcePropType} from 'react-native';

import {MediaType} from '../../types/mediaType';
import {Media} from '../../types/models/media';
import MediaCard from '../MediaCard';

interface FilmCardProps {
  film: Media;
  loading?: boolean;
  titleColor?: string;
  yearColor?: string;
  onPress: () => void;
  showDescription?: boolean;
  defaultImage?: ImageSourcePropType;
}

const FilmCard: React.FC<FilmCardProps> = ({film, ...props}) => (
  <MediaCard {...props} item={film} type={MediaType.FILM} />
);

export default FilmCard;
