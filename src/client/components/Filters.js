import React, { Component } from 'react';
import { fetchLaunches } from '../actions';
import Button from './Button';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { FilterHeader, SubHeadingUnderline, FilterSubheading, ButtonWrapper } from './StyleComponents';

class Filters extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            launch_year: null,
            launch_success: null,
            land_success: null
        };

        this.handleYearClick = this.handleYearClick.bind(this);
        this.yearBtnList = this.yearBtnList.bind(this);
        this.getUrlParam = this.getUrlParam.bind(this);
        this.handleActivity = this.handleActivity.bind(this);
    }

    getUrlParam() {
        const params = {};
        for (let key in this.state) {
            if(this.state[key] !== null) {
                params[key] = this.state[key];
            }
        }
        return `&${new URLSearchParams(params).toString()}`;
    }

    handleYearClick(event){
        let launchYear = parseInt(event.target.value, 10);
        if (launchYear === this.state.launch_year){
            launchYear = null;
        }
        this.setState({launch_year: launchYear}, () => {
            this.props.fetchLaunches(this.getUrlParam());
        });
    }

    handleActivity(event, activity){
        let activity_value = event.target.value === 'true';
        if(activity_value === this.state[activity]){
            activity_value = null;
        }
        this.setState({[activity]: activity_value}, () => {
            this.props.fetchLaunches(this.getUrlParam());
        });
    }

    yearBtnList() {
        const buttonList = [];
        const { startYear, endYear } = this.props;
        for(let year = startYear; year <= endYear; year++) {
            buttonList.push(
                <ButtonWrapper key={year}>
                    <Button 
                        active={this.state.launch_year === year} 
                        value={year}
                        onClick={this.handleYearClick}
                    >{year}</Button>
                </ButtonWrapper>
            );
        }
        return buttonList;
    }

    render() {
        return (
            <div>
                <FilterHeader>Filters</FilterHeader>
                <FilterSubheading>Launch Year</FilterSubheading>
                <SubHeadingUnderline />
                <div>{this.yearBtnList()}</div>
                <FilterSubheading>Successfull Launch</FilterSubheading>
                <SubHeadingUnderline />
                <ButtonWrapper><Button 
                    active={this.state.launch_success === true} 
                    value={true}
                    onClick={event => this.handleActivity(event, 'launch_success')}
                >True</Button></ButtonWrapper>
                <ButtonWrapper><Button 
                    active={this.state.launch_success === false} 
                    value={false}
                    onClick={event => this.handleActivity(event, 'launch_success')}
                >False</Button></ButtonWrapper>
                <FilterSubheading>successfull Landing</FilterSubheading>
                <SubHeadingUnderline />
                <ButtonWrapper><Button 
                    active={this.state.land_success === true} 
                    value={true}
                    onClick={event => this.handleActivity(event, 'land_success')}
                >True</Button></ButtonWrapper>
                <ButtonWrapper><Button 
                    active={this.state.land_success === false} 
                    value={false}
                    onClick={event => this.handleActivity(event, 'land_success')}
                >False</Button></ButtonWrapper>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        startYear: state.startYear,
        endYear: state.endYear
    };
};

export default connect(mapStateToProps, {fetchLaunches})(Filters);

Filters.propTypes = {
    startYear: propTypes.number,
    fetchLaunches: propTypes.func,
    endYear: propTypes.number
};