const app = require('./src/server');
const logger = require('./src/services/logger.service');

const port = parseInt(process.env.PORT, 10) || 3000;

app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
