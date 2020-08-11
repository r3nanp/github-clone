import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'r3nanp'}
            name={'Renan Pereira'}
            avatarUrl={'https://avatars3.githubusercontent.com/u/47953339?s=400&u=05e4e77779f7fdc2f7c033089fb58b1bf4bd7231&v=4t.com/u/47953339?s=460&v=4'}
            followers={50}
            following={23}
            company={undefined}
            location={'Fortaleza, Brazil'}
            email={'renanmol87@gmail.com'}
            blog={'https://www.linkedin.com/in/renan-pereira-968bb61b0/'}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random Repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username={'r3nanp'}
                  reponame={'twitter-clone'}
                  description={'Um clone do Twitter feito em ReactJS, projeto resultado do UI Clone da Rocketseat.'}
                  language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
                  stars={0}
                  forks={2}
                />

              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;