import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';
import { StyledList } from './UserList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState({
    name: '',
    attendance: '',
    average: '',
  });

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Wrapper>
        <FormField
          label="Name"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <FormField
          label="Attendance"
          id="attendance"
          name="attendance"
          value={formValues.attendance}
          onChange={handleInputChange}
        />
        <FormField
          label="Average"
          id="average"
          name="average"
          value={formValues.average}
          onChange={handleInputChange}
        />
        <Button>Test</Button>
      </Wrapper>
      <Wrapper>
        <h1>Users List</h1>
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
