import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { format } from 'date-fns';

import {
  Container,
  EpisodeContainer,
  EpisodeLabel,
  Episode,
  DataWrapper,
  Title,
  ReleaseDate,
} from './FilmListItem.elements';
import FilmModel from '../../store/FilmModel';

const FilmListItem: React.FC<{
  onPress: (film: FilmModel) => void;
  film: FilmModel;
}> = (props) => {
  const handlePress = useCallback(() => {
    props.onPress(props.film);
  }, [props.film]);

  return (
    <Container onPress={handlePress}>
      <EpisodeContainer>
        <Episode>{props.film.episodeNumber}</Episode>
        <EpisodeLabel>Episode</EpisodeLabel>
      </EpisodeContainer>
      <DataWrapper>
        <Title>{props.film.title}</Title>

        <ReleaseDate>{`Released in ${format(
          props.film.releaseDate,
          'yyyy',
        )}`}</ReleaseDate>
      </DataWrapper>
    </Container>
  );
};

export default observer(FilmListItem);
