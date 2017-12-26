import { browser, by, element } from 'protractor';

export class SchoolsPage {
  navigateTo() {
    return browser.get('/schools');
  }

  navigateToId(id: string) {
    return browser.get('/schools/'+id);
  }
  getSchoolDetailText(csstext: string) {
    return element(by.css(csstext)).getText();
  }
  getParagraphText() {
    return element(by.css('.ccccc')).getText();
  }

  getPanelHeader() {
    return element(by.css('.panel-heading')).getText();
  }

  getSchoolElements() {
        return element.all(by.css('.card--media'));
    }

}


// import { browser, element, by, Key } from 'protractor';

// export class SchoolsPage {
//     navigateTo() {
//       return browser.get('/schools');
//     }
  
//     getSchoolElements() {
//         return element.all(by.css('.school--media'));
//     }

// }