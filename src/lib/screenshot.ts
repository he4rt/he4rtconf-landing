import chrome from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'

export default async function screenshot(url: string) {
  console.log('print')
  const browser = await puppeteer.launch({
    args: [],
    executablePath: '/usr/bin/google-chrome',
    headless: false
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 2000, height: 1000 })
  await page.goto(url)
  return await page.screenshot({ type: 'png' })
}
