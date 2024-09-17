import { test } from '@playwright/test'

test('ProcessDesigner 静态数据', async ({ page }) => {
  // page.on('pageeror', (exception) => expect(exception).toBeNull())
  await page.goto('process-designer#basic-usage')
})
