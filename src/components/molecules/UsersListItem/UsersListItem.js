import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import AverageItem from 'components/atoms/AverageItem/AverageItem';
import { Wrapper, NameWrapper, AttendanceWrapper } from './UserListItem.styles';

const UsersListItem = ({
  deleteUser,
  userData: { average, name, attendance = '0%' },
}) => (
  <Wrapper>
    <AverageItem average={average} />
    <div>
      <NameWrapper>{name}</NameWrapper>
      <AttendanceWrapper>Attendance {attendance}</AttendanceWrapper>
    </div>
    <DeleteButton onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
