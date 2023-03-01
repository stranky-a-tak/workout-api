package main

import (
	"github.com/MiroslavZaprazny/workout-tracker/api/initializers"
	"github.com/MiroslavZaprazny/workout-tracker/api/routes"
)

func init() {
	initializers.LoadEnvVariable()
	initializers.ConnectToDB()
}

func main() {
	routes.RegisterRoutes();
}
