import { useEffect, useState } from 'react';
import client from 'client';

import Login from 'components/Login';
import MessageList from 'components/MessageList';
import MessageForm from 'components/MessageForm';
import Sidebar from 'components/Layout/Sidebar';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [room, setRoom] = useState('');
  
  const [users, setUsers] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isHistoryMode, setIsHistoryMode] = useState(false);

  const [messages, setMessages] = useState([]);
  const [cacheMessages, setCacheMessages] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      switch (dataFromServer.type) {

      case 'message':
        logger('Message recieved from server');
        setMessages(messages => [...messages, {
          message: dataFromServer.message,
          timestamp: new Date(dataFromServer.timestamp),
          userName: dataFromServer.userName,
        }]);
        break;

      case 'setUserId':
        setUserId(dataFromServer.userId);
        break;

      case 'users':
        const usersList = dataFromServer.users.filter(user => user !== userName && user !== null);
        setUsers(usersList.map(user => ({userName: user, isTyping: false})));
        break;

      case 'login':
        if (dataFromServer.success) setIsLoggedIn(true);
        else setError('The nickname already logged-in');
        break;

      case 'typing':
        setUsers(users => users.map(user => {
          if (user.userName === dataFromServer.userName) return {...user, isTyping: dataFromServer.isTyping};
          return user;
        }));
        break;

      case 'history':
        const collection = dataFromServer.messages;
        setMessages(collection.map(message => ({...message, timestamp: new Date(message.timestamp)})));
        break;
      }
    };
  }, []);

  const handleLogin = ({userName, room}) => {
    setError(null);
    setUserName(userName);
    setRoom(room);
    client.send(JSON.stringify({
      type: 'login',
      userName,
      room,
      userId
    }));
  };

  
  const handleSend = (value) => {
    client.send(JSON.stringify({
      type: 'message',
      message: value,
      room,
      userName
    }));
  };

  const handleHistoryMode = () => {
    if(isHistoryMode) {
      setIsHistoryMode(false);
      setMessages(cacheMessages);
    }
    else {
      setIsHistoryMode(true);
      setCacheMessages(messages);
      client.send(JSON.stringify({
        type: 'history',
        room,
        userId
      }));
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      client.send(JSON.stringify({
        type: 'typing',
        isTyping,
        userName,
        room
      }));
    }
  },[isTyping]);

  if (!isLoggedIn) return (<Login handleLogin={handleLogin} error={error} setError={setError} />);
  return (
    <>
      <main>  
        <Sidebar userName={userName} users={users} room={room} handleHistoryMode={handleHistoryMode} isHistoryMode={isHistoryMode} />
        <MessageList userName={userName} messages={messages} typingUsers={users.filter(({isTyping}) => isTyping)} /> 
      </main>
      <footer>
        <MessageForm handleSend={handleSend} setIsTyping={setIsTyping} isHistoryMode={isHistoryMode} />
      </footer>
    </>
  );
}

export default App;
