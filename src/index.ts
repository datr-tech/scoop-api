import 'dotenv/config';
import { app } from '@app/api';
import { logger } from '@app/utils/logger';

const port = process.env.PORT || '3000';

app.listen(port, () => {
  logger.info(`listening on port ${port}`);
});
