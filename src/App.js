import React, { Component } from 'react';
import Login from './Login';
import Register from './Register'
import Main from './Main'
import { getDataFromLocalStorage, setDataToLocalStorage } from './store';
const Ext = window['Ext'];

class App extends Component {

  constructor() {
    super()
    this.state = {
      page: 'login'
    }
  }

  componentDidMount = () => {
    setDataToLocalStorage('isLogin', 'false');
    const page = getDataFromLocalStorage('page');
    // this.setState((prevState) => ({
    //   ...prevState,
    //   page: page
    // }))
  }

  renderSign = (format, value) => (
    <span style={{ color: value > 0 ? 'green' : value < 0 ? 'red' : '' }}>
      {Ext.util.Format.number(value, format)}
    </span>
  )

  handleSetPage(e, page) {
    this.setState((prevState) => ({
      ...prevState,
      page: page
    }))
  }

  // render() {
  //   return 
  // }

  render() {
    return <>
      {this.state.page === 'login' ? <Login setPage={(e, owner) => this.handleSetPage(e, owner)} /> : this.state.page === 'register' ? <Register setPage={(e, owner) => this.handleSetPage(e, owner)} /> : <Main setPage={(e, owner) => this.handleSetPage(e, owner)} />}
    </>
  }

}
export default App;
