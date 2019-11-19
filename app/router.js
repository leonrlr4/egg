'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/xd', controller.home.server_test);
  router.get('/', controller.home.index);
  router.get('/:id', controller.home.index);
  router.get('/news', controller.news.index);
  router.get('/news-content', controller.news.content);
  //動態路由
  router.get('/news-list/:id', controller.news.newsList);
  router.get('/admin', controller.admin.index);
  
};
