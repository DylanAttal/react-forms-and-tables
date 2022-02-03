import PropTypes, { InferProps } from 'prop-types'
import styles from './TableHeading.module.css'

// @ts-ignore
const TableHeading = ({
  heading,
}: InferProps<typeof TableHeading.propTypes>) => {
  const mapHeadings = (heading: string) => {
    switch (heading) {
      case 'Profile Picture':
        return 'Profile Picture'
      case 'firstName':
        return 'First Name'
      case 'lastName':
        return 'Last Name'
      case 'email':
        return 'Email'
      case 'selectedOption':
        return 'Employment'
      case 'selectedCitizenshipStatus':
        return 'Citizenship'
      case 'selectedInterests':
        return 'Interests'
      default:
        return ''
    }
  }

  return <th className={styles.heading}>{mapHeadings(heading)}</th>
}

TableHeading.propTypes = {
  heading: PropTypes.string,
}

export default TableHeading
