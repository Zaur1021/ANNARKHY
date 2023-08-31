import styles from "./NavBar.module.css";
function NavBar() {
  return (
    <nav className={styles.navbar}>
      <img src="img/5.png" alt="ANNARKHY logo" />

      <input type="text" placeholder=" " />

      <h2>WOMEN'S</h2>
      <h2>MEN'S</h2>
      <h2>NEW RELEASES</h2>
      <h2>SALE'S</h2>
    </nav>
  );
}

export default NavBar;
