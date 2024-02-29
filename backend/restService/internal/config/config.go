package config

import (
	"fmt"
	"github.com/joho/godotenv"
	"os"
)

type Config struct {
	TopPort  string `env:"FRONT_PORT"` //front
	DownPort string `env:"REST_PORT"`
}

func NewConfig() Config {
	err := godotenv.Load("./.env")
	if err != nil {
		fmt.Println("Error loading .env file" + err.Error())
	}

	return Config{
		TopPort:  os.Getenv("FRONT_PORT"),
		DownPort: os.Getenv("REST_PORT"),
	}
}
