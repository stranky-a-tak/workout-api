package models

import (
	"time"

	"gorm.io/gorm"
)

type Workout struct {
	ID        uint            `gorm:"primaryKey;type:int(10)" json:"id,omitempty"`
	CreatedAt *time.Time      `gorm:"type:timestamp default:current_timestamp" json:"created_at,omitempty"`
	UpdatedAt *time.Time      `gorm:"type:timestamp default:current_timestamp" json:"updated_at,omitempty"`
	DeletedAt *gorm.DeletedAt `gorm:"index" json:"deleted_at,omitempty"`
	UserId    uint            `gorm:"type:int(10)" json:"user_id,omitempty"`
	Name      string          `gorm:"type:varchar(255)" json:"name,omitempty"`
}
