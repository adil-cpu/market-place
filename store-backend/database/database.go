package database

import (
	"log"
	"store-backend/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	dsn := "host=localhost user=postgres password=hardpassword dbname=storedb port=5432 sslmode=disable"
	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Ошибка подключения к базе данных:", err)
	}

	DB = database

	DB.AutoMigrate(&models.User{})
	DB.AutoMigrate(&models.Product{})
	DB.AutoMigrate(&models.Order{})

}
