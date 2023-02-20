import React from 'react'
import ReactDOM from 'react-dom/client'
import {House, Hash, Bell, Envelope, BookmarkSimple, FileText, DotsThreeCircle, User, Sparkle} from 'phosphor-react'
import './global.css';
import Logo from './assets/logo-twitter.svg';
import { Tweet } from './components/Tweet';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <div className="layout">
  <aside className="sidebar">
    <img src={Logo} alt="logoTwitter" className='logocss'/>

    <nav className='main-navigation'>
      <a href="#" className='active' > 
      <House weight="fill"/> 
      Home
      </a>
      <a href="#">
        <Hash/>
        Explore
      </a>
      <a href="#">
        <Bell/>
        Notification
      </a>
      <a href="#">
        <Envelope/>
        Messages
      </a>
      <a href="#">
        <BookmarkSimple/>
        Bookmarks
      </a>
      <a href="#">
        <FileText/>
        Lists
      </a>
      <a href="#">
        <User/>
        Profile
      </a>
      <a href="#">
        <DotsThreeCircle/>
        More
      </a>

    </nav>

    <button className='btnTweet' type='button'>Tweet</button>
  </aside>

  <div className="content">
    <main className="timeline">
      <div className="timeline-header">
        Home
        <Sparkle />
      </div>
    </main>

<form  className="new-tweet-form">
<label htmlFor="tweet">
<img src="https://avatars.githubusercontent.com/u/98653674?v=4" alt="User-Image" />
<textarea id="tweet" placeholder="What's Happening?"></textarea>
</label>
<button type="submit">Tweet</button>


</form>
<div className='separator'/>

<Tweet/>
<Tweet/>
<Tweet/>


  </div>
  </div>
  </React.StrictMode>,
)
