import styles from './Button.module.css'
import PropTypes, { InferProps } from 'prop-types'

// @ts-ignore
const Button = ({ text, onClick }: InferProps<typeof Button.propTypes>) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
