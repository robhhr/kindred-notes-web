import {motion} from 'framer-motion'

export const FadeIn = ({children, ...props}) => (
  <motion.div
    initial="exit"
    animate="enter"
    exit="exit"
    variants={{initial: {opacity: 0}, enter: {opacity: 1}, exit: {opacity: 0}}}
    {...props}
  >
    {children}
  </motion.div>
)
