const nicolasRoute = (req, res) => {
    res.send("Nicolas Velasquez Rodriguez");
};

const luisRoute = (req, res) => {
    res.send("Luis Velasquez ");
};

const margaritaRoute = (req, res) => {
    res.send("Margarita Gutierrez");
};

module.exports = {
    nicolasRoute,
    margaritaRoute,
    luisRoute,
};