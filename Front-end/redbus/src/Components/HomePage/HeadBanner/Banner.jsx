import styles from "./Banner.module.css";
import { SearchSection} from '../SearchSection/SearchSection'
function Banner() {
  return (
    <div>
      <div
        className={styles.banner_image}
        style={{
          backgroundImage:
            "url('https://st.redbus.in/Images/INDOFFER/COVID-19/heroimage2.png')",
        }}
      >
        <SearchSection />
      </div>
    </div>
  );
}
export { Banner };
