'use strict';

// Production specific configuration
// =================================

// cloud foundry
var getCfMongo = function() {
  var vcap_services = JSON.parse(process.env.VCAP_SERVICES),
  mongoUri;
  if (vcap_services.mongolab && vcap_services.mongolab.length > 0) {
    mongoUri = vcap_services.mongolab[0].credentials.uri;
  }
  return mongoUri;
};

module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            process.env.VCAP_APP_PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL +
            process.env.OPENSHIFT_APP_NAME ||
            getCfMongo() ||
            'mongodb://localhost/<%= _.slugify(appname) %>'
  }
};