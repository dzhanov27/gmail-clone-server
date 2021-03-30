import express from 'express';
const router = express.Router();

import { MailsController } from '../controllers/miails.controller';

router.route('/').get(MailsController.index).post(MailsController.newMail);

router
  .route('/:mailId')
  .get(MailsController.getMail)
  .put(MailsController.replaceEmail);

export default router;
