import { motion, type Variants, useAnimation } from 'framer-motion';
interface Props {
  btnText: string;
  fn?: () => void;
}
const btnContainerVariants: Variants = {
  normal: {
    backgroundColor: '#fff',
    color: '#000',
  },
  hover: {
    backgroundColor: '#BF9D7D',
    color: '#fff',
  },
};
const btnLineVariants: Variants = {
  normal: {
    width: '25%',
    backgroundColor: '#000',
  },
  hover: {
    width: '20%',
    backgroundColor: '#fff',
  },
};
export default function Button({ btnText, fn }: Props) {
  const controls = useAnimation();

  return (
    <motion.button
      className="button"
      onHoverStart={() => controls.start('hover')}
      onHoverEnd={() => controls.start('normal')}
      variants={btnContainerVariants}
      initial="normal"
      animate={controls}
      transition={{ type: 'spring', duration: 0.8 }}
      onClick={fn}
    >
      <span>{btnText}</span>
      <motion.div
        className="button-line"
        variants={btnLineVariants}
        initial="normal"
        animate={controls}
        transition={{ type: 'spring', duration: 0.8 }}
      />
    </motion.button>
  );
}
