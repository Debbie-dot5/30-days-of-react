import React from 'react';
import './index.css';
import dogImage from './images/dog.jpg';

 const User = () => {
  return(
    <div className='user-container'>
 <img src={dogImage} alt='dog-image' className='user-img'></img>  
   <h1>Julius Patra</h1>
   <p>Senior developer, finland</p>
   <h1>Skills</h1>
 </div>
  )
 
 }



 const SkillList = () => {
  const skills = [
    'HTML',
    'CSS',
    'SASS',
    'JS',
    'REACT',
    'REDOUX',
    'NODE',
    'MANGODB',
    'PYTHON',
    'FLASK',
    'DANJO',
    'NUMPY',
    'PANDAS',
    'DATA ANALYSIS',
    'MY SQL',
    'GRAPH QL',
    'D3.JS',
    'DOCKER',
    'GATSBY',
    'GIT',
    'HEROKU'
  ]
   return(
    <div>
          
          <ul className='listed-items'>
            {skills.map((skill, index) =>(
              <ol key={index} className='items'>{skill}</ol>
            ))}
          </ul>

    </div>
   )
 }

 const Subscribe = () => {
  return(
    <div className='subscribe-container'>
      <h1>Subscribe</h1>
      <p className='para'>Sign up with your email address to receive news and updates</p>

      <div>
        <input placeholder='First name' className='within' />
        <input placeholder='Last name' className='within' />
        <input placeholder='Email' className='within' />
      </div>

      <div>
     <button className='sub-button'>Subscribe</button>
      </div>
    </div>
  )
 }

const App = () => {
  return (
    <div>
    <User />
    <SkillList />
    <Subscribe />
    </div>
   
    
  )
}

export default App
