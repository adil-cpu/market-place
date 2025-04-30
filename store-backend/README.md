# MarketPlace Backend

Backend-часть проекта "Маркетплейс", написана на Go с использованием фреймворка Gin и базы данных PostgreSQL.

---


## Стек технологий
- **Golang** (Gin Gonic)
- **PostgreSQL**
- **GORM** (ORM для работы с базой данных)
- **JWT** (JSON Web Tokens для аутентификации)

---

## Структура проекта

```text
store-backend/
├── controllers/                  # Обработчики HTTP-запросов
│    ├── authController.go        # Регистрация и логин пользователей
│    ├── productController.go     # Управление товарами
│    └── orderController.go       # Управление заказами
│
├── database/                     # Подключение к базе данных PostgreSQL
│    └── database.go
│
├── middleware/                   # Миддлвары для проверки токенов
│    └── authMiddleware.go
│
├── models/                       # Структуры для работы с базой данных
│    ├── user.go                  # Модель пользователя
│    ├── product.go               # Модель товара
│    └── order.go                 # Модель заказа
│
├── routes/                       # Маршрутизация всех эндпоинтов
│    └── routes.go
│
├── utils/                        # Работа с токенами JWT
│    └── token.go
│
├── go.mod                        # Модуль Go
├── main.go                       # Точка входа в приложение
└── README.md                     # Документация проекта
```

---

## Шаги для локального запуска проекта 

1. Клонировать проект с GitHub
```bash
git clone https://github.com/adil-cpu/marketplace-backend.git
cd marketplace-backend
```

2. Настроить базу данных PostgreSQL (зайти, создать базу данных `storedb`, поставить пароль для пользователя postgres)
* Зайти
```bash
sudo -u postgres psql
```
* Создать базу данных `storedb`
```sql
CREATE DATABASE storedb;
```
* Поставить пароль для пользователя postgres
```sql
ALTER USER postgres PASSWORD 'твой_пароль';
```
* Выйти
```sql
\q
```
3. Установить зависимости проекта и библиотеки(находясь в директории `marketplace-backend`)
```bash
go mod tidy

go get github.com/gin-gonic/gin
go get github.com/golang-jwt/jwt/v4
go get gorm.io/driver/postgres
go get gorm.io/gorm
```

4. Настроить подключение к базе в проекте

* Открыть файл `database/database.go`
* В строке указанной ниже вместо `твой_пароль` поставить свой
```Go
dsn := "host=localhost user=postgres password=твой_пароль dbname=storedb port=5432 sslmode=disable"
```

5. Запустить сервер
```bash
go run main.go
```
Сервер будет работать на:
http://localhost:8080
