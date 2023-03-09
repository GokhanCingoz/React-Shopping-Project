import React, { useContext } from "react";
import { AppContext } from "../context/GlobalContext";

function Footer() {
  const {
    favorilereEkle,
    favorilerdenCikar,
    favoriler,
    sepeteEkle,
    sepettenCikar,
    sepet,
    sepetTutari,
  } = useContext(AppContext);
  return (
    <div class="fixed-bottom text-center footer-bg" style={{ height: "50px" }}>
      <span class="mt-3">
        TOPLAM SEPET TUTARINIZ <i class="fa-solid fa-basket-shopping"></i>{" "}
      </span>
      <p>{sepetTutari()} €</p>
    </div>
  );
}

export default Footer;
