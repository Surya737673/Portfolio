import React from "react"
import "./Home.css"
import pro from "../pic/pro.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import '../../fontawesome-free-6.0.0-web/css/all.css'
// import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1 id="AnshumaanName">
              Hi, I’m <span>Surya Pratap Yadav</span>
            </h1>
            <h2>
              <span>
                {/* <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /> */}
              </span>
            </h2>

            <p>A passionate Full stack web developer intersted in developing 
            scalable websites and applications using a wide range of front-end and back-end skills. Looking to further enhance my skills.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                <a target="#" href="https://www.linkedin.com/in/surya-pratap-yadav-720116229/">
                <button className='btn_shadow'>
                  <i class='fab fa-linkedin-in'></i>
                </button>
                 </a>
                <a target="#" href="https://github.com/Surya737673">
                  <button className='btn_shadow'>
                   <i class='fab fa-github'></i>
                  </button>
                  </a>
                  <a target="#" href="mailto:suryayarav@gmail.com">
                  <button className='btn_shadow'>
                  <i class="fa-brands fa-google-plus"></i>
                  </button> 
                  </a>
                </div>
              </div>
              {/* <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div> */}
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={pro} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
