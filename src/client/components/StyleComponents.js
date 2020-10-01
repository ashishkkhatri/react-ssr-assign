import styled from 'styled-components';

export const ImgContainer = styled.div`
    background-color: #f2f2f2;
`;

export const Tile = styled.div`
    background-color: white;
    width:40%;
    padding:10px;
    border-radius: 7px;
    display: inline-block;
    margin: 0 10px 10px 10px;
    @media screen and (max-width: 699px) {
        width: 100%;
    }
    @media screen and (min-width: 1025px) {
        width: 20%;
    }
`;

export const MissionName = styled.p`
    color: #475196;
    font-weight: 900;
`;

export const LaunchInfoKey = styled.span`
    font-weight: 900;
`;
export const Image = styled.img`
    width: 100%
`;

export const FilterHeader = styled.h3`
    padding: 15px;
    margin-bottom: 0;
`;

export const SubHeadingUnderline = styled.hr`
    margin: auto;
    width: 70%;
`;

export const FilterSubheading = styled.p`
    margin: 8px auto;
    text-align: center;
`;

export const ButtonWrapper = styled.div`
    width: 50%;
    display: inline-block;
    margin: 10px auto;
    text-align: center;
`;

export const FilterContainer = styled.div`
    background-color: white;
    border-radius: 7px;
    width: 33%;
    display: inline-block;
    margin: 0 15px 0 5px;
    float: left;
    @media  screen and (max-width: 699px) {
        width: 100%;
    }
    @media screen and (min-width: 1025px) {
        width: 20%;
    }
`;

export const TilesContainer = styled.div`
    width:64%;
    display: inline-block;
    @media screen and (max-width: 699px) {
        width: 100%;
    }
    @media screen and (min-width: 1025px) {
        width: 78%;
    }
`;