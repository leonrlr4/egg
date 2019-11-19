'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    let list = [1, 2, 3, 4];
    return list
  }
  async jj() {
    let obj = {
      name: 'roger',
      age: 22,
    }
    return obj
  }
}

module.exports = NewsService;
