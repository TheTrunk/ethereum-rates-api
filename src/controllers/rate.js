const ethereumRates = require('../services/ethereumRates');
const log = require('../lib/log');

exports.list = (req, res, next) => {
  log.debug('Pulling ethereum Rate information from APIs');
  ethereumRates.getAll().then((rates) => {
    res.json(rates);
  }).catch(next);
};
