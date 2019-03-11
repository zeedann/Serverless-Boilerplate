'use strict';
const hello = require('./fn/hello')
const doSomething = require('./fn/doSomething')

module.exports.hello = (event, context, callback) => {
  hello(event, context, callback)
};

module.exports.doSomething = (event, context, callback) => {
  doSomething(event, context, callback)
}
