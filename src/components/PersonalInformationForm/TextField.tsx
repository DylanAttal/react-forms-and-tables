import PropTypes, { InferProps } from 'prop-types'
import styles from './TextField.module.css'

// @ts-ignore
const TextField = ({
  label,
  name,
  handleTextChange,
}: InferProps<typeof TextField.propTypes>) => {
  return (
    <div className={styles.textField}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} onChange={handleTextChange} />
    </div>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  handleTextChange: PropTypes.func,
}

export default TextField
