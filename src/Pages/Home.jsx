import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
import styles from "./Home.module.css"
import Spinner from "../components/Spinner";

export default function Home (){
    return <main className={styles.homepage}>
        <PageNav></PageNav>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>Quality products, competitive prices, and exceptional service for every shopper.</h1>
        </div>
        <div className={styles.newTitle}>
            <p>is the ideal online store for diverse shopping needs. From electronics and home appliances to clothing and accessories, we offer quality products at competitive prices. Enjoy fast delivery and dedicated customer service</p>
        </div>
            <div className={styles.shopNow}>
            <button>
                <Link to='/products' className={styles.underline}> Shop now </Link> 
            </button>   
            </div>
          
      
    </main>
}