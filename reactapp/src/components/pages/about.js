import React from 'react';

function About() {
  return (
    <React.Fragment>
      <h1 style={aboutStyle}>About</h1>
      <p style={aboutStyle}>
        This is a basic TodoList web application written by Patrick Archer (myself) on 26 June 2019.
        <br/>
        I utilized HTML/CSS, JavaScript, React, NodeJS, Axiom, and BrowserRouter to build this app.
        <br/><br/>
        This app was built as part of a Udemy Crash Course that I am using to test my skills.
        <br/><br/>
        <a href='https://www.youtube.com/watch?v=sBws8MSXN7A&t=1s' target='_blank' style={linkStyle}>
          https://www.youtube.com/watch?v=sBws8MSXN7A&t=1s</a>
      </p>
    </React.Fragment>
  )
}

const aboutStyle = {
  textAlign: 'center'
};

const linkStyle = {
  color: '#2e4ec2',
  textDecoration: 'underline'
};

export default About;