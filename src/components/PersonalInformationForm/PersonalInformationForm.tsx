import { ChangeEvent, useState } from 'react'
import styles from './PersonalInformationForm.module.css'
import TextField from './TextField'

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
}

const PersonalInformationForm = () => {
  const [formData, setFormData] = useState(initialFormData)

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
    </form>
  )
}

export default PersonalInformationForm
