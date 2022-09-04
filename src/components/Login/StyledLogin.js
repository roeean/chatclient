import styled from 'styled-components';

const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #f0f2f5;

    h2 {
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 1rem;
        color: #150029;
    }
    .error {
        display: ${({ error }) => (error ? 'block' : 'none')};
         background: #F0CCBC;
        color: #C85C2D;
        height: 50px;
        line-height: 1.5;
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 1rem;
        padding: 10px 15px;

        p {
            margin: 0;
        }
    }
    .form {
        display: flex;
        flex-direction: column;

        * {
            width: 300px;
            height: 50px;
            border: 1px solid #d9d9d9;
            border-radius: 2px;
            padding: 4px 11px;
            font-size: 14px;
            line-height: 1.5;
            transition: all 0.3s;
            margin-bottom: 10px;
        }
    
        input[type="text"] {
            width: 300px;
            color: rgba(0, 0, 0, 0.65);
            background-color: #fff;

        &#uname {
            color:  ${({ error }) => (error ? '#C85C2D' : 'initial')};
        }

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

export default StyledLogin;