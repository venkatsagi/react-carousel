import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.scss';
import History from './components/history';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/HA1RQCRQJ7.jpg',
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/EVHXF4MUT6.jpg',
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/D7VE3SK3RD.jpg',
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/0XRFUE80AZ.jpg',
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/2DQJJ9RLVD.jpg'
      ], 
      current: 0, 
      isNext: true 
    };
    
    this.handlerPrev = this.handlerPrev.bind(this);
    this.handlerNext = this.handlerNext.bind(this);
    this.goToHistoryClick = this.goToHistoryClick.bind(this);
  }
  
  handlerPrev() {
    let index = this.state.current,
        length = this.state.items.length;
    
    if( index < 1 ) {
      index = length;
    }
    
    index = index - 1;
  
    this.setState({
      current: index,
      isNext: false
    });
  }
  
  handlerNext() {
    let index = this.state.current,
        length = this.state.items.length - 1;
    
    if( index === length ) {
      index = -1;
    }
    
    index = index + 1;
    
    this.setState({
      current: index,
      isNext: true
    });
  }
  
  goToHistoryClick( curIndex, index ) {
    let next = (curIndex < index);
    this.setState({
      current: index,
      isNext: next
    });                 
  }
  
  render(){
    let index = this.state.current,
        isnext = this.state.isNext,
        src = this.state.items[index];
  
    return (
      <div className="app">
        <div className="carousel">
          <ReactCSSTransitionGroup
            transitionName={{
              enter: isnext ? 'enter-next' : 'enter-prev',
              enterActive: 'enter-active',
              leave: 'leave',
              leaveActive: isnext ? 'leave-active-next' : 'leave-active-prev'
            }}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
          <div className="carousel_slide" key={index}>
            <img src={src} alt="src" />
          </div>
          </ReactCSSTransitionGroup>
          <button className="carousel_control carousel_control__prev" onClick={this.handlerPrev}><span></span></button>
          <button className="carousel_control carousel_control__next" onClick={this.handlerNext}><span></span></button>
          <div className="carousel_history">
            <History 
              current={this.state.current} 
              items={this.state.items}
              changeSilde={this.goToHistoryClick}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
