import React from "react";
import Header from "./components/Header.jsx";
import Formulario from "./components/Formulario.jsx";
import CategoriasProvider from "./context/CategoriasContext.jsx";
import RecetasProvider from "./context/RecetasContext.jsx";
import ModalProvider from "./context/ModalContext";
import ListaRecetas from "./components/ListaRecetas.jsx";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
