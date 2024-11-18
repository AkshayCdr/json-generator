import { test, expect } from "@playwright/test";

const validFormSchema = {
    formTitle: "Test Form",
    formDescription: "Test descr.",
    fields: [
        {
            id: "name",
            type: "text",
            label: "Name",
            required: true,
            placeholder: "name ....",
        },
        {
            id: "email",
            type: "email",
            label: "Email",
            required: true,
            validation: {
                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                message: "enter validnemail...",
            },
        },
    ],
};

test.describe("JSON Input Validation", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:5173");
    });

    test("accepts valid JSON input", async ({ page }) => {
        const jsonInput = page.locator('textarea[name="json-input"]');

        await jsonInput.fill(JSON.stringify(validFormSchema, null, 2));

        const errorLabel = page.locator("#json-error");
        await expect(errorLabel).not.toBeVisible();

        const formTitle = page.locator("#form-title");
        await expect(formTitle).toBeVisible();
    });

    test("reject invalid JSON syntax", async ({ page }) => {
        const jsonInput = page.locator('textarea[name="json-input"]');

        const invalidJson = `{
      "formTitle": "Test Form",
      "formDescription": "A test form",
      "fields": []
    `;

        await jsonInput.fill(invalidJson);

        const errorLabel = page.locator("#json-error");
        await expect(errorLabel).toBeVisible();
        await expect(errorLabel).toContainText("Invalid JSON");
    });
});
