import React from 'react'
import CustomTextField from '../customTextField'
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss'
import CustomButton from '../customButton';
import { IconSearch } from '@tabler/icons-react';
import { Box } from '@mantine/core';

const SearchBar = () => {
    const { t } = useTranslation();

    return (
        <CustomTextField
            placeholder={t("searchLabel")}
            type="text"
            size="lg"
            className={styles['searchBar-input']}
            rightSection={
                <CustomButton
                    color='blue.3'
                    size="lg"
                    className={styles['searchBar-button']}
                    padding={12}
                >
                    <IconSearch size={24} />
                </CustomButton>}
        />
    )
}

export default SearchBar