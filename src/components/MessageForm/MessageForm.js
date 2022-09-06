import {useRef, useState, useEffect, useCallback} from 'react';
import propTypes from 'prop-types';
import StyledSendbox from './StyledMessageForm';
import InputEmoji from 'react-input-emoji';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faBan } from '@fortawesome/free-solid-svg-icons';


const MessageForm = ({handleSend, setIsTyping, isHistoryMode}) => {
  const textBoxRef = useRef(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    textBoxRef.current.focus();
  }, []);

  const handleSubmit = () => {
    if(message === '' || isHistoryMode) return;
    handleSend(message);
    setMessage('');
    textBoxRef.current.focus();
  };

  const debounceTyping = () => {
    let timer;
    return () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
    };
  };

  const optimizeddebounceTyping = useCallback(debounceTyping(), []);

  const handleOnChange = (value) => {
    setMessage(value);
    setIsTyping(true);
    optimizeddebounceTyping();
  };

  return (
    <> 
      <StyledSendbox onSubmit={handleSubmit}>
        <InputEmoji
          value={message}
          onChange={handleOnChange}
          ref={textBoxRef}
          onEnter={handleSubmit}
          theme='light'
          placeholder='Type message and click on Enter...'
        />
        <button onClick={handleSubmit} disabled={!message || isHistoryMode}><FontAwesomeIcon icon={isHistoryMode ? faBan : faPaperPlane} /></button>
      </StyledSendbox>
    </>
  );  

};

MessageForm.propTypes = {
  handleSend: propTypes.func.isRequired,
  setIsTyping: propTypes.func.isRequired,
  isHistoryMode: propTypes.bool.isRequired
};

export default MessageForm;