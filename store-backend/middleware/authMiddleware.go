package middleware

import (
	"net/http"
	"store-backend/utils"
	"strings"

	"github.com/gin-gonic/gin"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		tokenString := c.GetHeader("Authorization")
		if tokenString == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Токен отсутствует"})
			c.Abort()
			return
		}

		// Удаляем префикс "Bearer " из заголовка, если он есть
		if strings.HasPrefix(tokenString, "Bearer ") {
			tokenString = strings.TrimPrefix(tokenString, "Bearer ")
		}

		userID, err := utils.ValidateToken(tokenString)
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Неверный токен"})
			c.Abort()
			return
		}

		c.Set("userID", userID)
		c.Next()
	}
}
