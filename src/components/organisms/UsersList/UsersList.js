import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle } from './UserList.styles';
import { ViewTemplate as Wrapper } from 'components/templates/ViewTemplate/ViewTemplate.styles';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Users List</StyledTitle>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem
              deleteUser={deleteUser}
              index={i}
              key={userData.name}
              userData={userData}
            />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
