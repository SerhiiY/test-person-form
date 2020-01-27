/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { deleteRecord, sortRecords, getRecords } from '../redux/actions';
import Arrow from './arrow';
import columns from './columns';

class Tab extends Component {

  static propTypes = {
    records: PropTypes.array,
    deleteRecord: PropTypes.func,
  }

  componentDidMount() {
    const { getRecords } = this.props;
    getRecords();
  }

  state = {
    firstName: null,
    lastName: null,
    phone: null,
    age: null,
    gender: null,
  }

  handleClick = ({ target: { name } }) => {
    const { deleteRecord } = this.props;
    deleteRecord(name);
  }

  handleSortClick = ({ target: { name } }) => {
    const { sortRecords } = this.props;
    const sortType = this.state[name] === 'a-z' ? 'z-a' : 'a-z';

    this.setState({
      [name]: sortType,
    });

    console.log(name, sortType);
    sortRecords({colName: name, sortType});
  }

  render() {
    const { records } = this.props;

    return (
      <>
        {records[0] ?
          <table className={styles.Tab}>
            <thead>
              <tr>
                {columns.map(({name, value}) => 
                  <th key={name}>
                    <Arrow name={name} sortType={this.state[name]} sort={this.handleSortClick}/>
                    {value}
                  </th>
                )}
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
                  <td>
                    <button className={styles.delete} name={el.id} onClick={this.handleClick}>
                      Delete
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        : <h3>Please, add new person.</h3> }
      </>
    )
  }
};

const mapStateToProps = state => ({
  records: state.records,
});

const mapDispatchToProps = dispatch => ({
  deleteRecord: id => dispatch(deleteRecord(id)),
  sortRecords: ({colName, sortType}) => dispatch(sortRecords({colName, sortType})),
  getRecords: () => dispatch(getRecords()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
