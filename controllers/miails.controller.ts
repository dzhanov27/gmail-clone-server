import express from 'express';

import Mail from '../models/mail.model';

class MailsCtrl {
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const mails = await Mail.find({});
      res.status(200).json(mails);
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  }

  async newMail(req: any, res: express.Response): Promise<void> {
    try {
      const newMail = new Mail(req.body);
      await newMail.save();
      res.status(201).json('New mail added');
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  }

  async getMail(req: any, res: express.Response): Promise<void> {
    try {
      const { mailId } = req.params;
      const mail = await Mail.findById(mailId);
      res.status(200).json(mail);
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  }

  async replaceEmail(req: any, res: express.Response): Promise<void> {
    try {
      const { mailId } = req.params;
      const newMail = req.body;
      const result = await Mail.findByIdAndUpdate(mailId, newMail);
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  }
}

export const MailsController = new MailsCtrl();
