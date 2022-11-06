package models

import "gorm.io/gorm"

type Wokrout struct {
	UserId uint
	Name   string
	gorm.Model
}
