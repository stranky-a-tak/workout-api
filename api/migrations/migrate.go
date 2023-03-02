package main

import (
	"github.com/stranky-a-tak/workout-tracker/api/initializers"
	"github.com/stranky-a-tak/workout-tracker/api/models"
)

func init() {
	initializers.LoadEnvVariable()
	initializers.ConnectToDB()
}

func main() {
	initializers.DB.AutoMigrate(
		&models.Workout{},
		&models.Exercise{},
		&models.Rep{},
		&models.Set{},
	)
}
