import styled from 'styled-components';

const StyledMessageList = styled.section`
    margin: 76px 16px 0px 316px;
    padding-bottom: 50px;

    .typing {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 100%;
        font-style: italic;
        color: #888;
    }
    .inputbox {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        * {
            height: 50px;
            border: 1px solid #d9d9d9;
            border-radius: 2px;
            padding: 4px 11px;
            font-size: 14px;
            line-height: 1.5;
            transition: all 0.3s;
        }
    
        input[type="text"] {
            width: 100%;
            color: rgba(0, 0, 0, 0.65);
            background-color: #fff;
            
        :focus {
                border-color: #40a9ff;
                outline: 0;
                box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
            }
        }

        button {
            color: white;
            background-color: #40a9ff;

            :hover, :focus {
                border-color: #40a9ff;
                outline: 0;
                box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
            }

            :active {
                background-color: #1890ff;
                box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
            }

            :disabled {
                background-color: #d9d9d9;
                color: rgba(0, 0, 0, 0.25);
            }
        }
    }

`;

export default StyledMessageList;