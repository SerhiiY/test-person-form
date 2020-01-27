import React, { Component } from 'react';
import styles from '../Form/style.module.scss';

const toggle = BaseComponent => {
  return class Toggle extends Component {
    state = {
      isOpen: false,
    }

    handleClick = () => {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }

    render() {
      const { isOpen } = this.state;

      return (
        <>
          <button onClick={this.handleClick} className={styles.button} style={{backgroundColor: "#888"}}>{isOpen ? "Close form" : "Add notice"}</button>
          {isOpen && <BaseComponent {...this.props} />}
        </>
      )
    }
  }
}

export default toggle;