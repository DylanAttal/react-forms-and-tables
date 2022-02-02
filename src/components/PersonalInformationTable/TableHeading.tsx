import styles from './TableHeading.module.css'
import PropTypes, { InferProps } from 'prop-types'

// @ts-ignore
const TableHeading = ({
  heading,
}: InferProps<typeof TableHeading.propTypes>) => {
  return <th className={styles.heading}>{heading}</th>
}

TableHeading.propTypes = {
  heading: PropTypes.string,
}

export default TableHeading
