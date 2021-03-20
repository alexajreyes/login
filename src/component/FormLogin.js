import React from 'react'
import ImgExample from '../assets/images/maria-teneva-i9sV0g3tF94-unsplash.jpg'
import '../assets/styles/FormLog.css'

import { AiFillFacebook as FacebookIcon } from 'react-icons/ai'

function FormLogin() {
  // state = {}
  //Controlamos el estado del formulario
  //handleSubmit = e => {
  //  e.preventDeafaul()
  // console.log(this.state)
  //}
  // onSubmit={this.handleSubmit}
  return (
    <div className="main">
      <div className="container-form">
        <div className="place-example">
          <img src={ImgExample} alt="Place-Example" />
        </div>
        <form className="form-main">
          <h3>Safe Travel</h3>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Teléfono, usuario o correo electronico"
            />
            <input
              className="form-control"
              type="text"
              placeholder="contraseña"
            />
            <button className="btn btn-primarys">Iniciar sesion</button>
          </div>
          <div className="icons">
            <a href="/">
              <span className="icon-facebook">
                <FacebookIcon size={32} color="#333" />
                Iniciar sesion con facebook
              </span>
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormLogin
