import styles from './App.module.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PersonalInformationForm from './components/PersonalInformationForm/PersonalInformationForm'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <PersonalInformationForm />
      <Footer />
    </div>
  )
}

export default App
