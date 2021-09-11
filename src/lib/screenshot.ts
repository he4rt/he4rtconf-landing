import chrome from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'

export default async function screenshot(url: string) {
  console.log('print')
  const browser = await puppeteer.launch({
    args: [],
    executablePath:
      process.platform === 'win32'
        ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
        : process.platform === 'linux'
        ? '/usr/bin/google-chrome'
        : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 2000, height: 1000 })
  await page.goto(url)
  return await page.screenshot({ type: 'png' })
}
