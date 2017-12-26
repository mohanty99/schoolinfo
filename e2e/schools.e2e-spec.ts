import { SchoolsPage } from './schools.page';

describe('schools and school detail test', () => {
  let page: SchoolsPage;

  beforeEach(() => {
    page = new SchoolsPage();
  });

  it('should match school count', () => {
    page.navigateTo();
    expect(page.getPanelHeader()).toEqual('School List');
    expect(page.getSchoolElements().count()).toBe(3);
    //expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  beforeEach(()=>{
    page = new SchoolsPage();
  });

  it('should name match', () => {
    page.navigateToId('3');
    expect(page.getSchoolDetailText('div.school-name')).toEqual('Institute name 2');
    //expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

});


