import { Box, Divider } from '@mantine/core'
import logo from '../../../assets/logos/logo.svg'
import styles from './styles.module.scss'
import CustomSelect from '../../inputs/customSelect'
import { IconBell, IconBrandLine, IconCaretDown, IconMapPin, IconPlus } from '@tabler/icons-react'
import SearchBar from '../../inputs/searchBar'
import { useTranslation } from 'react-i18next'
import LanguageToggle from '../../data/languageToggle'
import CustomButton from '../../inputs/customButton'
import profilePic from '../../../assets/profile-pic.png'
import { Link } from 'react-router'

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <Box>
            <img src={logo} alt='logo' className={styles['navbar-logo']} />
            <Box className={styles['navbar-content']}>
                <CustomSelect
                    defaultValue="lb"
                    leftSection={<IconMapPin size={24} />}
                    rightSection={<IconCaretDown size={24} />}
                    data={[
                        { value: "lb", label: t("country") }
                    ]}
                />
                <SearchBar />
                <LanguageToggle />
                <CustomButton
                    className={{
                        root: styles['navbar-button-root'],
                        label: styles['navbar-button-label'],
                    }}
                    variant="transparent"
                >
                    <IconBrandLine size={24} />
                </CustomButton>
                <CustomButton
                    className={{
                        root: styles['navbar-button-root'],
                        label: styles['navbar-button-label'],
                    }}
                    variant="transparent"
                >
                    <IconBell size={24} />
                </CustomButton>
                <img src={profilePic} alt='profilePic' className={styles['navbar-profile-pic']} />
                <Link to="/post" style={{ textDecoration: 'none' }}>
                    <CustomButton
                        className={{
                            root: styles['navbar-sell-button-root'],
                            label: styles['navbar-sell-button-label'],
                        }}
                        size="md"
                    >
                        <IconPlus size={16} /> {t("sellLabel")}
                    </CustomButton>
                </Link>
            </Box>

            <Divider className={styles['navbar-divider']} />
        </Box>
    )
}

export default Navbar