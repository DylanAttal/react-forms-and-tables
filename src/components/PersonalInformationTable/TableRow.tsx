import PropTypes, { InferProps } from 'prop-types'
import SamplePicture from '../../assets/sample-picture.jpg'
import styles from './TableRow.module.css'

// @ts-ignore
const TableRow = (props: InferProps<typeof TableRow.propTypes>) => {
  const prettyPrint = (x: string | string[]) => {
    if (Array.isArray(x)) {
      return x.filter((x) => x !== '').join(', ')
    }

    return x
  }

  return (
    <tr className={styles.tableRow}>
      <td>
        <img
          className={`${styles.samplePicture} ${styles.cell}`}
          src={SamplePicture}
          alt='profile of user'
        />
      </td>
      {props.info.map((x: string, index: number) => {
        return (
          <td className={styles.cell} key={index}>
            {prettyPrint(x)}
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
