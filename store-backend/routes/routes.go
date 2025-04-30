package routes

import (
	"store-backend/controllers"
	"store-backend/middleware"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	auth := r.Group("/auth")
	{
		auth.POST("/register", controllers.Register) // http://localhost:8080/auth/register
		auth.POST("/login", controllers.Login)
	}

	products := r.Group("/products")
	{
		products.GET("/", middleware.AuthMiddleware(), controllers.GetProducts)
		products.GET("/:id", middleware.AuthMiddleware(), controllers.GetProductByID)
		products.POST("/", middleware.AuthMiddleware(), controllers.CreateProduct)
		products.DELETE("/:id", middleware.AuthMiddleware(), controllers.DeleteProduct)
	}

	orders := r.Group("/orders")
	{
		orders.POST("/", middleware.AuthMiddleware(), controllers.CreateOrder)
		orders.GET("/", middleware.AuthMiddleware(), controllers.GetOrders)
		orders.DELETE("/:id", middleware.AuthMiddleware(), controllers.DeleteOrder)
	}

}
