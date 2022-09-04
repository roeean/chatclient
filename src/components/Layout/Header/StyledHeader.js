import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-bottom: 40px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #F2CC8F;  
    h1 {
        font-size: 2rem;
        font-weight: 400;
        color: #101118;         
    }
`;

export default StyledHeader;