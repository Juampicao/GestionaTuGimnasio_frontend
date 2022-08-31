import React, { useState } from "react";
import Header from "../atoms/Header";
import ContenedorLayout from "../molecules/ContenedorLayout";
import ListadoPagosSuscripciones from "../molecules/pagos/ListadoPagosSuscripciones";

const Pagos = () => {
  // console.log(date);
  return (
    <div>
      <Header title="Pagos" />
      <ContenedorLayout>
        <ListadoPagosSuscripciones />
      </ContenedorLayout>
    </div>
  );
};

export default Pagos;
