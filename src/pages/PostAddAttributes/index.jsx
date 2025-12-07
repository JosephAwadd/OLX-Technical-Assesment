import { Box, Divider } from '@mantine/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'
import styles from './styles.module.scss'
import { useCategoryFields } from '../../hooks/useCategories'
import PostAddAttributesFields from '../../components/data/postAddAttributesFields'
import CustomLoading from '../../components/loading'
import { IconAsterisk } from '@tabler/icons-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const PostAddAttributes = () => {
    const { t, i18n } = useTranslation()

    const { state } = useLocation()

    const { data, isLoading, error } = useCategoryFields({
        categorySlugs: state?.item?.slug,
        includeChildCategories: true,
        splitByCategoryIDs: true,
        flatChoices: true,
        groupChoicesBySection: true,
        flat: true,
    });

    const fetchedData = data?.[state?.item?.id]?.flatFields

    return (
        <Box>
            <h2>{t('sellAd')}</h2>
            <Box className={styles['postAddAttributes-content']}>
                <Box className={styles['postAddAttributes-content-category']}>
                    <Box className={styles['postAddAttributes-content-category-title']}>
                        <h3>{t('category')}</h3>
                    </Box>
                    <Box>
                        <h3>{i18n.language === "en" ? state?.category?.name : state?.category?.name_l1}</h3>
                        <p>{i18n.language === "en" ? state?.item?.name : state?.item?.name_l1}</p>
                    </Box>
                </Box>
                <Divider my={24} />
                <Box mt={16}>
                    {
                        isLoading ?
                            <CustomLoading />
                            :
                            <Box className={styles['postAddAttributes-content-fields']}>
                                {
                                    fetchedData?.map((field) => {
                                        return (
                                            <Box className={styles['postAddAttributes-content-fields-field']}>
                                                <Box className={styles['postAddAttributes-content-category-title']}>
                                                    <h3>{field?.name} {field?.isMandatory && <IconAsterisk size={10} />}</h3>
                                                </Box>
                                                <Box flex={1}>
                                                    <PostAddAttributesFields field={field} />
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default PostAddAttributes