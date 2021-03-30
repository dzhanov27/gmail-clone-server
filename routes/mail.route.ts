import express from 'express';
const router = express.Router();

import { MailsController } from '../controllers/mails.controller';

router.route('/').get(MailsController.index).post(MailsController.newMail);

router
  .route('/:mailId')
  .get(MailsController.getMail)
  .put(MailsController.replaceEmail);

router.route('/category/:category').get(MailsController.getMailsByCategory);

router.route('/starred/starred').get(MailsController.getStarredMails);

export default router;
