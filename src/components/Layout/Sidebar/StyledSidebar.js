import styled from 'styled-components';

const StyledSidebar = styled.aside`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    margin-top: 60px;
    width: 300px;
    height: calc(100vh - 110px);
    z-index: 100;
    border-top: 1px solid #fff;
    border-right: 1px solid #aaa;

    padding: 16px;

    h3 {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
        font-weight: 400;
        padding-bottom: 16px;
        width: 100%;
        color: ${({isHistoryMode}) => isHistoryMode ? '#e07a5f' : '#81b29a'};
        text-align: center;
        border-bottom: 1px solid #aaa;

        .userName {
            font-weight: 500;
        }
    }

    button.historyMode {
        margin-top: auto;
        width: 50px;
        height: 50px;
        font-weight: 700;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        font-size: 14px;
        line-height: 1.5;
  
        color: #000;
        background-color: ${({isHistoryMode}) => isHistoryMode ? '#eab69f' : '#F2CC8F'};
        transition: all 0.3s;

            :hover, :focus, :active {
                outline: 0;
                background-color: ${({isHistoryMode}) => isHistoryMode ? '#e07a5f' : '#ddb26f'};
            }

    }

    .users {
        margin-top: 14px;
        border-bottom: 1px solid #aaa;
        width: 100%;

        > span {
            font-size: 1.2rem;
            font-weight: 400;
            width: 100%;
            color: #3d405b;
            text-align: center;
            display: block;
            padding-bottom: 16px;
                   
            svg {
                font-size: 1.5rem;
                margin-right: 10px;
            }
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            width: 100%;

            li {
                margin: 0;
                padding-right: 25px;
                width: 100%;
                height: 40px;
                line-height: 1.5;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
                font-weight: 400;
                background-color: #EAB69F;


                span {
                    width: 25px;
                    svg {
                        font-size: 1.1rem;
                        padding: 0 5px;
                    }
                }

                
                :first-of-type {
                    background-color: #81b29a;
                    padding-right: 0;
                }
        }
    }
}
`;

export default StyledSidebar;