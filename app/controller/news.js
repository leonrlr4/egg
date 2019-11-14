'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    this.ctx.body = '新聞頁面'
  }
  //獲取get傳值
  async content() {
      this.ctx.body = '新聞詳情'
      let qs = this.ctx.query;
      console.log(qs)
  }
  //獲取動態路由的值
  async newsList() {
      this.ctx.body = '新聞列表'
      let par = this.ctx.params;
      console.log(par)
      
  }
}

module.exports = NewsController;
