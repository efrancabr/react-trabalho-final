export const countrieData = (countries) => {
    if (!countries) return '';
    if (countries.length <= 2) {
        countries = countries.join(' and ')
    }
    else if (countries.length > 2) {
        let lastCountrie = ' and ' + countries.slice(-1);
        countries.pop();
        countries = countries.join(', ');
        countries += lastCountrie;
    };
    return countries;
}