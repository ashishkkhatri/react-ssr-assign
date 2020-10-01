import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLaunches } from '../actions';
import LaunchInfo, {is_mobile} from '../components/LaunchInfo';
import propTypes from 'prop-types';
import Filters from '../components/Filters';
import { FilterContainer, TilesContainer } from '../components/StyleComponents';
import LazyLoad from 'react-lazyload';

class LaunchListPage extends Component {

    renderLaunches(){
        const { launches } = this.props;
        let group = [];
        const allLaucnhes = [];
        launches.forEach((launch, index) => {
            group.push(<LaunchInfo key={index} launch={launch}></LaunchInfo>);
            let counter = index + 1;
            const divisor = is_mobile() ? 1 : 4;
            if(counter !== 0 && counter % divisor === 0) {
                allLaucnhes.push(<LazyLoad height={200} key={index}>{group}</LazyLoad>);
                group = [];
            }
        });
        return allLaucnhes;
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