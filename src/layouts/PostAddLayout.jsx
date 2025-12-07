import { Outlet } from 'react-router'
import PostAddNavbar from '../components/navigation/postAddNavbar'
import { Container } from '@mantine/core'

const PostAddLayout = () => {
    return (
        <>
            <PostAddNavbar />
            <Container size="xl">
                <Outlet />
            </Container>
        </>
    )
}

export default PostAddLayout