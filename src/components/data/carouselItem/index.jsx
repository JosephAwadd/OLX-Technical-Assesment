import React from 'react'
import styles from './styles.module.scss'
import { Box } from '@mantine/core'
import { cutString } from '../../../utils/utils'
import { useMediaQuery } from '@mantine/hooks'
import { useTranslation } from 'react-i18next'

const CarouselItem = ({ data }) => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const { i18n } = useTranslation()
    return (
        <Box className={styles['carouselItem-container']}>
            <img src={data?.ad_image_url} alt={data?.ad_image_url} className={styles['carouselItem-image']} />
            <Box className={styles['carouselItem-content']}>
                <h3>USD {data?.ad_price}</h3>
                <p className={styles['carouselItem-content-title']}>{cutString(data?.ad_title, isMobile ? 30 : 60)}</p>
                <h5>{data?.ad_extra_fields?.mileage === "0" ? "New" : data?.ad_extra_fields?.mileage} km</h5>
                <span>{i18n.language === "en" ? data?.ad_location_l3_name_en : data?.ad_location_l3_name_lc}</span>
            </Box>
        </Box>
    )
}

export default CarouselItem