import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLaunches } from '../actions';
import LaunchInfo from '../components/LaunchInfo';
import propTypes from 'prop-types';
import Filters from '../components/Filters';
import { FilterContainer, TilesContainer } from '../components/StyleComponents';

class LaunchListPage extends Component {

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