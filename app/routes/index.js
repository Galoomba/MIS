const logsRouter = require('./logs-router');
module.exports = (app, express) => {
  app.use('/api/users', container.userRoutes(new express.Router()));
  app.use('/api/roles', container.roleRoutes(new express.Router()));
  app.use('/api/permissions', container.permissionRoutes(new express.Router()));
  app.use('/api/churches', container.churchRoutes(new express.Router()));
  app.use('/api/cities', container.cityRoutes(new express.Router()));
  app.use('/api/districts', container.districtRoutes(new express.Router()));
  app.use('/api/familyRole', container.familyRoleRoutes(new express.Router()));
  app.use('/api/socialStatus', container.socialStatusRoutes(new express.Router()));
  app.use('/api/education', container.educationRoutes(new express.Router()));
  app.use('/api/fathers', container.fatherRoutes(new express.Router()));
  app.use('/api/services', container.serviceRoutes(new express.Router()));
  app.use('/api/family', container.familyRoutes(new express.Router()));
  app.use('/api/booking', container.bookingRoutes(new express.Router()));

  /**
   * Register logs route
   */
  if (process.env.NODE_ENV != 'production') {
    app.use('/logs', logsRouter(new express.Router()));
  }
};
