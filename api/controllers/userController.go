package controllers

import (
	"github.com/MiroslavZaprazny/workout-tracker/api/requests"
	"github.com/MiroslavZaprazny/workout-tracker/api/response"
	"github.com/gin-gonic/gin"
)

func Register(c *gin.Context) {
	response.SetReponseHeaders(c)
	err := requests.StoreUserRequest(c)

	if err == nil {
		test := c.Request.Body

		c.JSON(200, gin.H{
			"body": test,
		})
	}
}
