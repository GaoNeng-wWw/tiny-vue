import { test, expect } from '@playwright/test'

test('rgb时应该为rgb(xx,xx,xx)', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#format')
  // 这个示例默认是rgb, 不需要手动修改
  // FIXME
  await expect(page.locator('#format')).toContainText('颜色值: rgb(102,204,255)')
})

test('hex时应该为#xxx', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#format')
  await page.getByRole('textbox', { name: '请选择' }).click()
  await page.getByText('Hex', { exact: true }).click()
  await expect(page.locator('#format')).toContainText('颜色值: #66CCFF')
})

test('hsl时应该为hsl(xxx,xxx,xxx)', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#format')
  await page.getByRole('textbox', { name: '请选择' }).click()
  await page.getByRole('list').getByText('hsl').click()
  await expect(page.locator('#format')).toContainText('颜色值: hsl(199.99999999999997, 100%, 70%)')
})

test('hsv时候应该为hsv(xx,xx,xx)', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#format')
  await page.getByRole('textbox', { name: '请选择' }).click()
  await page.getByRole('list').getByText('hsv').click()
  await expect(page.locator('#format')).toContainText('颜色值: hsv(199.99999999999997, 60%, 100%)')
})
