const allowedCors = [
  'http://movies.elegan.nomoredomains.rocks',
  'https://movies.elegan.nomoredomains.rocks',
  'https://localhost:3000',
  'https://localhost:3001',
  'http://localhost:3000',
  'http://localhost:3001',
];

function corsHandler(req, res, next) {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,POST,PUT,PATCH,POST,HEAD,DELETE';
  const reqHeaders = req.headers['access-control-request-headers'];
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', reqHeaders);
    return res.end();
  }
  return next();
}

module.exports = corsHandler;
