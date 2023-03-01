package requests

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

func HandleUpdateWorkoutRequest(c *gin.Context) {
	var rb updateWorkoutRequest

	err := c.BindJSON(&rb)

	if err != nil {
		panic(err)
	}

	if rb.SetID != 0 && rb.Weight != 0 {
		//jedna sa o zmenu vahy
		var set models.Set
		initializers.DB.First(&set, rb.SetID)
		initializers.DB.Model(&set).Update("weight", rb.Weight)
	} else if rb.SetID != 0 && rb.Weight == 0 {
		//je to set a jedna sa o zmenu value setu
		var set models.Set
		initializers.DB.First(&set, rb.SetID)
		initializers.DB.Model(set).Update("value", rb.Value)
	} else {
		//je to rep a jedna sa o zmenu value repu
		var rep models.Rep
		initializers.DB.First(&rep, rb.RepID)
		initializers.DB.Model(&rep).Update("value", rb.Value)
	}
}
