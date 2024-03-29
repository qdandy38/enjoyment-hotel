import { motion, type Variants, type Transition } from 'framer-motion';
interface Props {
  toggle: () => void;
}
interface PathProps {
  d?: string;
  variants: Variants;
  transition?: Transition;
  stroke?: string;
}
const Path = (Props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    stroke="white"
    strokeLinecap="round"
    {...Props}
  />
);
export default function MenuToggle({ toggle }: Props) {
  return (
    <button
      className="lg:hidden"
      onClick={toggle}
    >
      <svg
        width="33"
        height="33"
        viewBox="0 0 23 23"
      >
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
}
