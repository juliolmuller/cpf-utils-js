/* eslint-env node */
const cpfGen = require('./cpf-gen').default;

module.exports = cpfGen;

// Allow use of default import with ES module syntax
module.exports.default = cpfGen;
