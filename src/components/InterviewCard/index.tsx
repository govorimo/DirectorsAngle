import React from 'react';

import {images} from '../../constants';
import {MediaType} from '../../types/mediaType';
import {Media} from '../../types/models/media';
import MediaCard from '../MediaCard';

interface InterviewCardProps {
  interview: Media;
  loading?: boolean;
  titleColor?: string;
  yearColor?: string;
  onPress: () => void;
  showDescription?: boolean;
}

const InterviewCard: React.FC<InterviewCardProps> = ({interview, ...props}) => (
  <MediaCard
    {...props}
    item={interview}
    defaultImage={images.tommy}
    showDescription
    type={MediaType.INTERVIEW}
  />
);

export default InterviewCard;
