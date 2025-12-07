import React from 'react'
import styles from './styles.module.scss'
import { Box } from '@mantine/core'
import { IconArrowNarrowLeft } from '@tabler/icons-react'
import { useNavigate } from 'react-router'
import logo from '../../../assets/logos/logo.svg'


const PostAddNavbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box className={styles['postAddNavbar-wrapper']}>
                <IconArrowNarrowLeft size={32} onClick={() => navigate(-1)} />
                <img src={logo} alt='logo' className={styles['postAddNavbar-logo']} />
            </Box>
        </>
    )
}

export default PostAddNavbar