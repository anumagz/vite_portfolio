import React from 'react';
import { illust} from '../assets';
import { styles } from '../styles';

const Illust = () => {
  return (
    <div>
      <h2 className={`${styles.sectionHeadText} text-center`}>2D Illustrations</h2>
      <img src={illust} alt="illust" />
    </div>
  );
}

export default Illust;
