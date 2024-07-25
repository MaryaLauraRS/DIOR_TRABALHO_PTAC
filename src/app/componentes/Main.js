'use client'
import styles from "./main.module.css";
import { useEffect, useState } from "react";
import Carrega from "./Carrega";
import ErrorGetData from "./ErrorGetData";
import Link from "next/link";

export default function Main() {

const [listProduct, setListProduct] = useState([]);
const [listcomplete, steListcomplete] = useState([]);
const [search, setSearch] = useState ('');
const [errorFetch, setErrorFetch] = useState(false);

useEffect( ()=>{
  const getProduct = async ()=> {
    try{
    const response = await fetch("http://localhost:3000/api");
    const data = await response.json();
    setListProduct(data);
    steListcomplete(data);
    }catch{
      setErrorFetch(true);
    }
  }
  getProduct();
}, []);

const orderAz = () =>{
  const newList = [...listProduct].sort( (a, b) =>
    a.titulo.localeCompare(b.titulo)
);
  setListProduct(newList);
};

const orderZa = () =>{
  const newList = [...listProduct].reverse( (a, b) =>
    a.titulo.localeCompare(b.titulo)
);
  setListProduct(newList);
};

const SearchText = (text) => {
  setSearch(text);
  
  if( text.trim() === ""){
    setListProduct(listcomplete);
    return
  }
  const newList = listProduct.filter((product) => 
    product.titulo.toUpperCase().trim().includes(search.toUpperCase().trim()));

    setListProduct(newList);
}

if(errorFetch == true){
  return <ErrorGetData/>
}

if(listProduct[0] == null){
  return <Carrega/>
}

  return (
    <>
    
    <div className={styles.inputs}>
      <input className={styles.input} type="text" value={search} placeholder="Pesquise o Produto" onChange={(event)=> SearchText( event.target.value)}/>

      <button className={styles.button} onClick={orderAz}>AZ</button>

      <button className={styles.button} onClick={orderZa}>ZA</button>

    </div>
    <main className={styles.main}>
      
            {listProduct.map((product) => (
            <div className={styles.card}>
              <br/>
                  <img src={product.img} width="303" height="328" />
                    <p className={styles.title}>{product.titulo}</p>
                    <p className={styles.descricao}> {product.descricao}</p>
                    <div className={styles.display}>
                      <a className={styles.link} href="" ><img src="https://lojadior.vtexassets.com/assets/vtex/assets-builder/lojadior.store-theme/1.2.2/svg/icon-wishlist-header___269dee058ee1e859911f2e55ffcade2b.svg" width="20" height="20" /></a>
                    <Link className={styles.link} href={`/produto/${product.id}`}>veja mais</Link>
                    </div>
                    <a className={styles.buttonCard} href="">adicionar no Carrinho</a>
                    <br/>
          </div>  ))} 
            
            </main>
            </>
    );}
