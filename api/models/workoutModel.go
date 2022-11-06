package models

import (
	"time"

	"gorm.io/gorm"
)

type Workout struct {
	ID        uint           `gorm:"primaryKey;type:int(10)" json:"id"`
	CreatedAt time.Time      `gorm:"type:timestamp" json:"created_at"`
	UpdatedAt time.Time      `gorm:"type:timestamp" json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index"`
	UserId    uint           `gorm:"type:int(10)" json:"user_id"`
	Name      string         `gorm:"type:varchar(255)" json:"name"`
}
