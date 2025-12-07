import { Container } from '@mantine/core'
import { Outlet } from 'react-router'
import Navbar from '../components/navigation/navbar'

const PublicLayout = () => {
    return (
        <Container size="xl">
            <Navbar />
            <Outlet />
        </Container>
    )
}

export default PublicLayout