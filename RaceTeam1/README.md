Backend.

Для начала инициализируем npm init -y - для устоновки зависимостей package-json.
Затем устанавливаем модуль бд и модулm Sequelize c фреимворком express (npm install express pg pg-hstore sequelize dotenv)
Для бд используем программу pgAdmin4.
Послу инициализации всех зависимостей, мы проводим установку nodemon - он поможет нам работать с серверов, перезапуская его автаматически после всех внесенных изменений.
После всех мониуляций идем к коду...

Сначала импортируем express при припомощи require, а после создаем рабочий сервер и задаем ему порт, с которого он будет запускаться.
--- npm run dev -- команда для запуска сервера.
После создаем бд и заносим туда данные. И при этом создаем саму бд в pgAdmin4.
Затем строим диограмму бд и заносим в код модели от туда. После в наще бд появляются связанные между собой таблицы и готовая бд.
Дальше создаем cors для того, чтобы отправлять запросы с браузера, затем, чтобы наще прилолжения могло парсить json формат, мы создаем функцию use. И оно принимает запрос и ответ Request и Response.

Затем создаем каркас нашего приложения для отработки тех или инных методов. Для этого создаем папку Routes и создаем файлы с нашими моделями из бд. И добавляем туда наши методы: post, get, regestration. Чтобы не перегружать систему и упрастить работу серверу, мы создаем папку Contoller, где будут находиться контоллеры соответствующим роутерам. В контоллерах сохдаем класс для группировки наших функций, по которым будут идти запросы.

Создадим универсальный хендлер для того, чтобы в случае ошибки пользователся, сервер выдавал ошибку. Создаем Erroи в файле создаем Class, в нем идет конструктор, который будет принимать статус код и сообщения, которые будут приходить на клиент. Класс будетрасширять ошибку.

Затем работаем с регистрайцией и роли. Для хэшировки паролей и генерацией токена (bycrypt, JWT).

Frontend.





## npm run dev - запуск сервера

## npm start - запуск клиента
