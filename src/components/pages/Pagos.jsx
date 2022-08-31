import React, { useState } from "react";
import Header from "../atoms/Header";
import ListadoPagosSuscripciones from "../molecules/pagos/ListadoPagosSuscripciones";

const Pagos = () => {
  // console.log(date);
  return (
    <div>
      <Header title="Pagos" />

      <ListadoPagosSuscripciones />
    </div>
  );
};

export default Pagos;
