'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    this.ctx.body = 'this is admin page'
  }
}

module.exports = AdminController;
