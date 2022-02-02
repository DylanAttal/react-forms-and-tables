import PropTypes, { InferProps } from 'prop-types'
import Dropdown from './Dropdown'
import styles from './PersonalInformationForm.module.css'
import TextField from './TextField'

// @ts-ignore
const PersonalInformationForm = ({
  handleTextChange,
  employmentOptions,
  selectedOption,
  handleDropdownSelection,
}: InferProps<typeof PersonalInformationForm.propTypes>) => {
  return (
    <form className={styles.form}>
      <TextField
        label='First Name'
        name='firstName'
        handleTextChange={handleTextChange}
      />
      <TextField
        label='Last Name'
        name='lastName'
        handleTextChange={handleTextChange}
      />
      <TextField
        label='Email'
        name='email'
        handleTextChange={handleTextChange}
      />
      <Dropdown
        label='Employment'
        name='employmentStatus'
        options={employmentOptions}
        selectedOption={selectedOption}
        handleDropdownSelection={handleDropdownSelection}
      />
    </form>
  )
}

PersonalInformationForm.propTypes = {
  handleTextChange: PropTypes.func,
  employmentOptions: PropTypes.array,
  selectedOption: PropTypes.string,
  handleDropdownSelection: PropTypes.func,
}

export default PersonalInformationForm
