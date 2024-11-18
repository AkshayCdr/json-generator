import { test, expect } from "@playwright/test";

test.describe("Form Validation and Submission", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:5173");

        const testForm = {
            formTitle: "Validation Test Form",
            formDescription: "Testing form validation and submission",
            fields: [
                {
                    id: "name",
                    type: "text",
                    label: "Name",
                    required: true,
                    placeholder: "Enter your name",
                },
                {
                    id: "email",
                    type: "email",
                    label: "Email",
                    required: true,
                    validation: {
                        pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
                        message: "Please enter a valid email address",
                    },
                },
                {
                    id: "subject",
                    type: "select",
                    label: "Subject",
                    required: true,
                    options: [
                        { value: "general", label: "General Inquiry" },
                        { value: "support", label: "Technical Support" },
                        { value: "feedback", label: "Feedback" },
                    ],
                },
                {
                    id: "priority",
                    type: "radio",
                    label: "Priority",
                    required: true,
                    options: [
                        { value: "low", label: "Low" },
                        { value: "medium", label: "Medium" },
                        { value: "high", label: "High" },
                    ],
                },
                {
                    id: "message",
                    type: "textarea",
                    label: "Message",
                    required: true,
                    placeholder: "Enter your message",
                },
            ],
        };

        await page
            .locator('textarea[name="json-input"]')
            .fill(JSON.stringify(testForm, null, 2));
    });
});
