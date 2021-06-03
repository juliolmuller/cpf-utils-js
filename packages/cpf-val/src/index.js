/* eslint-env node */
const cpfVal = require('./cpf-val').default;

module.exports = cpfVal;

// Allow use of default import with ES module syntax
module.exports.default = cpfVal;
