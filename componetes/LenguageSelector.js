import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";


const LenguageSelector = ({es, en, pt}) => {
  const router = useRouter();
  console.log(router);

  const changeLanguage = (e) => {
    console.log(e.target.value);
    router.push(router.pathname, router.pathname,
         { locale: e.target.value })
  };
  return (
    <select onChange={changeLanguage}>
      <option value="es">πͺπΈ</option>
      <option value="en">πΊπΈ</option>
      <option value="pt">π΅πΉ</option>
    </select>
  );
};

export default LenguageSelector;
