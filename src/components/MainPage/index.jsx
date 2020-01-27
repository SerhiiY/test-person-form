import React, { Component } from 'react';
import { RecordForm as Form, FormHOC } from '../Form';
import Table from '../Table';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loaderOff } from '../redux/actions';
import style from './style.module.css';
import Loader from '../Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Media from 'react-media';

class MainPage extends Component {

  componentDidMount() {
    this.turnOffLoader();
  }

  componentDidUpdate() {
    this.turnOffLoader();
  }

  turnOffLoader() {
    const { loaderOff } = this.props;
    loaderOff();
  }

  render() {
    const { loader } = this.props;

    return (
      <>
        {loader && <Loader />}
        <div className={style.MainPage}>
          <Media queries={{
            large: "(min-width: 400px)",
          }}>
            {matches => (
              <>
                {matches.large ? <Form /> : <FormHOC />}
              </>
            )}
          </Media>
          <Table/>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </>
    )
  }
}

MainPage.propTypes = {
  loader: PropTypes.bool,
  loaderOff: PropTypes.func,
}

const mapStateToProps = state => ({
  loader: state.loader,
});

const mapDispatchToProps = dispatch => ({
  loaderOff: () => dispatch(loaderOff()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);