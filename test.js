var webdriver = require('selenium-webdriver');
 
//create driver object for chromedriver
var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();
driver.manage().timeouts().implicitlyWait(10);
 
function searchForCrossBrowserTesting() {
    searchbar = driver.findElement(webdriver.By.name('q'))
    .then(function(searchbar) {
        searchbar.sendKeys('CrossBrowserTesting.com');
        searchbar.submit();  
        
    });
}
function clickTreehouse() {
    clickLink = driver.findElement(webdriver.By.linkText("Cross Browser Testing Tool: 1500+ Real Browsers &amp; Devices"))
    .then(function(clickLink) {
        clickLink.click();
    });
}

driver.get('http://google.com')
.then(searchForSmartBear())
.then(clickSmartBear());
driver.quit()