import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {
  // TODO 1: откройте главную страницу Testboard через page.goto('/').
  await page.goto('/');
  // TODO 2: найдите кнопку входа и откройте форму. data-marker="login-button-desktop"
  const login_button = page.locator('[data-marker="login-button-desktop"]');
  await login_button.click();
  // TODO 3: отправьте форму с пустыми email и паролем. data-marker="email-input" data-marker="password-input"
  const login_submit = page.locator('[data-marker="login-submit-button"]');
  await login_submit.click();
  // TODO 4: через expect проверьте текст «Email обязателен». data-marker="email-error"
  const email_error = page.locator('[data-marker="email-error"]');
  await expect(email_error).toHaveText('Email обязателен');
  // TODO 5: через expect проверьте текст «Пароль обязателен». data-marker="password-error"
  const password_error = page.locator('[data-marker="password-error"]');
  await expect(password_error).toHaveText('Пароль обязателен');

});
