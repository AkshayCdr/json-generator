import { test, expect } from "@playwright/test";

test.describe("Real-time form generation", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:5173");
    });

    test("updates form in real-time", async ({ page }) => {
        const jsonInput = page.locator('textarea[name="json-input"]');

        const initialForm = {
            formTitle: "Tesitng form",
            formDescription: "Testing real-time updates",
            fields: [
                {
                    id: "name",
                    type: "text",
                    label: "Name",
                    required: true,
                },
            ],
        };

        await jsonInput.fill(JSON.stringify(initialForm, null, 2));

        await expect(page.locator("h1#form-title")).toBeVisible();

        await expect(page.locator('label:has-text("Name")')).toBeVisible();

        const updatedForm = {
            ...initialForm,
            fields: [
                ...initialForm.fields,
                {
                    id: "email",
                    type: "email",
                    label: "Email",
                    required: true,
                },
            ],
        };

        await jsonInput.fill(JSON.stringify(updatedForm, null, 2));

        await expect(page.locator('label:has-text("Name")')).toBeVisible();
        await expect(page.locator('label:has-text("Email")')).toBeVisible();
    });
});
