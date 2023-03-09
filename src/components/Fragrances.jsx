import React from "react";
import { apiData } from "../API";
import Card from "./Card";

function Fragrances() {
  return (
    <div className="row mx-5">
      <div style={{ cursor: "pointer" }}>
        <h2 className="text-center mt-3">PARFÜMLER</h2>
        <div className="row">
          {apiData
            .filter((urun) => urun.category == "fragrances")
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

export default Fragrances;
