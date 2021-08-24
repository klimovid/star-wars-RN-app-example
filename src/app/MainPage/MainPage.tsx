import React, { useCallback, useState } from 'react';
import FilmModel from '../features/films/store/FilmModel';
import FilmList from '../features/films/views/FilmList';
import FilmModal from '../features/films/views/FilmModal';

import { Container, LogoWrapper, Logo } from './MainPage.elements';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  const [selectedFilm, setSelectedFilm] = useState<FilmModel | null>(null);

  const handleNavigateToFilm = useCallback((film: FilmModel) => {
    setSelectedFilm(film);
  }, []);

  const handleFilmModalClose = useCallback(() => {
    setSelectedFilm(null);
  }, []);

  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <FilmList onNavigateToFilm={handleNavigateToFilm} />
      <FilmModal film={selectedFilm} onClose={handleFilmModalClose} />
    </Container>
  );
};

export default MainPage;
