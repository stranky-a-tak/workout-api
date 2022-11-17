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

func WorkoutShow(c *gin.Context) {
	headers.SetReponseHeaders(c)
	workoutId := c.Param("workoutId")
	userId := c.Param("userId")

	var workout models.Workout

	err := initializers.DB.Model(&models.Workout{}).
		Preload("Exercises").Preload("Exercises.Sets").Preload("Exercises.Sets.Rep").
		Find(&workout, "id = ? AND user_id = ?", workoutId, userId).Error

	if err != nil {
		c.Error(err)
	}

	c.JSON(200, gin.H{
		"workout": workout,
	})
}

func WorkoutFilter(c *gin.Context) {
	headers.SetReponseHeaders(c)
	id := c.Param("id")
	filter := c.Param("name")

	var workouts []models.Workout

	initializers.DB.Where("user_id = ? AND name = ?", id, filter).Find(&workouts).Limit(5)

	c.JSON(200, gin.H{
		"workouts": workouts,
	})
}
