import styles from "./NavBar.module.css";
function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="img/3.png" alt="ANNARKHY logo" />
        <h1>ANNARKHY</h1>
      </div>

      <label className={styles.customField}>
        <input type="text" placeholder=" " />
        <span className={styles.placeholder}>Search</span>
      </label>

      <button>WOMEN'S</button>
      <button>MEN'S</button>
      <button>NEW RELEASES</button>
      <button>SALE'S</button>
    </nav>
  );
}

export default NavBar;
