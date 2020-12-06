import './App.css';
import { Route } from 'react-router-dom';
import NavContainer from './components/Nav/NavContainer';
import TableContainer from './components/Table/TableContainer';
import { connect } from 'react-redux';
import { getIsLoading } from './redux/table-selectors';

const App = ({ isLoading }) => {
  return (
    <div className={isLoading ? "App__loading" : "App"}>
      <div className="App__container">
        <Route exact path="/" render={() => <NavContainer />} />
        <Route path="/Table" render={() => <TableContainer />} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state)
})

export default connect(mapStateToProps, {})(App);
