import { test, expect, Page } from "@playwright/test";

const ViewportSizes = {
    mobile: { width: 375, height: 667 },
    desktop: { width: 1280, height: 800 },
};

test.describe("Responsive Layout", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:5173");
    });

    test("switches between desktop and mobile layouts", async ({ page }) => {
        await page.setViewportSize(ViewportSizes.desktop);

        await expect(page.locator("main")).toHaveClass(/flex-row/);

        await page.setViewportSize(ViewportSizes.mobile);

        await expect(page.locator("main")).toHaveClass(/flex-col/);

        await page.setViewportSize(ViewportSizes.desktop);

        await expect(page.locator("main")).toHaveClass(/flex-row/);
    });
});
