import React, { Component } from 'react';
import './style.css';

class About extends Component {
  componentWillMount() {

    const data1 = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }

    const data2 = {
      title: 'poo',
      body: 'dar',
      userId: 3
    }

    const request1 = fetch(`api/post`, {
      method: 'POST',
	    body: JSON.stringify(data1),
	    headers: {"Content-type": "application/json"}
    }).then(res => res.json())

    const request2 = fetch(`api/post`, {
      method: 'POST',
      body: JSON.stringify(data2),
      headers: {"Content-type": "application/json"}
    }).then(res => res.json())

    Promise.all([request1, request2]).then(values => {
      console.log(values[0]);
      console.log(values[1]);
    })  
  }

  render() {
    return (
      <div className="About">
        <h1 className="About-title">About</h1>
      </div>
    );
  }
}

export default About;
