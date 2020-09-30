import React from 'react';
import propTypes from 'prop-types';

const LaunchInfo = ({ launch }) => {
    let missionIdList = launch.mission_id.length > 0 ? launch.mission_id.map((id, index) => <li key={index} >{id}</li>) : null;
    const { rocket: {first_stage: {cores}}, links, mission_name, flight_number, launch_year, launch_success } = launch
    const { land_success } = cores[cores.length -1];
    return (
        <div>
            <div>
                <img src={links.mission_patch} width={25} height={25} />
            </div>
            <div>
                <p>{mission_name} #{flight_number}</p>
                <p>Mission Id: { !missionIdList && 'NA' }</p>
                { missionIdList && <ul>
                    {missionIdList}
                </ul> }
                <p><span>Launch Year: </span><span>{launch_year}</span></p>
                <p><span>Successfull launch: </span><span>{launch_success.toString()}</span></p>
                <p><span>Successfull landing:</span><span>{land_success ? land_success : 'NA'}</span></p>
            </div>
        </div>
    );
}

export default LaunchInfo;

LaunchInfo.propTypes = {
    launch: propTypes.object
};