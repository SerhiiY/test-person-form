/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import { deleteRecord } from '../redux/actions';

const Tab = ({ records, deleteRecord }) => {
  const handleClick = ({ target: { name } }) => {
    deleteRecord(name);
  }
  return (
    <>
      {records[0] ?
        <table className={styles.Tab}>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {records.map(el =>
              <tr key={el.id}>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.phone}</td>
                <td>{el.gender}</td>
                <td>{el.age}</td>
                <td><button name={el.id} onClick={handleClick}>Delete</button></td>
              </tr>
            )}
          </tbody>
        </table>
      : <h3>Please, add new person.</h3> }
    </>
  )
};

Tab.propTypes = {
  records: PropTypes.array,
  deleteRecord: PropTypes.func,
}

const mapStateToProps = state => ({
  records: state.records,
});

const mapDispatchToProps = dispatch => ({
  deleteRecord: id => dispatch(deleteRecord(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
