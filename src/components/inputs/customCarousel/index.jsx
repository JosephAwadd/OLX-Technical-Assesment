import { Carousel } from '@mantine/carousel'
import React from 'react'

const CustomCarousel = ({ data, renderItem, height }) => {
    return (
        <Carousel
            withIndicators={false}
            height={height}
            slideSize={{ base: '100%', sm: '50%', md: '25%' }}
            slideGap={{ base: 0, sm: 'md' }}
            emblaOptions={{
                loop: false,
                align: 'start'
            }}
        >
            {
                data?.map((item, index) => (
                    <Carousel.Slide key={index}>
                        {renderItem(item)}
                    </Carousel.Slide>
                ))
            }
        </Carousel>
    )
}

export default CustomCarousel