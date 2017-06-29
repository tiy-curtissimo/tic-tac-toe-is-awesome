import { MyTicTacToeAppHasALongNamePage } from './app.po';

describe('my-tic-tac-toe-app-has-a-long-name App', () => {
  let page: MyTicTacToeAppHasALongNamePage;

  beforeEach(() => {
    page = new MyTicTacToeAppHasALongNamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
