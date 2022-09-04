import styled from 'styled-components';
 
const StyledMessageBox = styled.div`
    display: flex;
    flex-direction: ${({self}) => self ? 'row' : 'row-reverse'};
    
    .message {
        display: flex;
        align-items: center;
        padding: 24px;
        position: relative;
        background: ${({self}) => self ? '#81b29a' : '#eab69f'};
        border-radius: 2px;
        border: 1px solid #f0f0f0;
        width: 40%;
        min-width: 300px;
        max-width: 600px;
        margin-bottom: 16px;
    }
    .avatar { 
        margin-right: 13px;
        position: relative;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
        vertical-align: middle;
        width: 32px;
        height: 32px;
        line-height: 32px;
        border-radius: 50%;
        color: ${({self}) => self ? '#81b29a' : '#e07a5f'};
        background-color: ${({self}) => self ? '#d8f3dc' : '#F4D9CD'}; 
    }

    .text {
        font-weight: 600;
    }
    .name {
        font-weight: 300;
        font-size: 12px;
    }
`;

export default StyledMessageBox;