# Проект: movies-explorer-api (бэкенд)

Адрес репозитория: [https://github.com/AlenaElegecheva/movies-explorer-api.git]

## Оглавление

- [Ссылки на проект](#ссылки-проекта)
- [Задачи проекта](#задачи-проекта)
- [Функциональность проекта](#функциональность-проекта)
- [Директории проекта](#директории-проекта)
- [Запуск проекта](#запуск-проекта)
- [Ход выполнения проекта](#ход-выполнения-проекта)
- [Используемые технологии](#используемые-технологии)

## Ссылки на проект

Дипломный проект выполненный в рамках курса "Веб-разработчик" от Яндекс Практикум.
Проект представляет из себя бэкенд часть для дипломного проекта
Frontend https://movies.elegan.nomoredomains.rocks
Backend https://api.movies.elegan.nomoredomains.rocks


## Задачи проекта

Проект был реализован в рамках дипломной работы в части backend-разработки. Приложение написано с использованием приложения Node.js и Express, а также БД MongoDB и ODM mongoose.

## Функциональность проекта

- В проекте созданы схемы и модели пользователей и карточек с контентом:
  - `movie` — схема карточки с контентом
  - `user` — схема пользователя
- Созданы мидлвары:
  - Авторизации пользователя
  - Централизованной обработки ошибок
  - Ограничитель количества запросов (защита от DDoS атак)
  - Логирования
- Производится валидация поступающих данных:
  - до передачи информации контроллерам с помощью celebrate
  - на уровне схем с помощью validator и встроенных методов mongoose

## Директории проекта

- `/controllers` — директория с файлами контроллеров
- `/errors` — директория с файлами кастомных ошибок
- `/middlewares` — директория с мидлварами
- `/models` — директория с файлами описания схем и моделей
- `/routes` — директория с файлами роутера
- `/utils` — директория со вспомогательными файлами

## Запуск проекта

- `npm lint` — запускает проверку линтером
- `npm run start` — запускает приложение в режиме продакшн
- `npm run dev` — запускает приложение в режиме разработки с hot-reload

## Используемые технологии

- [Node.js](https://nodejs.org/ru)
- [nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [celebrate](https://www.npmjs.com/package/celebrate)
- [validator](https://www.npmjs.com/package/validator)
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- [helmet](https://helmetjs.github.io/)
- [winston](https://www.npmjs.com/package/winston)
- [express-winston](https://www.npmjs.com/package/express-winston)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [ESLint](https://eslint.org/)
