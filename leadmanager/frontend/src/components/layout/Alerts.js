import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    errors: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { errors, alert, message } = this.props;

    if (errors !== prevProps.errors) {
      if (errors.msg.name) {
        alert.error(`Name: ${errors.msg.name.join()}`);
      }

      if (errors.msg.email) {
        alert.error(`Email: ${errors.msg.email.join()}`);
      }

      if (errors.msg.message) {
        alert.error(`Message: ${errors.msg.message.join()}`);
      }
    }

    if (message !== prevProps.message) {
      if (message.deleteLead) {
        alert.success(message.deleteLead);
      }

      if (message.addLead) {
        alert.success(message.addLead);
      }
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => {
  return { errors: state.errors, message: state.messages };
};

export default connect(mapStateToProps)(withAlert(Alerts));
