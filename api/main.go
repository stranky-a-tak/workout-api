package main

import (
	"github.com/stranky-a-tak/workout-tracker/api/initializers"
	"github.com/stranky-a-tak/workout-tracker/api/router"
)

func init() {
	initializers.LoadEnvVariable()
	initializers.ConnectToDB()
}

func main() {
	// roter.InitializeRouter();
	router.InitializeRouter()
}
