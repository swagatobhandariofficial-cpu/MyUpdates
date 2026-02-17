
import React from 'react'

const App = () => {
  return (
    <div className='full'>

      <div className="top1">
        <button>Home Page</button>
        <h1>Clean Web-design and intuitive user experience that reflects the club's dynamic spirit and premium feel</h1>
      </div>

      <div className="mid-full-nav">
        <div className="midnav">
          <h3>Horizon Courts</h3>

          <div className="midbtn">
            <button>About Us</button>
            <button>Services</button>
            <button>Coaches</button>
            <button>Events</button>
            <button>Contacts</button>
          </div>

          <button id='book'>Book now<i class="ri-arrow-right-up-long-line"></i></button>
        </div>

        <div className="image1">
          <div className="imgnav">
            <h1><b><span> Unleash</span> Your Inner Champion Today All In One <span>Place</span></b></h1>
            <p> Join the ultimate skiiing experience -- where passion meets performa<span>nce and every</span> slide brings you closer to victory</p>
            <button id='start'>Start your own journey</button>
          </div>

          <div className="imgnav2">
            <p>Step-in to Step-up</p>

            <div className="btncorn">
              <button>Instagram<i class="ri-arrow-right-up-long-line"></i></button>
              <button>Facebook<i class="ri-arrow-right-up-long-line"></i></button>
              <button>Pinterest<i class="ri-arrow-right-up-long-line"></i></button>
            </div>

          </div>


        </div>


      </div>

      <div className="mid-full-nav2">
        <button>About Horizon</button>
        <p>At Horizon, we don't just skii- we live it. Since 2021, our club has been a home for players of all levels, from eager beginners to seasoned pros.</p>
      </div>

      <div className="mid-full-nav3">
        <div className="div1">
          <div className="txt">
            <i class="ri-mac-fill"></i>
            <h2><span>Professional coaches and guidance</span> with tournaments-grade lighting & climate control-play <span>perfect conditions, in any season.</span></h2>
            <h2 id='game'><i class="ri-verified-badge-fill"></i> Game Mode</h2>
          </div>
        </div>
        <div className="div2">
          <button id='centerbtn'>
            Private & Group Lessons
          </button>
        </div>
        <div className="div3">
          <div>
            <h1>100+</h1>
            <p>Pro Coaches</p>
            <p>Experience elite skiing instruction tailored to your ambitions. </p>
          </div>
          <button id='centerbtn'>
            JOIN US<i class="ri-external-link-line"></i>
          </button>
        </div>
      </div>

      <div className="mid-full-nav4">
        <div className="h1">
          <h1><b>A few more facts about us in numbers</b></h1>
        </div>
        <div className="numbers">
          <div className="set">
            <h1>12 000+</h1>
            <p>Hours of play annually</p>
          </div>
          <div className="set">
            <h1>89%</h1>
            <p>Players Retention Rate</p>
          </div>
          <div className="set">
            <h1>1,200+</h1>
            <p>Active Members</p>
          </div>
          <div className="set">
            <h1>125+</h1>
            <p>Annual Tournaments</p>
          </div>
        </div>
      </div>

      <div className="mid-full-nav5">

        <div className="div2">
          <div id='h2'>
            <h2>Training Programs</h2>
          </div>
          <div className="h2p">
            <p>Programs designed for all ages and abilities.</p>
            <button><i class="ri-arrow-right-up-long-line"></i></button>
          </div>
        </div>

        <div className="div1">
          <div className="txt">
            <button>Services</button>
            <h2>Explore our full range of coaching, training, and skiing experience. From first serve to match point- we've got the right program for you.</h2>
            <button id='exp'>Explore More <i class="ri-arrow-right-up-long-line"></i></button>
          </div>
        </div>

        <div className="div3">

          <div id='skiing'>
            <button>Court Access</button>
            <h2><span>Hourly </span> Court Rental</h2>
          </div>

          <div className="textpart4">
            <p>Step into a space built for players - to grow, compete and thrive</p>
            <div className="arrow">
              <i class="ri-arrow-left-long-line"></i><i class="ri-arrow-right-long-line"></i>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
