import React from 'react';

class History extends React.Component {  
  render() {
    const {current, items} = this.props;
    return (
      <ul>
         {
          items.map( (el, index) => {
            let name = (index === current) ? 'active' : '';
            return (
              <li key={index}>
                <button 
                  className={name} 
                  onClick={() => this.props.changeSilde(current, index) }
                ></button>
              </li>
            )
          })
        }      
      </ul>     
    );
  }
}

export default History;
