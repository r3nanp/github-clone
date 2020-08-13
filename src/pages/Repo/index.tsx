import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import {
   Container,
   BreadCrumb,
   RepoIcon,
   Stats,
   StarIcon,
   ForkIcon,
   LinkButton,
   GithubIcon
 } from './styles';

 import { APIRepo } from '../../@types';

interface Data {
  repo?: APIRepo;
  error?: string;
}

const Repo: React.FC = () => {
  const { username, reponame } = useParams();
  const [data, setData] = useState<Data>();

  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        <Link className={'username'} to={`/${username}`}>
          r3nanp
        </Link>
        <span>/</span>

        <Link className={'reponame'} to={`/${username}/${reponame}`}>
          twitter-clone
        </Link>
      </BreadCrumb>

      <p>
        Um clone do Twitter feito em ReactJS, projeto resultado do UI Clone da Rocketseat.
      </p>

      <Stats>
        <li>
          <StarIcon />
          <b>1</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/r3nanp/twitter-clone'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;