package request

type Request interface {
    validate()map[string]string
}
