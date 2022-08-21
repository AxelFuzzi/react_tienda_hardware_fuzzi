import React from 'react'
import { CartWidget } from './CartWidget'

export const Navbar = () => {
  return (
    <>
    <h1 className="titulo">Hardware Online</h1>
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center" >
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-2" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown"> 
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pc de Escritorio</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Tarjetas gráficas</a></li>
                    <li><a className="dropdown-item" href="#">Microprocesadores</a></li>
                    <li><a className="dropdown-item" href="#">Memorias Ram</a></li>
                    <li><a className="dropdown-item" href="#">Fuentes</a></li>
                    <li><a className="dropdown-item" href="#">Gabinetes</a></li>
                    <li><a className="dropdown-item" href="#">Almacenamiento</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Almacenamiento</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">SSD</a></li>
                    <li><a className="dropdown-item" href="#">HDD</a></li>
                  </ul>
                </li>
                  <li><a className="dropdown-item" href="#">Monitores</a></li>
                  <li><a className="dropdown-item" href="#">Notebooks</a></li>
                  <li><a className="dropdown-item" href="#">Perifericos</a></li>
              </ul>
            </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contactanos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Preguntas Frecuentes</a>
              </li>  
          </ul>
        </div>
      </div>
      <CartWidget/>
    </nav>
    
    </>
  )
}

//export default Navbar