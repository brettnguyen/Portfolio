import React from 'react';
import '../App.css';
import profilePic from '../images/brett.jpg'; 
import GitHub from '../images/github.png'; 
import mail from '../images/mail.png'; 
import LinkedIn from '../images/linkedIn.png'; 
import Image1 from '../images/leaf.png';
import Image2 from '../images/reactweb.png';
import Image3 from '../images/simple.png';
import Image4 from '../images/cv.png';
import Image5 from '../images/Scavhunt.jpg';
import apple from '../images/apple.png';
import droid from '../images/droid.png';

const Home = () => {
  return (
    <div className='background'>
      <div className='backcolor'></div>
      <div className='container-fluid'>
      <h1 className='nametag'>Hi, I am Brett Nguyen</h1>
        <div className="profile-content">
          
          <img src={profilePic} alt="Brett Nguyen" className="profile-picture" />
          <div className="text-content">
           
            <ul className="skills">
              <li>Skilled in full stack development with expertise in Java, JavaScript, React, HTML, CSS, Flutter, Dart, Xamarin, C#, and Node.js</li>
              <li>Database experience with MongoDB, SQL, and Firebase.</li>
              <li>UX design skills using Figma, Adobe Design, and Sketch.</li>
              <li>Capable of creating adaptable and versatile high-performance applications.</li>
            </ul>
          </div>
        </div>
        <div className="contact-info">
        <a href="mailto:brettnguyen7@gmail.com">
        <img className='linkedmail' src={mail} alt="Email" />
        brettnguyen7@gmail.com
        </a>
        <a className='gitlink' href="https://github.com/brettnguyen" target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="GitHub" className="link-icon" />
          github.com/brettnguyen
        </a>
        <a href="https://www.linkedin.com/in/brett-nguyen-a94a90156/" target="_blank" rel="noopener noreferrer">
          <img className='linkedmail' src={LinkedIn} alt="LinkedIn"  />
          linkedin.com/in/brett-nguyen
        </a>
        </div>
        <h1 className='projects'>Projects</h1>
        <div className="image-grid">
      
        <div className='scavholder'>
          <a href='https://www.linkedin.com/posts/brett-nguyen-a94a90156_scavhunt-adventureawaits-explorecaptureshare-activity-7140354138717982720-Iwo5?utm_source=share&utm_medium=member_desktop' target="_blank" rel="noopener noreferrer" >
            <img src={Image5} alt="Description" className="grid-itemtop" />
            </a>
          <div className='downloads'>
            <a href='https://apps.apple.com/us/app/scav-hunt/id6469571906' target="_blank" rel="noopener noreferrer" >
            <img src={apple}  className="apple-icon" />
            </a>

            <a href='https://play.google.com/store/apps/details?id=com.scavhunt.scavhunt' target="_blank" rel="noopener noreferrer" >
            <img src={droid}  className="git-icon" />
            </a>
            </div>
          </div>
         
          <a href="https://github.com/brettnguyen/CollegeVSDemo" target="_blank" rel="noopener noreferrer" >
            <img src={Image4} alt="Description" className="grid-itemtop" />
            <img src={GitHub} alt="GitHub" className="git-icon" />
          </a>
          
          <a href="https://github.com/brettnguyen/Simple-Flutter" target="_blank" rel="noopener noreferrer">
            <img src={Image3} alt="Description" className="grid-itemtop" />
            <img src={GitHub} alt="GitHub" className="git-icon" />
          </a>
       
        </div>
        <div className="image-grid2">
      
        <a href="https://github.com/brettnguyen/LeafNotesApp" target="_blank" rel="noopener noreferrer">
            <img src={Image1} alt="Description" className="grid-itembottom1" />
            <img src={GitHub} alt="GitHub" className="git-icon" />
          </a>
          <a href="https://github.com/brettnguyen/ReactNotesWebApp"className='bottom-item' target="_blank" rel="noopener noreferrer">
            <img src={Image2} alt="Description" className="grid-itembottom2" />
            <img src={GitHub} alt="GitHub" className="git-icon" />
          </a>
          </div>
      </div>
    </div>
  );
};

export default Home;

