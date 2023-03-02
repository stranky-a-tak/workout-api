package controllers

import (
      "github.com/stranky-a-tak/workout-tracker/api/response"
      "github.com/gin-gonic/gin"
)

func HandleOptionsRequest(c *gin.Context) {
  response.SetReponseHeaders(c);
	c.Writer.WriteHeader(200)
	return
}
