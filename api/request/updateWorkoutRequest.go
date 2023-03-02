package request

import (
	"github.com/MiroslavZaprazny/workout-tracker/api/initializers"
	"github.com/MiroslavZaprazny/workout-tracker/api/models"
	"github.com/gin-gonic/gin"
)

type updateWorkoutRequest struct {
	WorkoutID  uint `json:"workout_id,omitempty"`
	UserId     uint `json:"user_id,omitempty"`
	SetID      uint `json:"set_id"`
	ExerciseID uint `json:"exercise_id"`
	RepID      uint `json:"rep_id"`
	Weight     uint `json:"weight"`
	Value      uint `json:"value"`
}

func (rb updateWorkoutRequest) validate() {
	//some validation
}

func HandleUpdateWorkoutRequest(c *gin.Context) {
	var request updateWorkoutRequest

	err := c.BindJSON(&request)

	if err != nil {
		panic(err)
	}

	//TODO: this is ugly af, def candidate for refactor
	if request.SetID != 0 && request.Weight != 0 {
		//update weith
		var set models.Set
		initializers.DB.First(&set, request.SetID)
		initializers.DB.Model(&set).Update("weight", request.Weight)
	} else if request.SetID != 0 && request.Weight == 0 {
		//update set
		var set models.Set
		initializers.DB.First(&set, request.SetID)
		initializers.DB.Model(set).Update("value", request.Value)
	} else {
		//update rep
		var rep models.Rep
		initializers.DB.First(&rep, request.RepID)
		initializers.DB.Model(&rep).Update("value", request.Value)
	}
}
