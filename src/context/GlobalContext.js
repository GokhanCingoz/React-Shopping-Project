import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [favoriler, setFavoriler] = useState([]);
  const [sepet, setSepet] = useState([]);

  const favorilereEkle = (urun) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.concat(urun);

    setFavoriler(yeniFavoriler);
  };

  const favorilerdenCikar = (id) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.filter((urun) => urun.id !== id);

    setFavoriler(yeniFavoriler);
  };

  const sepeteEkle = (urun) => {
    const eskiSepet = [...sepet];
    const yeniSepet = eskiSepet.concat(urun);

    setSepet(yeniSepet);
  };

  const sepettenCikar = (id) => {
    const eskiSepet = [...sepet];
    const yeniSepet = eskiSepet.filter((urun) => urun.id !== id);

    setSepet(yeniSepet);
  };

  const sepetTutari = () => {
    return sepet.reduce((add, object) => {
      return add + object.price * object.quantity;
    }, 0);
  };

  const [sepetMiktari, setSepetMiktari] = useState(0);

  return (
    <AppContext.Provider
      value={{
        favorilereEkle,
        favorilerdenCikar,
        favoriler,
        sepeteEkle,
        sepettenCikar,
        sepet,
        sepetTutari,
        setSepetMiktari,
        sepetMiktari,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
