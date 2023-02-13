import routes from '../src/routes.js'

export default (app) => {
  app.use('/', routes);

  app.use('*', (req, res) => {
    res.send('Resource not found!');
  });
};