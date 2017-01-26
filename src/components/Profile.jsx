import React from 'react';
import ReactDom from 'react-dom';

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <img className='profile' src='../../public/background.jpg' />
        <div className='intro'>Hi, I'm Vivian Zhang</div>
        <div className='resumelink'>Download Resume</div>
        <img className='photo' src='../../public/photo.jpg' />
      </div>
    )
  }
}

ReactDom.render(<Profile />, document.getElementById('profile'));