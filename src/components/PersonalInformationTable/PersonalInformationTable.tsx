import PropTypes, { InferProps } from 'prop-types'
import styles from './PersonalInformationTable.module.css'
import TableHeading from './TableHeading'
import TableRow from './TableRow'

// @ts-ignore
const PersonalInformationTable = ({
  headings,
  info,
}: InferProps<typeof PersonalInformationTable.propTypes>) => {
  return (
    <div className={styles.personalInformationTable}>
      <table>
        <thead>
          <tr>
            <TableHeading heading='Profile Picture' />
            {headings.map((heading: string, index: number) => {
              return <TableHeading key={index} heading={heading} />
            })}
          </tr>
        </thead>
        <tbody>
          <TableRow info={info} />
        </tbody>
      </table>
    </div>
  )
}

PersonalInformationTable.propTypes = {
  headings: PropTypes.array,
  info: PropTypes.array,
}

export default PersonalInformationTable
