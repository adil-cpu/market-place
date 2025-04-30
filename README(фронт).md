# MarketPlace Frontend

Frontend-часть проекта "Маркетплейс", написана на Go с использованием фреймворка Gin и базы данных PostgreSQL.

---


## Стек технологий
- **Golang** (Gin Gonic)
- **PostgreSQL**
- **GORM** (ORM для работы с базой данных)
- **JWT** (JSON Web Tokens для аутентификации)

---

## Структура проекта

```text
store-frontend/
├── src/
│   ├── components/           # Компоненты UI
│   │   ├── AuthForm.js       # Формы регистрации/авторизации
│   │   ├── ProductCard.js    # Карточка товара
│   │   ├── Cart.js           # Корзина
│   │   ├── OrderForm.js      # Форма заказа
│   │   └── AdminPanel.js     # Компоненты админ-панели
│   ├── pages/                # Страницы приложения
│   │   ├── Home.js           # Главная (каталог)
│   │   ├── ProductPage.js    # Страница товара
│   │   ├── CartPage.js       # Страница корзины
│   │   ├── OrdersPage.js     # История заказов
│   │   ├── ProfilePage.js    # Профиль пользователя
│   │   └── AdminPage.js      # Админ-панель
│   ├── context/              # Context API для состояния
│   │   └── AppContext.js     # Глобальное состояние (корзина, пользователь)
│   ├── api/                  # Запросы к бэкенду
│   │   └── api.js            # Функции для работы с API
│   ├── App.js                # Главный компонент
│   ├── index.js              # Точка входа
│   └── styles/               # CSS или стили MUI
├── public/                   # Статические файлы
├── package.json
└── README.md
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
