const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');

async function runLighthouse() {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  };

  const runnerResult = await lighthouse('http://localhost:3000', options);

  // Save the HTML report
  const reportHtml = runnerResult.report;
  fs.writeFileSync('./lighthouse-report.html', reportHtml);

  // Log scores
  const scores = runnerResult.lhr.categories;
  console.log('Lighthouse Scores:');
  console.log('Performance:', Math.round(scores.performance.score * 100));
  console.log('Accessibility:', Math.round(scores.accessibility.score * 100));
  console.log('Best Practices:', Math.round(scores['best-practices'].score * 100));
  console.log('SEO:', Math.round(scores.seo.score * 100));

  await chrome.kill();
}

if (require.main === module) {
  runLighthouse().catch(console.error);
}

module.exports = runLighthouse;