import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.active ? '#3bb300' : '#aaff80'};
    color: black;
    border:0px;
    width: 80px;
    height:30px;
    border-radius: 7px;
`;

export default Button;
