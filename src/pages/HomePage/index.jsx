import React, { useEffect, useState } from 'react'
import { fetchApartments, fetchCars, fetchMobilePhones } from '../../dummy/fakeApi';
import { Box } from '@mantine/core';
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next';
import CustomCarousel from '../../components/inputs/customCarousel';
import CarouselItem from '../../components/data/carouselItem';
import CustomLoading from '../../components/loading';

const Homepage = () => {
    const { t } = useTranslation()
    const [data, setData] = useState({
        apartments: null,
        cars: null,
        mobiles: null,
    });

    useEffect(() => {
        async function load() {
            const [apts, carsList, mobilesList] = await Promise.all([
                fetchApartments(),
                fetchCars(),
                fetchMobilePhones(),
            ]);

            setData({
                apartments: apts,
                cars: carsList,
                mobiles: mobilesList,
            });
        }

        load();
    }, []);

    return (
        <Box className={styles['homepage-wrapper']}>
            <Box>
                <h2>{t('carsForSale')}</h2>
                {
                    !data?.cars ?
                        <CustomLoading />
                        :
                        <CustomCarousel
                            data={data?.cars}
                            renderItem={(data) => {
                                return (
                                    <CarouselItem data={data} />
                                )
                            }}
                        />
                }
            </Box>
            <Box>
                <h2>{t('apartmentsForSale')}</h2>
                {
                    !data?.apartments ?
                        <CustomLoading />
                        :
                        <CustomCarousel
                            data={data?.apartments}
                            renderItem={(data) => {
                                return (
                                    <CarouselItem data={data} />
                                )
                            }}
                        />
                }
            </Box>
            <Box>
                <h2>{t('mobilePhones')}</h2>
                {
                    !data?.mobiles ?
                        <CustomLoading />
                        :
                        <CustomCarousel
                            data={data?.mobiles}
                            renderItem={(data) => {
                                return (
                                    <CarouselItem data={data} />
                                )
                            }}
                        />
                }
            </Box>
        </Box>
    )
}

export default Homepage