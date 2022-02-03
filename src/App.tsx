import { ChangeEvent, useState, MouseEvent } from 'react'
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
  selectedCitizenshipStatus: '',
}

const employmentOptions = [
  'Select employment',
  'Student',
  'Employed',
  'Unemployed',
  'Retired',
]

const citizenshipStatusOptions = ['US Citizen', 'Sponsored', 'International']

const App = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [showTable, setShowTable] = useState(false)

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleDropdownSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, selectedOption: e.target.value })
  }

  const handleRadioButtonSelection = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, selectedCitizenshipStatus: e.target.value })
  }

  const submitInformation = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowTable(true)
  }

  return (
    <div className={styles.app}>
      <Header />
      <PersonalInformationForm
        handleTextChange={handleTextChange}
        employmentOptions={employmentOptions}
        selectedOption={formData.selectedOption}
        handleDropdownSelection={handleDropdownSelection}
        citizenshipStatusOptions={citizenshipStatusOptions}
        handleRadioButtonSelection={handleRadioButtonSelection}
        submitInformation={submitInformation}
      />
      {showTable && (
        <PersonalInformationTable
          headings={Object.keys(formData)}
          info={Object.values(formData)}
        />
      )}
      <Footer />
    </div>
  )
}

export default App
