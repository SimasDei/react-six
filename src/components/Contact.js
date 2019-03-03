import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  clickHandler = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  onClickDeleteHandler = () => {
    this.props.deleteHandler();
  };
  render() {
    const { showContactInfo } = this.state;
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          {'  '}
          <i
            style={{ cursor: 'pointer' }}
            onClick={this.clickHandler}
            className="fas fa-sort-down fa-2x"
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
            <li className="list-group-item">
              <i
                onClick={this.onClickDeleteHandler}
                style={{ cursor: 'pointer', color: 'red' }}
                className="fas fa-times fa-2x"
              />
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
