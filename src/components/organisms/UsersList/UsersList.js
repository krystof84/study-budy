import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';
import { StyledList } from './UserList.styles';

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
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      {/*<h1>{this.state.isLoading ? 'Loading' : 'Users list'}</h1>*/}
      <StyledList>
        {/*        {this.state.users.map((userData, i) => (
          <UsersListItem deleteUser={this.deleteUser} index={i} key={userData.name} userData={userData} />
        ))}*/}
      </StyledList>
    </Wrapper>
  );

  /*  mockAPI()
    .then(
      data => {
        this.setState({ isLoading: false })
        this.setState({ users: data })
      }
    )
    .catch(err => console.log(err));*/
};

/*class UsersList2 extends React.Component {

  state = {
    users: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

  }

  componentDidUpdate(_, prevState) {
    if(prevState.isLoading !== this.state.isLoading) {
      console.log('Loading state has changed');
    }
  }





}*/

export default UsersList;
