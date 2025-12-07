import apartments from "./apartments.json";
import cars from "./cars.json";
import mobilePhones from "./mobilePhones.json";

export const fetchApartments = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve(apartments), 1200);
    });

export const fetchCars = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve(cars), 900);
    });

export const fetchMobilePhones = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve(mobilePhones), 600);
    });
