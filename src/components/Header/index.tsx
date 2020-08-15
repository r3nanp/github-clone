import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GithubLogo, SearchForm } from './styles';
import { ThemeName } from '../../styles/themes';

interface ThemeProps {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<ThemeProps> = ({
  themeName,
  setThemeName
}) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate('/' + search.toLowerCase().trim());
  }

  function switchTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return(
    <Container>
      <GithubLogo onClick={switchTheme}/>
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter username or repo..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
} 

export default Header;