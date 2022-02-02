import PropTypes, { InferProps } from 'prop-types'
import styles from './PersonalInformationTable.module.css'

// @ts-ignore
const PersonalInformationTable = ({
  headings,
}: InferProps<typeof PersonalInformationTable.propTypes>) => {
  return (
    <div className={styles.personalInformationTable}>
      <table>
        <thead>
          <tr>
            {headings.map((heading: string, index: number) => {
              return <th key={index}>{heading}</th>
            })}
          </tr>
        </thead>
      </table>
    </div>
  )
}

PersonalInformationTable.propTypes = {
  headings: PropTypes.array,
}

export default PersonalInformationTable
