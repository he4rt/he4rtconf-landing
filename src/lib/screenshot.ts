import puppeteer from 'puppeteer-core'

const browserInstance = puppeteer.launch({
  args: [],
  dumpio: true,
  executablePath:
    process.platform === 'win32'
      ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
      : process.platform === 'linux'
      ? '/usr/bin/google-chrome'
      : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: false
})

export default async function screenshot(url: string) {
  const browser = await browserInstance
  const page = await browser.newPage()
  await page.setViewport({ width: 2000, height: 1000 })
  await page.goto(url)
  const screenshotTicket = await page.screenshot({ type: 'png' })
  await page.close()
  return screenshotTicket
}
