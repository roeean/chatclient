import React from 'react'; 
import propTypes from 'prop-types';

import StyledMessageBox from './StyledMessageBox';
const MessageBox = ({message, self}) => {

  return (
    <StyledMessageBox self={self}>
      <div className='message'>
        <div className='avatar' alt="F">{message.userName[0].toUpperCase()}</div>
        <div className='content'>
          <div className='text'>{message.message}</div>
          <div className='name'>{message.userName} | {message.timestamp.toLocaleString()}</div>
        </div>  
      </div>
    </StyledMessageBox>
  );
};

MessageBox.propTypes = {
  message: propTypes.object.isRequired,
  self: propTypes.bool.isRequired
};

export default MessageBox;