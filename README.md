# Json to Form

live on https://json-generate.netlify.app/

![Imgur](https://i.imgur.com/UuO79y4.png)

![Imgur](https://i.imgur.com/LVyVcoS.png)

### with different input types

[Imgur](https://i.imgur.com/0nBWAuC.png)

---

## How to set up locally

- clone repo
- cd json-generator
- npm install
- npm run dev

---

- [x] added tailwind
- [x] deployed on https://json-generate.netlify.app/
- [x] resizable section
- [x] json editor
- [x] form preview
- [x] form submit modal
- [x] dark mode
- [x] download json
- [x] playwright test

---

## Test json

```json
{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "companySize",
      "type": "select",
      "label": "Company Size",
      "required": true,

      "options": [
        { "value": "1-50", "label": "1-50 employees" },
        { "value": "51-200", "label": "51-200 employees" },
        { "value": "201-1000", "label": "201-1000 employees" },
        { "value": "1000+", "label": "1000+ employees" }
      ]
    },
    {
      "id": "industry",
      "type": "radio",
      "label": "Industry",
      "required": true,

      "options": [
        { "value": "tech", "label": "Technology" },
        { "value": "healthcare", "label": "Healthcare" },
        { "value": "finance", "label": "Finance" },
        { "value": "retail", "label": "Retail" },
        { "value": "other", "label": "Other" }
      ]
    },
    {
      "id": "timeline",
      "type": "select",
      "label": "Project Timeline",
      "required": true,
      "options": [
        { "value": "immediate", "label": "Immediate (within 1 month)" },
        { "value": "short", "label": "Short-term (1-3 months)" },
        { "value": "medium", "label": "Medium-term (3-6 months)" },
        { "value": "long", "label": "Long-term (6+ months)" }
      ]
    },
    {
      "id": "comments",
      "type": "textarea",
      "label": "Additional Comments",
      "required": false,
      "placeholder": "Any other details you'd like to share..."
    }
  ]
}
```

```json
{
  "formTitle": "Customer Feedback Form",
  "formDescription": "We value your feedback! Please take a moment to complete this form.",
  "fields": [
    {
      "id": "customerName",
      "type": "text",
      "label": "Name",
      "required": true,
      "placeholder": "Enter your name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email",
      "required": true,
      "placeholder": "yourname@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "rating",
      "type": "radio",
      "label": "Overall Satisfaction",
      "required": true,
      "options": [
        { "value": "excellent", "label": "Excellent" },
        { "value": "good", "label": "Good" },
        { "value": "average", "label": "Average" },
        { "value": "poor", "label": "Poor" }
      ]
    },
    {
      "id": "servicesUsed",
      "type": "checkbox",
      "label": "Services Used",
      "required": false,
      "options": [
        { "value": "consulting", "label": "Consulting" },
        { "value": "support", "label": "Customer Support" },
        { "value": "development", "label": "Product Development" },
        { "value": "other", "label": "Other" }
      ]
    },
    {
      "id": "improvements",
      "type": "textarea",
      "label": "Suggestions for Improvement",
      "required": false,
      "placeholder": "How can we improve our services?"
    },
    {
      "id": "subscribe",
      "type": "checkbox",
      "label": "Subscribe to Newsletter",
      "required": false,
      "options": [
        { "value": "yes", "label": "Yes, I want to receive updates and offers" }
      ]
    }
  ]
}
```

```json
{
  "formTitle": "Job Application Form",
  "formDescription": "Apply for your desired role by filling out the details below.",
  "fields": [
    {
      "id": "fullName",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "phone",
      "type": "tel",
      "label": "Phone Number",
      "required": true,
      "placeholder": "Enter your phone number",
      "validation": {
        "pattern": "^\\+?[1-9]\\d{1,14}$",
        "message": "Please enter a valid phone number"
      }
    },
    {
      "id": "position",
      "type": "select",
      "label": "Position Applying For",
      "required": true,
      "options": [
        { "value": "developer", "label": "Software Developer" },
        { "value": "designer", "label": "UI/UX Designer" },
        { "value": "manager", "label": "Project Manager" },
        { "value": "other", "label": "Other" }
      ]
    },
    {
      "id": "experience",
      "type": "radio",
      "label": "Years of Experience",
      "required": true,
      "options": [
        { "value": "0-1", "label": "0-1 years" },
        { "value": "2-5", "label": "2-5 years" },
        { "value": "6-10", "label": "6-10 years" },
        { "value": "10+", "label": "10+ years" }
      ]
    },
    {
      "id": "resume",
      "type": "file",
      "label": "Upload Resume",
      "required": true,
      "accept": ".pdf,.doc,.docx",
      "maxFileSize": 5
    },
    {
      "id": "coverLetter",
      "type": "textarea",
      "label": "Cover Letter",
      "required": false,
      "placeholder": "Write your cover letter here..."
    },
    {
      "id": "linkedin",
      "type": "url",
      "label": "LinkedIn Profile",
      "required": false,
      "placeholder": "https://linkedin.com/in/yourprofile",
      "validation": {
        "pattern": "^(https?://)?(www\\.)?linkedin\\.com/.+$",
        "message": "Please enter a valid LinkedIn profile URL"
      }
    }
  ]
}

```


```json

{
  "formTitle": "Event Details Form",
  "formDescription": "Provide the necessary details for your event.",
  "fields": [
    {
      "id": "eventName",
      "type": "text",
      "label": "Event Name",
      "required": true,
      "placeholder": "Enter the event name"
    },
    {
      "id": "eventDate",
      "type": "date",
      "label": "Event Date",
      "required": true
    },
    {
      "id": "eventTime",
      "type": "time",
      "label": "Event Time",
      "required": true
    },
    {
      "id": "themeColor",
      "type": "color",
      "label": "Theme Color",
      "required": false,
      "default": "#000000"
    },
    {
      "id": "eventImage",
      "type": "file",
      "label": "Upload Event Image",
      "required": false,
      "accept": ".jpg,.jpeg,.png",
      "maxFileSize": 5
    },
    {
      "id": "expectedAttendees",
      "type": "range",
      "label": "Expected Number of Attendees",
      "required": true,
      "min": 10,
      "max": 500,
      "step": 10,
      "default": 50
    },
    {
      "id": "additionalDetails",
      "type": "textarea",
      "label": "Additional Details",
      "required": false,
      "placeholder": "Provide any additional information about the event..."
    }
  ]
}


```