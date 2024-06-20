import { createContext, useContext, useEffect, useReducer, useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./Products.module.css"
import Search from "../components/Search";
import Item from "../components/Item";
import { ProductsContext, useProducts } from '../context/ContextState';



export default function Products (){
    return <main className={styles.productpage}>
        <PageNav>
           <Search />
        </PageNav>
        <main>
        <Item />
        </main>
    </main> 
}
