package router

import (
	"github.com/stranky-a-tak/workout-tracker/api/controllers"
	"github.com/gin-gonic/gin"
)

func InitializeRouter() {
	r := gin.Default()

	registerRoutes(r)
	r.Run()
	//TODO: figure out a way to better group these
}

func registerRoutes(r *gin.Engine) {
	workoutRoutes := r.Group("/workouts")	
	workoutRoutes.GET("/user/:id", controllers.WorkoutIndex)
	workoutRoutes.GET("/user/:id/filter/:name", controllers.WorkoutFilter)
	workoutRoutes.GET("/:workoutId/user/:userId", controllers.WorkoutShow)
	workoutRoutes.POST("/:workoutId/user/:userId", controllers.WorkoutUpdate)

	r.OPTIONS("register", controllers.HandleOptionsRequest)
	r.POST("register", controllers.Register)
}
