package controllers

import (
	"github.com/stranky-a-tak/workout-tracker/api/initializers"
	"github.com/stranky-a-tak/workout-tracker/api/models"
)

func generateFilters(id string) (workouts []models.Workout) {
	initializers.DB.Raw("SELECT distinct name FROM workouts WHERE user_id = ?", id).Find(&workouts)

	return
}
