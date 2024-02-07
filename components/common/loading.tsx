'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { motion } from 'framer-motion';

const spinTransition = {
  repeat: Infinity,
  duration: 1,
  ease: 'linear',
};
function Loading() {
  const isLoading = useSelector((state: RootState) => state.common.isLoading);
  return (
    isLoading && (
      <div className="loading">
        <motion.div
          className="loading-circle"
          animate={{ rotate: 360 }}
          transition={spinTransition}
        />
      </div>
    )
  );
}

export default Loading;
