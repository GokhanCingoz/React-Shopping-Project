import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { apiData, URL } from "../API";
import { AppContext } from "../context/GlobalContext";
import "react-tooltip/dist/react-tooltip.css";
import Modal from "react-bootstrap/Modal";
import { isDisabled } from "@testing-library/user-event/dist/utils/misc/isDisabled";

function Card({ product }) {
  const [adet, setAdet] = useState(product.quantity);
  const [miktar, setMiktar] = useState(product.quantity);

  //modal fonksiyonlarına ait alan

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //bitişi

  useEffect(() => {
    if (sepetKontrol(product.id) && adet == 0) {
      sepettenCikar(product.id);
    }
    if (adet < 0) {
      window.alert("0dan küçük adet seçilemez");
      setAdet(0);
    }
  }, [adet]);

  const {
    favorilereEkle,
    favorilerdenCikar,
    favoriler,
    sepeteEkle,
    sepettenCikar,
    sepet,
    sepetMiktari,
    setSepetMiktari,
  } = useContext(AppContext);

  const favoriKontrol = (x) => {
    const secim = favoriler.some((falan) => falan.id == x);
    return secim;
  };

  const sepetKontrol = (x) => {
    const secim = sepet.some((falan) => falan.id == x);
    return secim;
  };

  return (
    <>
      <div
        className="card text-center"
        style={{ width: "400px", height: "600px" }}
      >
        <div className="card-body">
          <h5 className="card-title " style={{ height: "50px" }}>
            {product.title}{" "}
            {favoriKontrol(product.id) ? (
              <button
                className="btn btn-danger favori-btn"
                onClick={() => favorilerdenCikar(product.id)}
              >
                <i class="fa-solid fa-heart-circle-minus"></i>
              </button>
            ) : (
              <button
                className="btn btn-warning  favori-btn"
                onClick={() => favorilereEkle(product)}
              >
                <i class="fa-solid fa-heart-circle-plus"></i>
              </button>
            )}
          </h5>

          <p className="card-text mb-2 mt-2 card-text">{product.description}</p>

          <img
            style={{ height: "250px" }}
            className="img-fluid mt-4"
            src={product.images[0]}
            onClick={handleShow}
          />
        </div>
        <div className="mt-2 ">
          <h3 className="">{product.price} €</h3>
          <div className="d-flex justify-content-center align-items-center">
            <button
              className="btn btn-outline-danger btn-sm"
              value={miktar}
              onChange={(e) => setMiktar(e.target.value)}
              onClick={() => {
                setAdet(adet + 1);
                product.quantity += 1;
              }}
            >
              +
            </button>
            <h3 className="mx-3 pt-2">{adet}</h3>
            <button
              className="btn btn-outline-danger btn-sm"
              value={miktar}
              onClick={() => {
                if (adet > 0) {
                  setAdet(adet - 1);
                  product.quantity -= 1;
                  if (sepetMiktari > 0) {
                    setSepetMiktari(sepetMiktari - 1);
                  }
                }
              }}
            >
              -
            </button>
          </div>
        </div>
        <div>
          {sepetKontrol(product.id) && adet > 0 ? (
            <button
              className="btn btn-success "
              style={{ margin: "25px" }}
              onClick={() => {
                sepettenCikar(product.id);
                product.quantity = 0;
                setSepetMiktari(sepetMiktari - adet);
                setAdet(0);
              }}
            >
              SEPETTEN ÇIKAR
            </button>
          ) : (
            <button
              disabled={adet == 0}
              className="btn btn-warning "
              style={{ margin: "25px" }}
              onClick={() => {
                sepeteEkle(product);
                setSepetMiktari(sepetMiktari + adet);
              }}
            >
              SEPETE EKLE
            </button>
          )}
        </div>
        <div>
          {/* Modal başlangıcı */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{product.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={product.images[0]}
                className="img-fluid mb-4 d-flex justify content center"
                style={{ height: "300px" }}
                alt=""
              />

              <p>{product.description}</p>
              <p>Stok : {product.stock}</p>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-warning" onClick={handleClose}>
                Kapat
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Card;
