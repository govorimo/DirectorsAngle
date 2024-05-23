import React, {useRef} from 'react';

import {RouteProp} from '@react-navigation/native';
import {Text, Image, ScrollView, View, Animated} from 'react-native';

import Error from '../../components/Error';
import Loading from '../../components/Loading';
import {
  getToKnowMoreAbout,
  learnSomethingAboutHisFilms,
  usefulSpacesWhereYouCanLearn,
} from '../../constants';
import {Media} from '../../types/models/media';
import {RootStackParamList} from '../../types/navigation';

import FeaturedSection from './components/FeaturedSection';
import Header from './components/Header';
import LearnMoreLinks from './components/LearnMore';
import MainInfo from './components/MainInfo';
import ShortBiography from './components/ShortBiography';
import useFetchDirector, {useGroupedData} from './hooks';
import {styles as getStyles} from './styles';

enum FeaturedSectionType {
  INTERVIEWS = 'Interviews',
  FILMS = 'Films',
}

type DirectorRouteProp = RouteProp<RootStackParamList, 'Director'>;

interface DirectorProps {
  route: DirectorRouteProp;
}

function Director({route}: DirectorProps) {
  const {slug} = route.params;

  const scrollY = useRef(new Animated.Value(0)).current;

  const {director, loading, error, retryFetchDirector} = useFetchDirector(slug);

  const styles = getStyles();

  const pageSize = 4;
  const groupedInterviews: Media[][] = useGroupedData(
    director?.interviews as Media[],
    pageSize,
  );

  const groupedFilms: Media[][] = useGroupedData(
    director?.films as Media[],
    pageSize,
  );

  if (loading) {
    return <Loading />;
  }

  if (error || !director) {
    return <Error handleOnPressRetry={retryFetchDirector} />;
  }

  return (
    <View style={styles.detailsContainer}>
      <Header scrollY={scrollY} directorName={director.name} />
      <ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}>
        <Image source={{uri: director.image}} style={styles.directorImage} />
        <View style={styles.detailsContent}>
          <MainInfo
            name={director.name}
            city={director.city}
            country={director.country}
            yearsActive={director.yearsActive}
          />
          <ShortBiography director={director} />
          <FeaturedSection
            data={groupedInterviews}
            type={FeaturedSectionType.INTERVIEWS}
            numOfItems={director.interviews.length}
            caption={getToKnowMoreAbout(director.firstName)}
          />
          <FeaturedSection
            data={groupedFilms}
            type={FeaturedSectionType.FILMS}
            numOfItems={director.films.length}
            caption={learnSomethingAboutHisFilms}
          />
          <Text style={styles.helperText}>
            {usefulSpacesWhereYouCanLearn(director.firstName)}
          </Text>
          {director.learnMore && <LearnMoreLinks links={director.learnMore} />}
        </View>
      </ScrollView>
    </View>
  );
}

export default Director;
