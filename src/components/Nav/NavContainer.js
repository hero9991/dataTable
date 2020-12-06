import React from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import { requestBigData, requestSmallData } from '../../redux/table-reducer';
import { getIsLoading } from '../../redux/table-selectors';

const NavConteiner = (props) => {
    return <Nav {...props}/>
}

const mapStateToProps = (state) => ({
    isLoading: getIsLoading(state)
})



export default connect(mapStateToProps, {requestSmallData, requestBigData})(NavConteiner);