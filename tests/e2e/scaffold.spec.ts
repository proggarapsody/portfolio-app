import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("HTML reference pages, index, history and motion controls", async ({
  page,
}) => {
  const response = await page.goto("/?page=akira&motion=off");
  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("NEO TOKYO");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  );
  await expect(page.locator(".poster-backdrop")).toHaveAttribute(
    "aria-hidden",
    "true",
  );
  await expect(page.locator(".poster-backdrop [id]")).toHaveCount(0);
  await page.getByRole("button", { name: "Index +" }).click();
  await expect(
    page.getByRole("navigation", { name: "Page index" }).getByRole("link"),
  ).toHaveCount(6);
  await expect(
    page.getByRole("dialog", { name: "Six printed moments." }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(page.getByRole("button", { name: "Index +" })).toBeFocused();
  await page.getByRole("button", { name: "Index +" }).click();
  await page.getByRole("button", { name: "Close ×" }).click();
  for (const id of [
    "akira",
    "canon-tele",
    "seiko",
    "roland",
    "sony",
    "canon-demi",
  ]) {
    await expect(page.locator(`section#${id}`)).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page
        .locator("main > .page-surface .composition img")
        .evaluateAll((images) =>
          images.every((img) =>
            (img as HTMLImageElement)
              .getAttribute("src")
              ?.startsWith("/graphics/"),
          ),
        ),
    ).toBe(true);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    if (id !== "canon-demi")
      await page.getByRole("link", { name: "Next page", exact: true }).click();
  }
  await page.goBack();
  await expect(page.locator("section#sony")).toBeVisible();
  await page.getByRole("button", { name: "Motion off" }).click();
  await expect(page).toHaveURL(/motion=on/);
  await expect(page.getByRole("button", { name: "Motion on" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.getByRole("link", { name: "Next page", exact: true }).click();
  await expect(page.locator("section#canon-demi")).toBeVisible();
});
