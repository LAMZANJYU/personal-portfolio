package models

import "time"

type Profile struct {
	Name    string            `json:"name"`
	Title   string            `json:"title"`
	Bio     string            `json:"bio"`
	Avatar  string            `json:"avatar"`
	Socials map[string]string `json:"socials"`
}

type Project struct {
	ID          int      `json:"id"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Image       string   `json:"image"`
	Tags        []string `json:"tags"`
	Link        string   `json:"link"`
}

type Skills struct {
	Frontend []string `json:"frontend"`
	Backend  []string `json:"backend"`
	DevOps   []string `json:"devops"`
	Tools    []string `json:"tools"`
}

type ContactInfo struct {
	Email    string `json:"email"`
	Phone    string `json:"phone"`
	Location string `json:"location"`
}

type ContactRequest struct {
	Name    string `json:"name" binding:"required"`
	Email   string `json:"email" binding:"required,email"`
	Message string `json:"message" binding:"required"`
}

type HealthResponse struct {
	Status  string `json:"status"`
	Version string `json:"version"`
}

type ContactSubmission struct {
	ID        string    `json:"id"`
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	Message   string    `json:"message"`
	CreatedAt time.Time `json:"created_at"`
}
