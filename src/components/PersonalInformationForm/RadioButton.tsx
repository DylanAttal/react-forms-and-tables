import PropTypes, { InferProps } from 'prop-types'
import styles from './RadioButton.module.css'

// @ts-ignore
const RadioButton = ({
  id,
  name,
  value,
  handleRadioButtonSelection,
}: InferProps<typeof RadioButton.propTypes>) => {
  return (
    <div className={styles.radioButtonContainer}>
      <input
        id={id}
        type='radio'
        name={name}
        value={value}
        onChange={handleRadioButtonSelection}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  )
}

RadioButton.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleRadioButtonSelection: PropTypes.func,
}

export default RadioButton
