import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addGun,removeGun,addGunAsync} from './index.redux'
// @connect(
      //你要什么属性，放到props里面， 
//   state=>({num:state}),
        // 你要什么方法放到props里面，会自动dispatch
//   {addGun,removeGun,addGunAsync}
// )
class App extends Component {
  render() {
    const num = this.props.num
    const addGun = this.props.addGun
    const removeGun = this.props.removeGun
    const addGunAsync=this.props.addGunAsync
    return (
      <div>
          <h1>现在有机关枪{num}把</h1>
          <button onClick={addGun}>申请武器</button>
          <button onClick={removeGun}>上交武器</button>
          <button onClick={addGunAsync}>拖两天再给</button>
      </div>
   
    );
  }
}
const mapStatetoProps=(state)=>{
  return {num:state}
}
const actionCreators = {addGun,removeGun,addGunAsync}
// connect 用在组件内部，用来连接外部获取组件所需的参数
App = connect(
  mapStatetoProps,
  actionCreators
)(App)
export default App;
