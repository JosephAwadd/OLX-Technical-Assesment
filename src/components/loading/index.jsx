import { Box, Loader } from '@mantine/core'
import React from 'react'
import styles from './styles.module.scss'

const CustomLoading = ({ size, height, color, marginTop }) => {
  return (
    <Box className={styles['custom-loading-wrapper']} style={{ height: height }} mt={marginTop}>
      <Loader color={color} size={size} />
    </Box>
  )
}

export default CustomLoading