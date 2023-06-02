const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const {
  login,
  createUser,
  celebrateParams,
  logout,
} = require('../controllers/users');
const auth = require('../middlewares/auth');
const NotFoundError = require('../error/NotFoundError');

const {
  name,
  email,
  password,
} = celebrateParams;

const allowedCors = [
  'localhost:3000',
];

router.use(cors({
  origin: allowedCors,
  credentials: true,
}));

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email, password,
  }),
}), login);
router.post('/signup', celebrate({
  body: Joi.object().keys({
    name, email, password,
  }),
}), createUser);
router.post('/signout', auth, logout);
router.use('/users', auth, usersRouter);
router.use('/movies', auth, moviesRouter);
router.all('*', auth, (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
