# Json to Form

live on https://json-generate.netlify.app/

![Imgur](https://i.imgur.com/UuO79y4.png)

![Imgur](https://i.imgur.com/LVyVcoS.png)

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