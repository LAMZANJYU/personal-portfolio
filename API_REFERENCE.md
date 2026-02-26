# API Reference

## Base URL
```
http://localhost:8080/api/v1
```

## Endpoints

### Health Check
```
GET /health
```

**Response:**
```json
{
  "status": "ok",
  "version": "1.0.0"
}
```

---

### Get Profile
```
GET /profile
```

**Response:**
```json
{
  "name": "Your Name",
  "title": "Full Stack Developer",
  "bio": "Passionate developer building amazing things with modern technologies.",
  "avatar": "/avatar.jpg",
  "socials": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername"
  }
}
```

---

### Get Projects
```
GET /projects
```

**Response:**
```json
[
  {
    "id": 1,
    "title": "Project One",
    "description": "An amazing project built with modern technologies",
    "image": "/project1.jpg",
    "tags": ["React", "TypeScript", "Go"],
    "link": "https://github.com/yourusername/project1"
  }
]
```

---

### Get Skills
```
GET /skills
```

**Response:**
```json
{
  "frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  "backend": ["Go", "Node.js", "Python", "PostgreSQL", "Redis"],
  "devops": ["Docker", "Kubernetes", "CI/CD", "AWS", "GCP"],
  "tools": ["Git", "VS Code", "Linux", "Figma"]
}
```

---

### Get Contact Info
```
GET /contact
```

**Response:**
```json
{
  "email": "your.email@example.com",
  "phone": "+86 123 4567 8900",
  "location": "China"
}
```

---

### Submit Contact Form
```
POST /contact
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to work with you!"
}
```

**Success Response (200):**
```json
{
  "message": "Thank you for your message! I'll get back to you soon.",
  "id": "sub-1234567890-1"
}
```

**Error Response (400):**
```json
{
  "error": "Invalid request format. Please check your input.",
  "details": "error details"
}
```

---

### Get Contact Submissions (Admin)
```
GET /contact/submissions
```

**Response:**
```json
{
  "count": 1,
  "data": [
    {
      "id": "sub-1234567890-1",
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Hello, I'd like to work with you!",
      "created_at": "2024-02-26T12:34:56Z"
    }
  ]
}
```

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 400 | Bad Request - Invalid input |
| 404 | Not Found |
| 500 | Internal Server Error |

## Rate Limiting

Currently no rate limiting is implemented. Consider adding rate limiting for production use.

## CORS

The API supports CORS with configurable origins via the `ALLOW_ORIGINS` environment variable (default: "*").
