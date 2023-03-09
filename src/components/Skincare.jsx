import React from "react";
import { apiData } from "../API";
import Card from "./Card";

function Skincare() {
  return (
    <div className="row mx-5">
      <div style={{ cursor: "pointer" }}>
        <h2 className="text-center mt-3">CİLT BAKIMI</h2>
        <div className="row">
          {apiData
            .filter((urun) => urun.category == "skincare")
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

export default Skincare;
