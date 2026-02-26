package handlers

import (
	"fmt"
	"log"
	"net/http"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/linzhenyu/personal-portfolio/backend/models"
)

var (
	profileData = models.Profile{
		Name:   "Your Name",
		Title:  "Full Stack Developer",
		Bio:    "Passionate developer building amazing things with modern technologies.",
		Avatar: "/avatar.jpg",
		Socials: map[string]string{
			"github":  "https://github.com/yourusername",
			"linkedin": "https://linkedin.com/in/yourusername",
			"twitter": "https://twitter.com/yourusername",
		},
	}

	projectsData = []models.Project{
		{
			ID:          1,
			Title:       "Project One",
			Description: "An amazing project built with modern technologies",
			Image:       "/project1.jpg",
			Tags:        []string{"React", "TypeScript", "Go"},
			Link:        "https://github.com/yourusername/project1",
		},
		{
			ID:          2,
			Title:       "Project Two",
			Description: "Another awesome project showcasing technical skills",
			Image:       "/project2.jpg",
			Tags:        []string{"Next.js", "PostgreSQL", "Docker"},
			Link:        "https://github.com/yourusername/project2",
		},
		{
			ID:          3,
			Title:       "Project Three",
			Description: "A creative solution to complex problems",
			Image:       "/project3.jpg",
			Tags:        []string{"Vue.js", "Python", "AWS"},
			Link:        "https://github.com/yourusername/project3",
		},
	}

	skillsData = models.Skills{
		Frontend: []string{"React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"},
		Backend:  []string{"Go", "Node.js", "Python", "PostgreSQL", "Redis"},
		DevOps:   []string{"Docker", "Kubernetes", "CI/CD", "AWS", "GCP"},
		Tools:    []string{"Git", "VS Code", "Linux", "Figma"},
	}

	contactInfoData = models.ContactInfo{
		Email:    "your.email@example.com",
		Phone:    "+86 123 4567 8900",
		Location: "China",
	}

	// In-memory storage for contact form submissions
	contactSubmissions = make([]models.ContactSubmission, 0)
	submissionMutex     sync.RWMutex
)

// HealthCheck returns the health status of the server
func HealthCheck(c *gin.Context) {
	c.JSON(http.StatusOK, models.HealthResponse{
		Status:  "ok",
		Version: "1.0.0",
	})
}

// GetProfile returns the user profile information
func GetProfile(c *gin.Context) {
	c.JSON(http.StatusOK, profileData)
}

// GetProjects returns the list of projects
func GetProjects(c *gin.Context) {
	c.JSON(http.StatusOK, projectsData)
}

// GetSkills returns the list of skills
func GetSkills(c *gin.Context) {
	c.JSON(http.StatusOK, skillsData)
}

// GetContactInfo returns contact information
func GetContactInfo(c *gin.Context) {
	c.JSON(http.StatusOK, contactInfoData)
}

// GetContactSubmissions returns all contact form submissions (admin endpoint)
func GetContactSubmissions(c *gin.Context) {
	submissionMutex.RLock()
	defer submissionMutex.RUnlock()

	c.JSON(http.StatusOK, gin.H{
		"count": len(contactSubmissions),
		"data":  contactSubmissions,
	})
}

// SubmitContact handles contact form submissions
func SubmitContact(c *gin.Context) {
	var req models.ContactRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid request format. Please check your input.",
			"details": err.Error(),
		})
		return
	}

	// Validate email format more thoroughly
	if !isValidEmail(req.Email) {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid email format",
		})
		return
	}

	// Create submission record
	submission := models.ContactSubmission{
		ID:        generateSubmissionID(),
		Name:      req.Name,
		Email:     req.Email,
		Message:   req.Message,
		CreatedAt: time.Now(),
	}

	// Store in memory
	submissionMutex.Lock()
	contactSubmissions = append(contactSubmissions, submission)
	submissionMutex.Unlock()

	// Log the submission
	log.Printf("New contact form submission [ID: %s]: %s <%s>\n%s\n",
		submission.ID, submission.Name, submission.Email, submission.Message)

	// In a real application, you would:
	// 1. Store in a database
	// 2. Send an email notification
	// 3. Send a confirmation email to the submitter

	c.JSON(http.StatusOK, gin.H{
		"message": "Thank you for your message! I'll get back to you soon.",
		"id":      submission.ID,
	})
}

// isValidEmail performs basic email validation
func isValidEmail(email string) bool {
	// Basic email validation
	// In production, use a more robust validation library
	if len(email) < 3 || len(email) > 254 {
		return false
	}

	// Check for @ symbol
	atIndex := -1
	for i, char := range email {
		if char == '@' {
			atIndex = i
			break
		}
	}

	if atIndex == -1 || atIndex == 0 || atIndex == len(email)-1 {
		return false
	}

	// Check for domain part
	domainPart := email[atIndex+1:]
	if len(domainPart) < 3 {
		return false
	}

	// Check for dot in domain
	hasDot := false
	for _, char := range domainPart {
		if char == '.' {
			hasDot = true
			break
		}
	}

	return hasDot
}

// generateSubmissionID generates a unique ID for submissions
func generateSubmissionID() string {
	return fmt.Sprintf("sub-%d-%d", time.Now().Unix(), len(contactSubmissions)+1)
}
