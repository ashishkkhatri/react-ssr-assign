import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLaunches } from '../actions';
import LaunchInfo from '../components/LaunchInfo';
import propTypes from 'prop-types';
import Filters from '../components/Filters';
import styled from 'styled-components';

const FilterContainer = styled.div`
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

const TilesContainer = styled.div`
    width:64%;
    display: inline-block;
    @media screen and (max-width: 699px) {
        width: 100%;
    }
    @media screen and (min-width: 1025px) {
        width: 78%;
    }
    
`;

class LaunchListPage extends Component {
    // componentDidMount() {
    //     this.props.fetchLaunches('');
    // }

    renderLaunches(){
        const { launches } = this.props;
        return launches.map((launch, index) => {
            return <LaunchInfo key={index} launch={launch}></LaunchInfo>;
        });
    }

    render(){
        return (
            <div>
                <FilterContainer>
                    <Filters />
                </FilterContainer>
                <TilesContainer>
                    {this.renderLaunches()}
                </TilesContainer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { launches: state.launches };
};

export const loadData = (store) => {
    return store.dispatch(fetchLaunches(''));
};

export default {
    loadData,
    component: connect(mapStateToProps, {fetchLaunches})(LaunchListPage)
};

LaunchListPage.propTypes = {
    launches: propTypes.array,
    fetchLaunches: propTypes.func
};