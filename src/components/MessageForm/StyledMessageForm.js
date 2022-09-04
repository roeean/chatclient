import styled from 'styled-components';

const StyledMessageForm = styled.form`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid #aaa;
    background: #fff;
    > * {
        height: 50px;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        padding: 4px 11px;
        font-size: 14px;
        line-height: 1.5;
        transition: all 0.3s;
    }

    .react-emoji {
        border: none;
    }

    > input[type="text"] {
        width: 100%;
        color: rgba(0, 0, 0, 0.65);
        background-color: #fff;
        outline: 0;
    }

    > button {
        color: white;
        border: none;
        width: 50px;
        background-color: #40a9ff;
        border-radius: 0;
        :disabled {
            background-color: #d9d9d9;
            color: rgba(0, 0, 0, 0.25);
        }
        svg {
            font-size: 1.5em;
        }
    }
`;

export default StyledMessageForm;