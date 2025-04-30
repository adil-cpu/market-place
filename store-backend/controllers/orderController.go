package controllers

import (
	"net/http"
	"store-backend/database"
	"store-backend/models"

	"github.com/gin-gonic/gin"
)

type CreateOrderInput struct {
	ProductID uint `json:"product_id" binding:"required"`
	Quantity  int  `json:"quantity" binding:"required"`
}

func CreateOrder(c *gin.Context) {
	var input CreateOrderInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	userID, exists := c.Get("userID")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Не авторизован"})
		return
	}

	order := models.Order{
		UserID:    userID.(uint),
		ProductID: input.ProductID,
		Quantity:  input.Quantity,
	}

	database.DB.Create(&order)

	c.JSON(http.StatusCreated, order)
}

func GetOrders(c *gin.Context) {
	userID, exists := c.Get("userID")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Не авторизован"})
		return
	}

	var orders []models.Order
	database.DB.Where("user_id = ?", userID).Find(&orders)

	c.JSON(http.StatusOK, orders)
}

func DeleteOrder(c *gin.Context) {
	id := c.Param("id")

	var order models.Order
	if err := database.DB.First(&order, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Заказ не найден"})
		return
	}

	database.DB.Delete(&order)

	c.JSON(http.StatusOK, gin.H{"message": "Заказ успешно удалён"})
}
