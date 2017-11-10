import { Client1Page } from './app.po';

describe('client1 App', () => {
  let page: Client1Page;

  beforeEach(() => {
    page = new Client1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
