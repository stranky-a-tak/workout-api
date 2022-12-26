package requests

import (
	"net/mail"

	"github.com/gin-gonic/gin"
)

type storeUserRequest struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func StoreUserRequest(c *gin.Context) error {
	var r storeUserRequest
	err := c.BindJSON(&r)

	if err != nil {
		panic(err)
	}

	if r.Name == "" {
		c.JSON(403, gin.H{
			"meessage": "Name cannot be empty",
		})
		return gin.Error{}
	} else if len(r.Name) < 3 {
		c.JSON(403, gin.H{
			"meessage": "Name cannot be shorter than 3 characters",
		})

		return gin.Error{}
	} else if _, err := mail.ParseAddress(r.Email); err != nil {
		c.JSON(403, gin.H{
			"meessage": "Email must be in valid format",
		})
		return gin.Error{}
	} else if r.Password == "" {
		c.JSON(403, gin.H{
			"meessage": "Password cannot be empty",
		})
		return gin.Error{}
	} else if len(r.Password) > 6 {
		c.JSON(403, gin.H{
			"meessage": "Password cannot be shorter than 6 characters",
		})
		return gin.Error{}
	}

	return nil
}
