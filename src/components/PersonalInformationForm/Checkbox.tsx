import PropTypes, { InferProps } from 'prop-types'
import styles from './Checkbox.module.css'

// @ts-ignore
const Checkbox = ({
  id,
  name,
  value,
  handleCheckboxSelection,
}: InferProps<typeof Checkbox.propTypes>) => {
  return (
    <div className={styles.checkboxContainer}>
      <input
        id={id}
        name={name}
        value={value}
        onChange={handleCheckboxSelection}
        type='checkbox'
      />
      <label htmlFor={id}>{value}</label>
    </div>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleCheckboxSelection: PropTypes.func,
}

export default Checkbox
