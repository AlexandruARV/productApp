import { useEffect, useState } from "react";
import styles from "./Item.module.css"
import { useProducts } from "../context/ContextState";
import Spinner from "../components/Spinner"



function Item() {
   
    const {products, getProducts, isLoading, img} = useProducts();
    
    useEffect(function(){
        getProducts();
    },[])
    console.log(products[0])
    if(isLoading) return <Spinner ></Spinner>

    return (
        <main className={styles.main}>
            {products.map((el,i)=>{
                return <div key={i}>
                    <ul className={styles.frame}>
                        <li>
                            <img className={styles.productImg}src={`${img}${el.productFullName}.jpg`} />
                        </li>
                        <li className={styles.title}> {el.name}</li>
                        
                        <li className={styles.description}> {el.productDescription}</li>
                        <li> 
                            <div>{el.price}</div>
                            <button>Add</button>
                        </li>
                    </ul>
                </div>
            
            })}
            
        </main>
    )
}

export default Item
