import Link from "next/link";
import Styles from "./page.module.css"
export default function NotFound(){
    return(
        <div>
            <center>
            <a className={Styles.title}>pagina não encontrada</a>
            <br/>
            <Link href="http://localhost:3000" className={Styles.link}>Voltar para a pagina inicial</Link>
            </center>
        </div>
    )
}