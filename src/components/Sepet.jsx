import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../API";
import { AppContext } from "../context/GlobalContext";
import "react-tooltip/dist/react-tooltip.css";
import Card from "./Card";

function Sepet() {
  const {
    favorilereEkle,
    favorilerdenCikar,
    favoriler,
    sepeteEkle,
    sepettenCikar,
    sepet,
  } = useContext(AppContext);

  const favoriKontrol = (x) => {
    const secim = favoriler.some((falan) => falan.id == x);
    return secim;
  };
  const sepetKontrol = (x) => {
    const secim = sepet.some((falan) => falan.id == x);
    return secim;
  };
  const navigate = useNavigate();

  return (
    <div className="container sayfa">
      {sepet.length == 0 ? (
        <div className="alert alert-danger my-5 m-auto" role="alert">
          Sepetinizde hiç ürün bulunmamaktadır !!!
        </div>
      ) : (
        <div className="row mx-5">
          <div>
            <h2 className="text-center mt-3">SEPETİNİZ</h2>
            <div className="row">
              {sepet.map((veri) => (
                <div className="col-md-4 d-flex justift-content-center mt-4">
                  <Card product={veri} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sepet;
