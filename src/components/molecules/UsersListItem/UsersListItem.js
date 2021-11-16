import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import AverageItem from 'components/atoms/AverageItem/AverageItem';
import { Wrapper, NameWrapper, AttendanceWrapper } from './UserListItem.styles';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <AverageItem average={average} />
      <div>
        <NameWrapper>{name}</NameWrapper>
        <AttendanceWrapper>Attendance {attendance}</AttendanceWrapper>
      </div>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
