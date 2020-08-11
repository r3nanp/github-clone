import React from 'react';

import { 
  Container,
  Flex,
  Avatar,
  Row,
  PeopleIcon,
  Column,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon,
 } from './styles';

interface ProfileDataProps {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
}

const ProfileData: React.FC<ProfileDataProps> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog,
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={username} />

        <div>
          <h1>{username}</h1>
          <h2>{name}</h2>
        </div>
      </Flex>

      <Row>
        <li>
          <PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>

        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
      </Row>

      <Column>
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}

        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}

        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}

        {blog && (
          <li>
            <BlogIcon />
            <span>{blog}</span>
          </li>
        )}
      </Column>
    </Container>
  );
}

export default ProfileData;