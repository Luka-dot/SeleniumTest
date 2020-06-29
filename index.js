const {Builder, By, Key, until} = require("selenium-webdriver");
const webdriver = require("selenium-webdriver/lib/webdriver");

const serverName = "";
const swatPassword = "";
const epsilonServer = "";
const queryName = "";

async function example() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://"+ serverName + "/swat/");
    
    //log in to SWAT
    await driver.findElement(By.name("username")).sendKeys(swatPassword,Key.ENTER);
    await driver.findElement(By.name("password")).sendKeys(swatPassword,Key.ENTER);

    // closing pop-over and go to system
    await driver.sleep(4000);
    await driver.findElement(By.css("#step-0 > div.popover-navigation > button")).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("show-system")).click();
    
    // tuning
    await driver.sleep(3000);
    await driver.findElement(By.css("body > div.wrapper > div.subnavbar > div > div > div > ul.mainnav.mainnav-system > li.dropdown.subnav-system-systemconfig > a > span")).click();
    
    // System->Tuning->Other
    await driver.sleep(3000);
    await driver.findElement(By.css("#system_tuning_other > a")).click();

    // Epsilon trace edit and closing pop-over
    await driver.sleep(3000);
    // pop-over in line below is not consistent
    await driver.findElement(By.className("msgGrowl-close")).click();
    await driver.findElement(By.css("#systemconfig-other > table > tbody > tr:nth-child(4) > td.td-actions > a:nth-child(2)")).click();
    
    // enter value for server location
    await driver.sleep(2000);
    await driver.findElement(By.name("value")).sendKeys(epsilonServer,Key.ENTER);

// *************   second step **********************
    // Client->Dicom->Query/Retriver
    await driver.sleep(1000);
    await driver.findElement(By.id("show-clients")).click();
    await driver.findElement(By.css("body > div.wrapper > div.subnavbar > div > div > div > ul.mainnav.mainnav-clients > li.dropdown.subnav-clients-dicom > a > b")).click();
    await driver.findElement(By.css("body > div.wrapper > div.subnavbar > div > div > div > ul.mainnav.mainnav-clients > li.dropdown.subnav-clients-dicom.open > ul > li:nth-child(3) > a")).click();
    // arrow->Add New Item-->fields fill
    await driver.sleep(2000);
    await driver.findElement(By.id("sw-page-widget-header-buttons-id")).click();
    await driver.findElement(By.css("#sw-page-widget-header-buttons-container-id > ul > li:nth-child(1) > a")).click();
    await driver.findElement(By.name("ae_name_cfind")).sendKeys(queryName,Key.ENTER);
    await driver.findElement(By.name("name")).sendKeys(queryName,Key.ENTER);
    
    // EDIT Dicom EpsilonSCU   2 pop-up blocking EDIT button needs to be closed
    await driver.sleep(3500);
    await driver.findElement(By.className("msgGrowl-close")).click();
    await driver.sleep(3500);
    await driver.findElement(By.className("msgGrowl-close")).click();
    await driver.findElement(By.css("#sw-highlighted-list-item-id > td:nth-child(9) > a.sw-editform-btn.dicomquery-editform-btn.ui-popover.btn.btn-default")).click();
    
    
    // confirm YES buttons
    await driver.findElement(By.id("is_cfind_enabled-toggle-y-id")).click();
    await driver.findElement(By.id("retrieve_sent_studies-toggle-y-id")).click();
    // text area
    await driver.findElement(By.id("ae_name_cfind-input-id")).sendKeys("",Key.ENTER);
    // Retriever Info Tab   2 pop-up blocking EDIT button needs to be closed
    await driver.sleep(2500);
    await driver.findElement(By.className("msgGrowl-close")).click();
    await driver.sleep(3500);
    await driver.findElement(By.className("msgGrowl-close")).click();
    await driver.findElement(By.css("#DataTables_Table_0 > tbody > tr:nth-child(4) > td:nth-child(9) > a.sw-editform-btn.dicomquery-editform-btn.ui-popover.btn.btn-default")).click();
    await driver.findElement(By.css("#addeditdupremove-form-id > ul > li:nth-child(2) > a")).click();
    await driver.findElement(By.id("is_cmove_enabled-toggle-y-id")).click();
    await driver.findElement(By.id("image_retrieval_option_uid-input-3-id")).click();
    // Retriever infor  Text-Area
    await driver.findElement(By.id("dest_host_name-input-id")).sendKeys(serverName +".sysk8.local");
    await driver.findElement(By.id("tcp_port-input-id")).sendKeys("104",Key.ENTER);
    
}
example();
