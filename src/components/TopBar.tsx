
import styles from "../styles/Top.module.css";

const TopBar = ()=>{
  
  const search_onClick =()=>{

  }

  const alarm_onClick = ()=>{

  }

  return(
    <div className ={styles.TopBar}>
      
      <div className = {styles.Group_279}>
        <div className = {styles.daitssu}>DAITSSU</div>

        <button className = {styles.search_icon_box} onClick={search_onClick}>
          <div className = {styles.search_icon}>
            <img src = "images/search_icon.png"/>
          </div>
        </button>

        <button className = {styles.alarm_icon_box} onClick={alarm_onClick}>
          <div className = {styles.alarm_icon}>
            <img src = "images/alarm_icon.png"/>
          </div>
        </button>


      </div>
    </div>
    
  );
};
export default TopBar;