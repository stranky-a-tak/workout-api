package models

import (
	"time"

	"gorm.io/gorm"
)

type Model struct {
	ID        uint            `gorm:"primaryKey;type:int(10)" json:"id,omitempty"`
	CreatedAt *time.Time      `gorm:"type:timestamp" json:"created_at,omitempty"`
	UpdatedAt *time.Time      `gorm:"type:timestamp" json:"updated_at,omitempty"`
	DeletedAt *gorm.DeletedAt `gorm:"index" json:"deleted_at,omitempty"`
}

type Workout struct {
	Model
	Name      string     `gorm:"type:varchar(255)" json:"name,omitempty"`
	UserID    uint       `gorm:"type:int(10)" json:"user_id,omitempty"`
	Exercises []Exercise `json:"exercises"`
}

type Exercise struct {
	Model
	WorkoutID uint   `gorm:"type:int(10)" json:"workout_id,omitempty"`
	Name      string `gorm:"type:varchar(255)" json:"name,omitempty"`
	Sets      []Set  `json:"sets"`
}

type Rep struct {
	Model
	SetID uint `gorm:"type:int(10)" json:"set_id,omitempty"`
	Value uint `gorm:"type:int(10)" json:"value,omitempty"`
}

type Set struct {
	Model
	ExerciseID uint `gorm:"type:int(10)" json:"excercise_id,omitempty"`
	Value      uint `gorm:"type:int(10)" json:"value,omitempty"`
	Weight     uint `gorm:"type:int(10)" json:"weight,omitempty"`
	Rep        Rep  `json:"rep"`
}
