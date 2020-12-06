import React from 'react';
import Table from './Table';
import { connect } from 'react-redux';
import preloader from '../../assets/preloader.gif'
import { getIsLoading, getData, getActiveRowsCount, getPortionSize } from '../../redux/table-selectors';
import { setData } from '../../redux/table-reducer';

const TableContainer = ({ isLoading, data, activeRowsCount, setData, portionSize }) => {
    if (isLoading) return <img className="preloader" src={preloader} alt="" />
    return <Table data={data} activeRowsCount={activeRowsCount}
        setData={setData} portionSize={portionSize} />
}

const mapStateToProps = (state) => ({
    isLoading: getIsLoading(state),
    data: getData(state),
    activeRowsCount: getActiveRowsCount(state),
    portionSize: getPortionSize(state)
})

export default connect(mapStateToProps, { setData })(TableContainer);