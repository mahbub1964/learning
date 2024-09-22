import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Profile.css';

export default function Profile() {
  const [typeEffect] = useTypewriter({ words: [
    'Enthusiastic Dev 🔴', 'Full Stack Developer 💻',
    'MERN Stack Dev 🥺', 'Cross Platform Dev 🌐', 'React/React Native Dev 📱' ],
    loop: true, typeSpeed: 100, deleteSpeed: 40
  });
  return (
    <div className='profile-container'>
      <div className='profile-parent'>

        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='#'><i className='fa fa-facebook-square'></i></a>
              <a href='#'><i className='fa fa-google-plus-square'></i></a>
              <a href='#'><i className='fa fa-instagram'></i></a>
              <a href='#'><i className='fa fa-youtube-square'></i></a>
              <a href='#'><i className='fa fa-twitter'></i></a>
            </div>
          </div>

          <div className='profile-details-name'>
            <span className='primary-text'>{" "}
              Hello, I'M <span className='highlighted-text'>Mahbub</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>{" "}
              <h1 style={{minHeight: '48px'}}>{ typeEffect }</h1>
              <span className='profile-role-tagline'>
                Knack of building applications with front and back end operations.
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'>{" "}Hire Me{" "}</button>
            <a href='ehizcv.pdf' download='Ehiedu ehizcv.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>

        <div className='profile-picture'>
          <div className='profile-picture-background'>
          </div>
        </div>

      </div>
    </div>
  );
};
