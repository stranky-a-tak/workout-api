package routes

import (
	"github.com/MiroslavZaprazny/workout-tracker/api/controllers"
	"github.com/gin-gonic/gin"
)

func RegisterRoutes() *gin.Engine {
	r := gin.Default()
	//TODO: figure out a way to better group these
	workoutRoutes := r.Group("/workouts")	
	workoutRoutes.GET("/user/:id", controllers.WorkoutIndex)
	workoutRoutes.GET("/user/:id/filter/:name", controllers.WorkoutFilter)
	workoutRoutes.GET("/:workoutId/user/:userId", controllers.WorkoutShow)
	workoutRoutes.POST("/:workoutId/user/:userId", controllers.WorkoutUpdate)

	r.OPTIONS("register", controllers.HandleOptionsRequest)
	r.POST("register", controllers.Register)

	return r
}
