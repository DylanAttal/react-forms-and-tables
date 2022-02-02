import PropTypes, { InferProps } from 'prop-types'
import styles from './TableRow.module.css'

// @ts-ignore
const TableRow = (props: InferProps<typeof TableRow.propTypes>) => {
  return (
    <tr className={styles.tableRow}>
      {props.info.map((prop: string, index: number) => {
        return <td key={index}>{prop}</td>
      })}
    </tr>
  )
}

TableRow.propTypes = {
  info: PropTypes.array,
}

export default TableRow
