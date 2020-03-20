module.exports = (arrayAsString) => {
    return arrayAsString.split(",").map(elem => elem.trim());
};