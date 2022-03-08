import axios from "axios";
import React, { useEffect, useState } from "react";
import GifContext from "../context/GifContext";

export default function GifProvider({ children }) {
  //estado para manejar las busquedas del input
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState();

  //evento al cambiar el valor del input
  const onChangeInputSearch = ({ target }) => {
    setSearch(target.value);
  };
  //obtengo el query o el valor del input
  const onClickSearch = () => {
    getGifQuery(search);
    console.log("click", search);
  };

  //trae los Gif por q
  const getGifQuery = async (busqueda) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=PoR3CQt5ZlA0CoMpJi1MK9iCYQG6fgkT&q=${busqueda}`;

    const res = await axios.get(url);
    const datos = res.data.data;

    const misDatos = datos.map((dato) => {
      return {
        id: dato.id,
        title: dato.title,
        user: dato.username,
        time: dato.import_datetime,
        imageUrl: dato.images.downsized_large.url,
      };
    });
    setGifs(misDatos);
  };

  //borro o  reinicio el estado a vacio
  const onClickSearchClean = () => {
    setSearch("");
    console.log(search);
  };
  return (
    <GifContext.Provider
      value={{
        setGifs,
        gifs,
        onChangeInputSearch,
        search,
        setSearch,
        onClickSearch,
        onClickSearchClean,
      }}>
      {children}
    </GifContext.Provider>
  );
}
