'use strict';

module.exports = {
  db: 'mongodb://test:PAssw0rd5$$@ds059938.mongolab.com:59938/mean-test', //'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || 'localhost') + '/mean-test',
  http: {
    port: 3001
  },
  logging: {
    format: 'common'
  },
  app: {
    name: 'MEAN - A Modern Stack - Test'
  },
  strategies: {
      local: {
        enabled: true
      },
      facebook: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/facebook/callback',
        enabled: false
      },
      twitter: {
        clientID: 'CONSUMER_KEY',
        clientSecret: 'CONSUMER_SECRET',
        callbackURL: 'http://localhost:3000/auth/twitter/callback',
        enabled: false
      },
      github: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/github/callback',
        enabled: false
      },
      google: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/google/callback',
        enabled: false
      },
      linkedin: {
        clientID: 'API_KEY',
        clientSecret: 'SECRET_KEY',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback',
        enabled: false
      }
  },
  emailFrom: 'SENDER EMAIL ADDRESS', // sender address like ABC <abc@example.com>
  mailer: {
    service: 'SERVICE_PROVIDER',
    auth: {
      user: 'EMAIL_ID',
      pass: 'PASSWORD'
    }
  },
  secret: 'SOME_TOKEN_SECRET'
};
