`use client`
import styles from "./id.module.css"


export default async function Produto( {params} ){
    const response = await fetch("http://localhost:3000/api/" + params.id);
    const roupa = await response.json();
    return(
      <div className={styles.container}>
            <div className={styles.card}>
              <br/>
              <div className={styles.display}>
                <img src={roupa.img} width="403" height="428" /> 
                <img src={roupa.img2} width="403" height="428" />
                <img src={roupa.img3} width="403" height="428" />
                </div>
                 
                    <p className={styles.title}>{roupa.titulo}</p>
                    <p className={styles.descricao}>{roupa.descricao}</p>
                    <ul className={styles.descricao2}>
                      <li>{roupa.a}</li>
                      <li>{roupa.b}</li>
                      <li>{roupa.c}</li>
                      <li>{roupa.d}</li>
                      <li>{roupa.e}</li>
                    </ul> 
                    <div className={styles.display}>
                    <a className={styles.link} href="" ><img src="https://lojadior.vtexassets.com/assets/vtex/assets-builder/lojadior.store-theme/1.2.2/svg/icon-wishlist-header___269dee058ee1e859911f2e55ffcade2b.svg" width="20" height="20" /></a>
                    <a className={styles.link} href="http://localhost:3000" >Voltar a pagina inicial</a>
                    </div>
                    <a className={styles.buttonCard} href="">adicionar no Carrinho</a> 
                    <br/>
          </div>
            </div>
        )
}