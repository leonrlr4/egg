'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let name = this.ctx.query.name;
    let id = this.ctx.params.id;
    let list = [1, 2, 3, 4];
    
    console.log(name, id)

    await this.ctx.render('index.ejs', {
      name,
      id,
      list
    });
  }
}

module.exports = HomeController;

