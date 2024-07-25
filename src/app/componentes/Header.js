import Styles from "./main.module.css"

export default async function Header() {
    return (
      <header>
        <div className={Styles.nav}>
        <a href=""><img className={Styles.img} src="https://lojadior.vtexassets.com/assets/vtex/assets-builder/lojadior.store-theme/1.0.70/svg/logo-mobile___5ad97bb9b479734514bf4909a98581de.svg" width="120" height="41"/></a>
        
  <a className={Styles.link} href=""> <img src="https://lojadior.vtexassets.com/assets/vtex/assets-builder/lojadior.store-theme/1.2.2/svg/icon-wishlist-header___269dee058ee1e859911f2e55ffcade2b.svg" width="20" height="20" /> </a>
  <a className={Styles.carrinho} href=""> 
    <img src="https://lojadior.vtexassets.com/assets/vtex/assets-builder/lojadior.store-theme/1.2.2/svg/cart___70e5f051ded99fb19e3943f51b699b08.svg" width="25" height="25" />
   </a>
</div>

      </header>
    );
  }
  