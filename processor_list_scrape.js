const request = require('request');
const cheerio = require('cheerio');

const url = 'https://en.wikipedia.org/wiki/List_of_Intel_Core_i3_processors#Willow_Cove_microarchitecture_(11th_generation)';

request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const table = $('table.wikitable');
    const rows = table.find('tr');
    rows.each((index, element) => {
      if (index > 0) {
        const cells = $(element).find('td');
        const modelNumber = cells.eq(0).text().trim();
        const cores = cells.eq(2).text().trim();
        const frequency = cells.eq(3).text().trim();
        const turbo = cells.eq(4).text().trim();
        const gpuModel = cells.eq(7).text().trim();
        const gpuFrequency = cells.eq(8).text().trim();
        const releaseDate = cells.eq(11).text().trim();
        const l2Cache = cells.eq(5).text().trim();
        const l3Cache = cells.eq(6).text().trim();
        console.log(`Model Number: ${modelNumber}`);
        console.log(`Cores: ${cores}`);
        console.log(`Frequency: ${frequency}`);
        console.log(`Turbo: ${turbo}`);
        console.log(`GPU Model: ${gpuModel}`);
        console.log(`GPU Frequency: ${gpuFrequency}`);
        console.log(`Release Date: ${releaseDate}`);
        console.log(`L2 Cache: ${l2Cache}`);
        console.log(`L3 Cache: ${l3Cache}`);
        console.log('\n');
      }
    });
  }
});
