import React,{Component} from 'react';
import './App.css';
class App extends Component{
  constructor(props){
      super(props)
      this.state={
          count:0
      }
  }
  increase=()=>{
          if(this.state.count<5){
              this.setState({
                  count:this.state.count+1
              })
          }
      }
  dicrease=()=>{
      if(this.state.count>-5){
          this.setState({
              count:this.state.count-1
          })
      }
  }
  blank=()=>{
      this.setState({
          count:0
      })
  }
  render(){
      return(
      <div className='main_div'>
          <h1>Count: {this.state.count}</h1>
          <div className='buttons'>
              <button onClick={this.increase}>+</button>
              <button onClick={this.dicrease}>-</button>
              <button onClick={this.blank}>0</button>
          </div>
      </div>
      )
  }
}

export default App;
