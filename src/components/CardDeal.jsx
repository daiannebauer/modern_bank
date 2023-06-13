import { card } from '../assets'
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => (
  <section id="card" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" />
        in few easy steps.
      </h2>

      <p className={`${styles.paragraph} mt-5`}>
      Arcu tortor, purus in mattis at sed integer faucibus.<br className="sm:block hidden" />
      Aliquet quis aliquet eget mauris tortor. Aliquet<br className="sm:block hidden" />
      ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`}/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        <img src={card} alt="card" className="w-[100%] h-[100%] relative z-[5]" />
      </div>
  </section>  
)

export default CardDeal