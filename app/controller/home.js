'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let list = await this.service.news.getNewsList();
    let name = this.ctx.query.name;
    let id = this.ctx.id;
    await this.ctx.render('../view/index.ejs', {
      list: list,
      name: name,
      id: id
    })
    // let name = this.ctx.query.name;
    // let id = this.ctx.params.id;
    // let list = [1, 2, 3, 4];
    
    // console.log(name, id)

    // await this.ctx.render('index.ejs', {
    //   name,
    //   id,
    //   list
    // });
  }
  async server_test(){
    let obj = await this.service.news.jj()
    console.log(obj)
    this.ctx.body = obj
  }
}

module.exports = HomeController;

