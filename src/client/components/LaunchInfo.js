import React from 'react';
import propTypes from 'prop-types';
import { ImgContainer, Tile, MissionName, LaunchInfoKey, Image } from './StyleComponents';


export const is_mobile = () => {
    if(typeof window !== 'undefined' && window.document){
        return window.screen.width < 700;
    }
    return false;
};

const LaunchInfo = ({ launch }) => {
    let missionIdList = launch.mission_id.length > 0 
                        ? launch.mission_id.map((id, index) => <li key={index} >{id}</li>)
                        : <li>NA</li>;
    const { rocket: {first_stage: {cores}}, links, mission_name, flight_number, launch_year, launch_success } = launch;
    const { land_success } = cores[cores.length -1];
    return (
        // <LazyLoad height={200}>
        <Tile>
            <ImgContainer>
                
                    <Image src={is_mobile() ? links.mission_patch_small : links.mission_patch } />
                
            </ImgContainer>
            <div>
                <MissionName>{mission_name} #{flight_number}</MissionName>
                <p><LaunchInfoKey>Mission Id: </LaunchInfoKey></p>
                { <ul>{missionIdList}</ul> }
                <p><LaunchInfoKey>Launch Year: </LaunchInfoKey><span>{launch_year}</span></p>
                <p><LaunchInfoKey>Successfull launch: </LaunchInfoKey><span>{launch_success.toString()}</span></p>
                <p><LaunchInfoKey>Successfull landing:</LaunchInfoKey><span>{land_success ? land_success : 'NA'}</span></p>
            </div>
        </Tile>
        // </LazyLoad>
    );
};

export default LaunchInfo;

LaunchInfo.propTypes = {
    launch: propTypes.object
};