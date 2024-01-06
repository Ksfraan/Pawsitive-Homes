export const animalAgeConverter = (animalAge) => {
    const isAgeIncludesMonths = animalAge?.toString().includes('months');

    const yearOrMonth = isAgeIncludesMonths ? 'month' : 'year';
    const animalAgeNumber = isAgeIncludesMonths
        ? animalAge.replace(' months', '')
        : animalAge;

    return `${animalAgeNumber} ${yearOrMonth}`;
};
