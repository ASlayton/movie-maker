const startApplication = require('./dataGatekeeper');
const connectEventListeners = require('./events');

startApplication();
connectEventListeners();
