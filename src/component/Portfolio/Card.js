import React, { useState } from "react"
const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          {/* <label>
            <i className='far fa-heart'></i> {props.totalLike}
          </label> */}
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              
              <h1>{props.title}</h1>
              
              <div className='button f_flex mtop'>
                <a target='#' href={props.github}>
                  <button className='btn_shadow'>
                    Code<i class="fa-brands fa-github githubIconSize"></i>
                  </button>
                </a>
                <a target='#' href={props.deployed}>
                  <button className='btn_shadow'>
                    VIEW PROJECT<i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </button>
                </a>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )
      }
    </>
  )
}

export default Card
