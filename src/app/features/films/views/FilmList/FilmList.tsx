import React, { useCallback, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { Animated } from 'react-native';

import useThrottledCallback from '../../../../../lib/useThrottledCallback';
import rootStore from '../../../../rootStore/root.store';

import FilmListItem from '../FilmListItem';
import {
  Container,
  List,
  Divider,
  Loader,
  NoResultsWrapper,
  NoResultsText,
} from './FilmList.elements';
import FilmModel from '../../store/FilmModel';

const FilmsList: React.FC<{
  onNavigateToFilm: (film: FilmModel) => void;
}> = (props) => {
  const scrollY = useMemo(() => new Animated.Value(0), []);
  const scrollListener = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: true,
    },
  );

  useEffect(() => {
    rootStore.films.loadFilms();
  }, []);

  const keyExtractor = useCallback((film: FilmModel) => String(film.id), []);

  const handleItemPress = useThrottledCallback(
    (film: FilmModel) => {
      props.onNavigateToFilm(film);
    },
    [props.onNavigateToFilm],
  );

  const handleRefresh = useCallback(() => {
    rootStore.films.refreshFilms();
  }, []);

  const noResultsWrapperStyle = useMemo(() => {
    return {
      opacity: scrollY.interpolate({
        inputRange: [-30, 0],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
    };
  }, [scrollY]);

  const renderEmptyComponent = useCallback(() => {
    if (rootStore.films.isFetching && !rootStore.films.isRefreshing)
      return <Loader />;

    return (
      <NoResultsWrapper style={noResultsWrapperStyle}>
        <NoResultsText>
          {rootStore.films.isFetchedWithError
            ? 'It is failed to load films'
            : 'No films about StarWars ((( yet'}
        </NoResultsText>
      </NoResultsWrapper>
    );
  }, [scrollY, rootStore.films.isFetchedWithError, rootStore.films.isFetching]);

  const renderItem = useCallback((row: { item: FilmModel; index: number }) => {
    return (
      <FilmListItem
        key={`film_${row.index}`}
        film={row.item}
        onPress={handleItemPress}
      />
    );
  }, []);

  return (
    <Container>
      <List<any>
        data={rootStore.films.filmsList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmptyComponent}
        ItemSeparatorComponent={Divider}
        refreshing={rootStore.films.isRefreshing}
        onRefresh={handleRefresh}
        showsVerticalScrollIndicator={false}
        onScroll={scrollListener}
      />
    </Container>
  );
};

export default observer(FilmsList);
