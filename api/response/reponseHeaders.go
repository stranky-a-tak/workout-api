package response

import "github.com/gin-gonic/gin"

func SetReponseHeaders(c *gin.Context) {
  header := c.Writer.Header();
  header.Add("Access-Control-Allow-Origin", "*")
  header.Add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
  header.Add("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
}
