import { ChangeEvent, useState } from 'react'
import Dropdown from './Dropdown'
import styles from './PersonalInformationForm.module.css'
import TextField from './TextField'

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  selectedOption: '',
}

const employmentOptions = [
  'Select employment',
  'Student',
  'Employed',
  'Unemployed',
  'Retired',
]

const PersonalInformationForm = () => {
  const [formData, setFormData] = useState(initialFormData)

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleDropdownSelection = (e: any) => {
    setFormData({ ...formData, selectedOption: e.target.value })
  }

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
        selectedOption={formData.selectedOption}
        handleDropdownSelection={handleDropdownSelection}
      />
    </form>
  )
}

export default PersonalInformationForm
