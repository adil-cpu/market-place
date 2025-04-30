package controllers

import (
	"net/http"
	"store-backend/database"
	"store-backend/models"

	"github.com/gin-gonic/gin"
)

// GET /products
func GetProducts(c *gin.Context) {
	var products []models.Product
	database.DB.Find(&products)
	c.JSON(http.StatusOK, products)
}

// GET /products/:id
func GetProductByID(c *gin.Context) {
	id := c.Param("id")
	var product models.Product
	if err := database.DB.First(&product, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Товар не найден"})
		return
	}
	c.JSON(http.StatusOK, product)
}

// POST /products
func CreateProduct(c *gin.Context) {
	var input models.Product
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	database.DB.Create(&input)
	c.JSON(http.StatusCreated, input)
}

func DeleteProduct(c *gin.Context) {
	id := c.Param("id")

	var product models.Product
	if err := database.DB.First(&product, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Товар не найден"})
		return
	}

	database.DB.Delete(&product)

	c.JSON(http.StatusOK, gin.H{"message": "Товар успешно удалён"})
}
