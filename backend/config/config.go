package config

import (
	"os"
)

type Config struct {
	Port        string
	Environment string
	AllowOrigins string
}

func Load() *Config {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	env := os.Getenv("ENV")
	if env == "" {
		env = "development"
	}

	allowOrigins := os.Getenv("ALLOW_ORIGINS")
	if allowOrigins == "" {
		allowOrigins = "*"
	}

	return &Config{
		Port:        port,
		Environment: env,
		AllowOrigins: allowOrigins,
	}
}
