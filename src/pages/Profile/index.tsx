import React from 'react';
import { useParams } from 'react-router-dom';

import { 
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab
 } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';
// import LoadingPage from '../../components/LoadingPage';

import { APIUser, APIRepo } from '../../@types';
import { useFetch } from '../../hooks/useFetch';

interface DataProps {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username = 'r3nanp' } = useParams();

  const { data } = useFetch<DataProps>(`https://api.github.com/users/${username}`);
  const { data: repos } = useFetch<DataProps>(`https://api.github.com/users/${username}/repos`);

  // if (data?.error) {
  //   return <h1>{data.error}</h1>
  // }

  if (!data?.user || !repos?.repos) {
    return <p>Carregando</p>
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">{data.user?.public_repos}</span>
    </div>
  );
  
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset"/>
          <TabContent />
        </div>
    
        <span className="line"/>
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
          <h2>Random Repos</h2>

          <div>
            {repos.repos.map((item) => (
              <RepoCard
                key={item.name}
                username={item.owner.login}
                reponame={item.name}
                description={item.description}
                language={item.language}
                stars={item.stargazers_count}
                forks={item.forks}
              />
            ))}
          </div>
          </Repos>
          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;