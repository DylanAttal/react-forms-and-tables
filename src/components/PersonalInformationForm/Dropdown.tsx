import PropTypes, { InferProps } from 'prop-types'
import styles from './Dropdown.module.css'

// @ts-ignore
const Dropdown = ({
  label,
  name,
  options,
  selectedOption,
  handleDropdownSelection,
}: InferProps<typeof Dropdown.propTypes>) => {
  return (
    <div className={styles.dropdown}>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        value={selectedOption}
        onChange={handleDropdownSelection}
      >
        {options.map((option: string, index: number) => {
          return (
            <option value={option} key={index} disabled={index === 0}>
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}

Dropdown.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  selectedOption: PropTypes.string,
  handleDropdownSelection: PropTypes.func,
}

export default Dropdown
