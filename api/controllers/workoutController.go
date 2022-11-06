package controllers

import (
	"github.com/MiroslavZaprazny/workout-tracker/api/headers"
	"github.com/MiroslavZaprazny/workout-tracker/api/initializers"
	"github.com/MiroslavZaprazny/workout-tracker/api/models"
	"github.com/gin-gonic/gin"
)

func WorkoutIndex(c *gin.Context) {
	headers.SetReponseHeaders(c)
	id := c.Param("id")

	var workouts []models.Workout

	initializers.DB.Where("user_id = ?", id).Find(&workouts)
	c.JSON(200, gin.H{
		"workouts": workouts,
	})
}