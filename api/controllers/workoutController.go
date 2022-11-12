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

	initializers.DB.Where("user_id = ?", id).Order("created_at desc").Find(&workouts)
	filters := generateFilters(id)

	c.JSON(200, gin.H{
		"workouts": workouts,
		"filters":  filters,
	})
}

func WorkoutFilter(c *gin.Context) {
	headers.SetReponseHeaders(c)
	id := c.Param("id")
	filter := c.Param("name")

	var workouts []models.Workout

	initializers.DB.Where("user_id = ? AND name = ?", id, filter).Find(&workouts)

	c.JSON(200, gin.H{
		"workouts": workouts,
	})
}
