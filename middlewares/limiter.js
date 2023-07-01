const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
  windowMs: 15 * 60 * 1000, // за 15 минут
  max: 500, // можно совершить максимум 500 запросов с одного IP
});
