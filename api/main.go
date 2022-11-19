package main

import (
	"github.com/MiroslavZaprazny/workout-tracker/api/controllers"
	"github.com/MiroslavZaprazny/workout-tracker/api/initializers"
	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariable()
	initializers.ConnectToDB()
}

func main() {
	r := gin.Default()
	r.GET("workouts/user/:id", controllers.WorkoutIndex)
	r.GET("workouts/user/:id/filter/:name", controllers.WorkoutFilter)
	r.GET("workout/:workoutId/user/:userId", controllers.WorkoutShow)
	r.POST("workout/:workoutId/user/:userId", controllers.WorkoutUpdate)

	r.Run()
}
