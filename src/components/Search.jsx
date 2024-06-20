import styles from './Search.module.css'
function Search({dispatch,query}) {
    return (
        <input className={styles.search} placeholder="Search"
        value={query}
        onChange={(e)=>dispatch({type:"search", payLoad: e.target.value})}>
        </input>
    )
}

export default Search
