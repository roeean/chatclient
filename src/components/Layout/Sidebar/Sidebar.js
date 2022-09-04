import propTypes from 'prop-types';
import StyledSidebar from './StyledSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faClockRotateLeft, faRotateBack} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({userName, users, room, isHistoryMode, handleHistoryMode}) => {
  
  return (
    <StyledSidebar isHistoryMode={isHistoryMode}>
      <h3>
        <span className="userName">{room}</span> room
      </h3>

      <div className="users">
        {isHistoryMode ?
          <span>
            <FontAwesomeIcon icon={faClockRotateLeft} onClick={handleHistoryMode} />
            History Mode
          </span>
          : <>
            <span>Users in this room </span>
            <ul>
              <li>{userName} (you) </li>
              {users.filter(user => user.userName !== userName).map((user, index) => (
                <li key={index}><span className="icon">{user.isTyping && <FontAwesomeIcon icon={faPencil} />}</span> {user.userName}</li>
              ))}
            </ul>
          </>}
      </div>
      <button className='historyMode' onClick={handleHistoryMode}><FontAwesomeIcon icon={isHistoryMode ? faRotateBack : faClockRotateLeft} /></button>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  userName: propTypes.string.isRequired,
  users: propTypes.array.isRequired,
  room: propTypes.string.isRequired,
  isHistoryMode: propTypes.bool.isRequired,
  handleHistoryMode: propTypes.func.isRequired
};

export default Sidebar;