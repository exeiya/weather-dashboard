const puppeteer = require('puppeteer')

describe.only('App', () => {
  let browser
  let page

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false
    });
    page = await browser.newPage()
    
  })

  test('renders page', async () => {
    await page.goto('http://localhost:3000/')
	  const textContent = await page.$eval('.container', (e) => e.textContent)
    expect(textContent.includes('Sää')).toBe(true)
    expect(textContent.includes('Tallennetut sijainnit')).toBe(true)
    expect(textContent.includes('Hae kaupungin sää kirjoittamalla kaupungin nimi lomakkeeseen'))
    expect(textContent.includes('Yhtään sijaintia ei ole tallennettu'))
  }, 15000)

  test('a city can be searched', async () => {
    const city = 'Helsinki'
    await page.goto('http://localhost:3000/')

    await page.type('input', city)
    await page.click('button[type=submit]')
    await page.waitForSelector('.cityContent')
    const textContent = await page.$eval('.cityContent', (e) => e.textContent)
    expect(textContent.includes(city)).toBe(true)
  }, 15000)

  test('city can be added to favorites', async () => {
    const city = 'Tampere'
    await page.goto('http://localhost:3000/')

    await page.type('input', city)
    await page.click('button[type=submit]')
    await page.waitForSelector('.cityContent')
    await page.click('button.favoriteCity')

    const textContent = await page.$eval('.favoritesContent', (e) => e.textContent)
    expect(textContent.includes(city)).toBe(true)
    expect(textContent.includes('Klikkaamalla kaupungin nimeä näet tämänhetkisen säätilan'))
  }, 15000)

  afterAll(() => {
    browser.close()
  })
})