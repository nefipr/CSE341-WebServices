const emaRoute = (req, res) => {
    res.send('Ema Esteves');
};

const PameRoute = (req, res) => {
    res.send('Pame Perez');
};

const GaliRoute = (req, res) => {
    res.send('Gali Perez');
};

const nefiRoute = (req, res) => {
    res.send('Nefi Perez');
};

module.exports = {
    emaRoute,
    PameRoute,
    GaliRoute,
    nefiRoute
};