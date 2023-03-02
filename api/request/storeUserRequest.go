package request

import (
    "net/mail"

    "github.com/gin-gonic/gin"
)

type storeUserRequest struct {
    Username     string `json:"username"`
    Email    string `json:"email"`
    Password string `json:"password"`
}

func (r storeUserRequest) validate() map[string]string {
    messages := make(map[string]string); 

    if r.Username == "" {
	messages["name"] = "Name cannot be empty"
    } else if len(r.Username) < 3 {
	messages["name"] = "Name has to be longer than 3 characters"
    } else if _, err := mail.ParseAddress(r.Email); err != nil {
	messages["email"] = "Email has to be valid"
    } else if r.Password == "" {
	messages["password"] = "Password cannot be empty"
    } else if len(r.Password) > 6 {
	messages["password"] = "Password cannot be shorter than 6 characters"
    }
    return messages 
}

func StoreUserRequest(c *gin.Context) map[string]string {
    var r storeUserRequest
    err := c.BindJSON(&r)

    if err != nil {
	panic(err)
    }

    return r.validate()
}
