import React from "react";
import { apiData } from "../API";
import Card from "./Card";

function HomeDecoration() {
  return (
    <div className="row mx-5">
      <div style={{ cursor: "pointer" }}>
        <h2 className="text-center mt-3">EV DEKORASYONU</h2>
        <div className="row">
          {apiData
            .filter((urun) => urun.category == "home-decoration")
            .map((veri) => (
              <div className="col-md-4 my-5">
                <Card product={veri} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomeDecoration;
