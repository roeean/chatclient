import {useRef, useState, useEffect} from 'react';
import propTypes from 'prop-types';
import StyledLogin from './StyledLogin';

function Login({handleLogin, userId, error, setError}) {
  const [userName, setUserName] = useState('');
  const [room, setRoom] = useState('');
  const textBoxRef = useRef(null);

  useEffect(() => {
    textBoxRef.current.focus();
  }, []);

  useEffect(() => {
    setError(null);
  }, [userName]);

  
  useEffect(() => {
    if (!userId) setError('Connecting... Wait for a moment');
    else setError(null);
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({userName, room});
    textBoxRef.current.focus();
  };
    
  return (
    <StyledLogin error={!!error}>
      <h2>Please enter your name to continue</h2>
      <div className='error'>
        <p>{error}</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>  
        <input type="text" id='uname' placeholder="Enter your nickname" disabled={!userId} ref={textBoxRef} onChange={(e) => setUserName(e.target.value)} />
        <input type="text" id='room' placeholder="Enter a room name" value={room} onChange={(e) => setRoom(e.target.value)} />
        <button onClick={handleSubmit} disabled={!userName || !room}>Enter</button>
      </form>
    </StyledLogin>
  );
}

Login.propTypes = {
  handleLogin: propTypes.func.isRequired,
  error: propTypes.string,
  setError: propTypes.func.isRequired,
  userId: propTypes.string
};

export default Login;