package models

import (
	"gorm.io/gorm"
)

type Order struct {
	gorm.Model
	UserID    uint `json:"user_id"`    // id пользователя, который сделал заказ
	ProductID uint `json:"product_id"` // id товара заказанного товара
	Quantity  int  `json:"quantity"`   // кол-во
}
