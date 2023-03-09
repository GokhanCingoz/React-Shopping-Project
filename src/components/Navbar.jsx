import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/GlobalContext";
import Anasayfa from "./Anasayfa";

function Navbar() {
  const {
    favorilereEkle,
    favorilerdenCikar,
    favoriler,
    sepeteEkle,
    sepettenCikar,
    sepet,
    sepetMiktari,
  } = useContext(AppContext);

  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ALIŞVERİŞ
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/anasayfa"
                >
                  Tüm Ürünler
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/akıllıTelefonlar"
                >
                  Akıllı Telefonlar
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/laptoplar"
                >
                  Laptoplar
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Daha Fazla
                </Link>
                <ul className="dropdown-menu ">
                  <li>
                    <Link className="dropdown-item" to="/ciltBakımÜrünleri">
                      Cilt Bakım Ürünleri
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/farfümler">
                      Parfümler
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/evDekorasyonu">
                      Ev Dekorasyonu
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/yiyecekler">
                      Yiyecekler
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link sepet " to="/favoriler">
                  Favoriler <i class="fa-solid fa-heart"></i>
                  <span className="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-danger"></span>
                  <span className=" top-10 start-80 translate-middle badge rounded-pill bg-danger">
                    {favoriler.length}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link favorilerr " to="/sepet">
                  Sepet <i class="fa-solid fa-basket-shopping"></i>
                  <span className="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-danger"></span>
                  <span className="top-10 start-80 translate-middle badge rounded-pill bg-danger">
                    {sepetMiktari}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
