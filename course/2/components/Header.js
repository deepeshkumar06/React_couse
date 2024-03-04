import './Header.css'
import styles from './Header.module.css'

function Header (){
    const style = {
        color:"red", 
        backgroundColor:"skyblue",
        padding:"5px",
    }
    return (
        <>
            {/* { <h1 style={color:"red", backgroundColor:"skyblue"}style}>Inline Styling</h1> */}
            <h1 className={styles.Big}>Inline</h1>
            <p>Welcome</p>
        </>
    );
}

export default Header;