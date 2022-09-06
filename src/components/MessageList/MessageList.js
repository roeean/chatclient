import React from 'react';
import propTypes from 'prop-types';
import StyledMessageList from './StyledMessageList';
import MessageBox from 'components/MessageBox';

function dynamicSort(property) {
  let sortOrder = 1;
  if(property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return (a,b) => {
    let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  };
}

const MessageList = ({messages, userName, typingUsers}) => {
  const typingUsersList = typingUsers.filter(({userName: user}) => user !== userName).map(({userName}) => userName);
  const typingUsersString = typingUsersList.join(', ');
  return (
    <StyledMessageList>
      {messages.sort(dynamicSort('timestamp')).map((message, index) => <MessageBox key={index} message={message} self={message.userName === userName} /> )}
      {typingUsersString && <div className="typing">{typingUsersString} {typingUsersList.length > 1 ? 'are' : 'is'} typing...</div>}
    </StyledMessageList>
  );
};

MessageList.propTypes = {
  messages: propTypes.array.isRequired,
  userName: propTypes.string.isRequired,
  typingUsers: propTypes.array.isRequired
};

export default MessageList;