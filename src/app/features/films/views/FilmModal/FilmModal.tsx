import React, { useEffect, useMemo, useRef, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { Modalize } from 'react-native-modalize';
import { format } from 'date-fns';

import useThrottledCallback from '../../../../../lib/useThrottledCallback';

import {
  HANDLE_STYLE,
  Logo,
  Crawl,
  Content,
  Loader,
  Title,
  Label,
  Field,
  Episode,
  MODAL_HEIGHT,
  MODAL_STYLE,
  Divider,
  CharacterField,
} from './FilmModal.elements';
import FilmModel from '../../store/FilmModel';
import FilmModalStore from './FilmModal.store';

const FilmModal: React.FC<{
  film: FilmModel | null;
  onClose?: () => void;
}> = (props) => {
  const store = useMemo<FilmModalStore | null>(
    () => (props.film ? new FilmModalStore(props.film) : null),
    [props.film],
  );
  const modalRef = useRef<typeof Modalize>(null);

  const handleClose = useThrottledCallback(() => {
    if (props.onClose) {
      props.onClose();
    }
  }, [props.onClose]);

  useEffect(() => {
    if (props.film) {
      modalRef.current?.open();
    }
  }, [props.film]);

  const renderContentField = (label: string, value: string) => (
    <>
      <Label>{label}</Label>
      <Field>{value}</Field>
      <Divider />
    </>
  );

  const renderModalContent = () => (
    <>
      <Logo />
      <Crawl>{props.film?.openingCrawl}</Crawl>

      <Content>
        {renderContentField(
          'Release date',
          (props.film && format(props.film?.releaseDate, 'dd.MM.yyyy')) || '',
        )}
        {renderContentField('Director', props.film?.director || '')}
        {renderContentField('Producer', props.film?.producer || '')}

        <Label>Top Characters</Label>
        {props.film?.characters.map((character, index) => (
          <CharacterField
            key={`character_${index}`}
            title={character.name}
            subtitle={[
              `gender - ${character.gender}`,
              `mass - ${character.mass}`,
              `height - ${character.height}`,
            ].join('     ')}
          />
        ))}
      </Content>
    </>
  );

  const renderHeaderComponent = useCallback(
    () =>
      store?.isLoading ? null : (
        <>
          <Episode>{`Episode ${props.film?.episodeNumber}`}</Episode>
          <Title>{props.film?.title}</Title>
        </>
      ),
    [props.film, store?.isLoading],
  );

  if (!props.film || !store) return null;

  return (
    <Modalize
      ref={modalRef}
      onClose={handleClose}
      handlePosition={'outside'}
      withHandle
      modalHeight={MODAL_HEIGHT}
      modalStyle={MODAL_STYLE}
      handleStyle={HANDLE_STYLE}
      HeaderComponent={renderHeaderComponent}
    >
      {store.isLoading ? <Loader /> : renderModalContent()}
    </Modalize>
  );
};

export default observer(FilmModal);
