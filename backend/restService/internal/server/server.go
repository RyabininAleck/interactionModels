package server

import (
	"backend/restService/internal/config"
	"github.com/gin-gonic/gin"
)

type server struct {
	*config.Config
}

func (s server) handleRest(context *gin.Context) {

}

func newServer(cfg config.Config) server {
	return server{&cfg}
}

func Run(config config.Config) {
	router := gin.Default()
	s := newServer(config)

	router.POST("/restService/:string", s.handleRest)
	router.Run(":" + config.TopPort)
}
