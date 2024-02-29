package main

import (
	"backend/restService/internal/config"
	"backend/restService/internal/server"
	"fmt"
)

func main() {

	cfg := config.NewConfig()
	fmt.Println(cfg)

	go server.Run(cfg)

}
