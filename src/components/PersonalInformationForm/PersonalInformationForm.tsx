import PropTypes, { InferProps } from 'prop-types'
import Button from './Button'
import Dropdown from './Dropdown'
import styles from './PersonalInformationForm.module.css'
import RadioButton from './RadioButton'
import TextField from './TextField'

// @ts-ignore
const PersonalInformationForm = ({
  handleTextChange,
  employmentOptions,
  selectedOption,
  handleDropdownSelection,
  citizenshipStatusOptions,
  handleRadioButtonSelection,
  submitInformation,
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
      {citizenshipStatusOptions.map((option: string, index: number) => {
        return (
          <RadioButton
            key={index}
            id={option}
            name='citizenshipStatus'
            value={option}
            handleRadioButtonSelection={handleRadioButtonSelection}
          />
        )
      })}
      <Button text='Submit information' onClick={submitInformation} />
    </form>
  )
}

PersonalInformationForm.propTypes = {
  handleTextChange: PropTypes.func,
  employmentOptions: PropTypes.array,
  selectedOption: PropTypes.string,
  handleDropdownSelection: PropTypes.func,
  citizenshipStatusOptions: PropTypes.array,
  handleRadioButtonSelection: PropTypes.func,
  submitInformation: PropTypes.func,
}

export default PersonalInformationForm
