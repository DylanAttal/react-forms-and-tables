import PropTypes, { InferProps } from 'prop-types'
import Button from './Button'
import Checkbox from './Checkbox'
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
  interests,
  handleCheckboxSelection,
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
      <div style={{ margin: '1rem', width: '35%' }}>
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
      </div>

      <div style={{ margin: '1rem', width: '35%' }}>
        {interests.map((interest: string, index: number) => {
          return (
            <Checkbox
              key={index}
              id={interest}
              name='interest'
              value={interest}
              handleCheckboxSelection={handleCheckboxSelection}
            />
          )
        })}
      </div>
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
  interests: PropTypes.array,
  handleCheckboxSelection: PropTypes.func,
  submitInformation: PropTypes.func,
}

export default PersonalInformationForm
