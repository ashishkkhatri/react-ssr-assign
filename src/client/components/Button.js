import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.active ? '#3bb300' : '#aaff80'};
    color: black;
    border:0px;
    width: 80px;
    height:30px;
    border-radius: 7px;
    // margin: 10px 4%;
`;

export default Button;
