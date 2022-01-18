const express = require('express');
const UserControl = require('../controller/UserControl');
const devRouter = express.Router();

devRouter.get('/',UserControl.user);
devRouter.post('/',UserControl.adduser);
devRouter.get('/:userIndex/hasCat',UserControl.hascat);
devRouter.post('/:userIndex/hasCat',UserControl.hascatChange);
devRouter.delete('/:userIndex',UserControl.userdelete);

module.exports = devRouter;