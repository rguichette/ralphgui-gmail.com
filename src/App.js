import React from 'react';
import './App.css';
import ThreeContainer from './ThreeContainer';
import SingleScene from './SingleScene'
import TestFiveMin from './TestFiveMin';
import TestBreak from './TestBreak';

export default class App extends React.Component {
constructor(props){
  super(props)
this.moveItem = this.moveItem.bind(this)


}



moveItem(e){
console.log("event is: ", e);

}


  render() {
    return (
      <div>
      {/* <SingleScene/> */}
      {/* <ThreeContainer/> */}
      <TestBreak/>
      {/* <TestFiveMin/> */}
    
      </div>
    )
  }
}




