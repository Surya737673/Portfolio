import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import emailjs from 'emailjs-com'

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_efdy688', 'template_erw3qk1', e.target, '8Cae2QEXF3VbAAgau')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    
  //   emailjs.sendForm("service_efdy688","template_erw3qk1", e.target , "8Cae2QEXF3VbAAgau")
  //  .then((result)=>{
  //    console.log(result.text);
  //    }),(error)=>{
  //     console.log(error)
  //    }
   }
    
  


  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Surya Pratap Yadav </h1>
                  <p>Full stack web developer</p>
                  <p>Connect with me </p> <br />
                  <p>Phone: +916392436795</p>
                  <p>Email: suryayarav@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
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
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='name' onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
