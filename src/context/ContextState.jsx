import { createContext, useContext, useReducer, useState } from "react";

const ProductsContext = createContext();

const apiUrl = 'https://fmcgvqwumrrvtjcjhoel.supabase.co/rest/v1/products?select=*';
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtY2d2cXd1bXJydnRqY2pob2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxODUwNDEsImV4cCI6MjAzMjc2MTA0MX0.22cfGqj6qLlYZFj_w86Kj1nv_qAoP2I6zHTd3QwFbNA';
const IMG_URL = `https://fmcgvqwumrrvtjcjhoel.supabase.co/storage/v1/object/public/products-img/`

const initialState = {
    products: [],
    query: '',
    loading: false,
    error: '',
    img: IMG_URL,
}


function reducer(state,action){
   
    switch (action.type){
        case ('search'):
            return {...state, query: action.payLoad}
        case ('loading'):{
            return {...state, loading: true}}
        case ('load/products'):
            return {...state, products: action.payLoad,loading: false}
        case('error'):{
            return {...state, error: action.payLoad, loading: false }
        }
        default: throw new Error('Fatal eror')
    }
}


function ProductsProvider ({children}){

    const [{query, products, loading, img},dispatch] = useReducer(reducer, initialState)

    async function getProducts(){
        dispatch({type: 'loading'})
        try{
            const res = await fetch(apiUrl, {
                 method: 'GET',
                 headers: {
                     'apikey': apiKey,
                     'Authorization': `Bearer ${apiKey}`,
                     'Content-Type': 'application/json'
                 }
             })
             const data = await res.json();
             dispatch({type: 'load/products', payLoad: data})
             
            } catch (err){
                console.log(err)
            }
    }


return (
    <ProductsContext.Provider value={{products, getProducts, isLoading: loading, img}}>
        {children}
    </ProductsContext.Provider>
)

}
function useProducts(){
    const contex = useContext(ProductsContext);
    return contex;
}

export  {ProductsProvider, ProductsContext, useProducts};