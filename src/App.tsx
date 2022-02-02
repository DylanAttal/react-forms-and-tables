import { ChangeEvent, useState } from 'react'
import styles from './App.module.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PersonalInformationForm from './components/PersonalInformationForm/PersonalInformationForm'
import PersonalInformationTable from './components/PersonalInformationTable/PersonalInformationTable'

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

const App = () => {
  const [formData, setFormData] = useState(initialFormData)

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleDropdownSelection = (e: any) => {
    setFormData({ ...formData, selectedOption: e.target.value })
  }

  return (
    <div className={styles.app}>
      <Header />
      <PersonalInformationForm
        handleTextChange={handleTextChange}
        employmentOptions={employmentOptions}
        selectedOption={formData.selectedOption}
        handleDropdownSelection={handleDropdownSelection}
      />
      <PersonalInformationTable headings={Object.keys(formData)} />
      <Footer />
    </div>
  )
}

export default App
