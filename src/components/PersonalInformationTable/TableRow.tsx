import PropTypes, { InferProps } from 'prop-types'
import SamplePicture from '../../assets/sample-picture.jpg'
import styles from './TableRow.module.css'

// @ts-ignore
const TableRow = (props: InferProps<typeof TableRow.propTypes>) => {
  return (
    <tr className={styles.tableRow}>
      <td>
        <img
          className={`${styles.samplePicture} ${styles.cell}`}
          src={SamplePicture}
          alt='profile of user'
        />
      </td>
      {props.info.map((prop: string, index: number) => {
        return (
          <td className={styles.cell} key={index}>
            {prop}
          </td>
        )
      })}
    </tr>
  )
}

TableRow.propTypes = {
  info: PropTypes.array,
}

export default TableRow
