package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/linzhenyu/personal-portfolio/backend/config"
	"github.com/linzhenyu/personal-portfolio/backend/handlers"
)

func main() {
	cfg := config.Load()

	if cfg.Environment == "production" {
		gin.SetMode(gin.ReleaseMode)
	}

	r := gin.Default()

	// CORS middleware
	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", cfg.AllowOrigins)
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	// API routes
	v1 := r.Group("/api/v1")
	{
		v1.GET("/health", handlers.HealthCheck)
		v1.GET("/profile", handlers.GetProfile)
		v1.GET("/projects", handlers.GetProjects)
		v1.GET("/skills", handlers.GetSkills)
		v1.GET("/contact", handlers.GetContactInfo)
		v1.POST("/contact", handlers.SubmitContact)
		v1.GET("/contact/submissions", handlers.GetContactSubmissions)
	}

	log.Printf("Server starting on port %s (environment: %s)", cfg.Port, cfg.Environment)
	if err := r.Run(":" + cfg.Port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
