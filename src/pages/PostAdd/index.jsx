import React, { useState } from 'react'
import { useCategories } from '../../hooks/useCategories';
import { Box } from '@mantine/core';
import CustomLoading from '../../components/loading'
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss'
import { IconChevronRight } from '@tabler/icons-react';
import { Link } from 'react-router';

const PostAdd = () => {
    const { data, isLoading, error } = useCategories();
    const [state, setState] = useState({
        currentView: "grid",
        selectedCategory: null,
        selectedSub: null,
    })

    const { i18n, t } = useTranslation();

    const levels = [
        {
            items: data,
            selected: state.selectedCategory,
            onSelect: (item) => {
                setState({
                    ...state,
                    selectedCategory: item,
                    selectedSub: null
                })
            },
        },
        {
            items: state.selectedCategory?.children,
            selected: state.selectedSub,
            onSelect: (item) => setState({
                ...state,
                selectedSub: item
            }),
        },
        {
            items: state.selectedSub?.children,
            selected: null,
            onSelect: null,
        },
    ];


    return (
        <>
            <h2>{t('postYourAd')}</h2>
            <h3>{t('selectCategory')}</h3>
            {isLoading ? (
                <CustomLoading />
            ) : state.currentView === "grid" ? (
                <Box className={styles['postAdd-category-list']}>
                    {
                        data?.map((cat) => {
                            return (
                                <Box className={styles['postAdd-category-list-child']}
                                    key={cat?.isLoading}
                                    onClick={() => {
                                        setState({
                                            ...state,
                                            currentView: "level1",
                                            selectedCategory: cat
                                        })
                                    }}
                                >
                                    <span>{i18n.language === "en" ? cat?.name : cat?.name_l1}</span>
                                    <IconChevronRight size={24} />
                                </Box>
                            )
                        })
                    }
                </Box>
            ) : (
                <Box className={styles['postAdd-table-wrapper']}>
                    {levels.map((level, index) => {
                        if (!level.items) return null;

                        return (
                            <Box key={index} className={styles['postAdd-table-col']}>
                                {level.items.map((item) => {
                                    const active = level.selected?.id === item.id;
                                    const hasChildren = item.children?.length > 0;

                                    if (hasChildren) {
                                        return (
                                            <Box
                                                key={item.id}
                                                className={`${styles['postAdd-table-col-item']} ${active ? styles['postAdd-table-col-item-active'] : ""}`}
                                                onClick={() => level.onSelect(item)}
                                            >
                                                <span>{i18n.language === "en" ? item.name : item.name_l1}</span>
                                                <IconChevronRight />
                                            </Box>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={item.id}
                                            to={`/post/attributes`}
                                            state={{
                                                item,
                                                category: state.selectedCategory
                                            }}
                                            className={styles['postAdd-table-col-item']}
                                        >
                                            <span>{i18n.language === "en" ? item.name : item.name_l1}</span>
                                        </Link>
                                    );
                                })}
                            </Box>
                        );
                    })}
                </Box>
            )}
        </>
    )
}

export default PostAdd