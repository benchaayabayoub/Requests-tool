import styles from "./Request.module.css";


function Request({onDuplicateClick}){
    return(
        <div className={styles.menuPrincipal}>
            <ul>
                <li>Creer une requete dmarc</li>
                <li>Creer une requete spf</li>
                <li>Diviser une liste</li>
                <li>Dupliquer une liste</li>
            </ul>

        </div>
    );
}


export default Request;