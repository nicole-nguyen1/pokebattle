import { GameClient, NamedAPIResourceList } from 'pokenode-ts';

import { Controller, Get, Route, Tags } from 'tsoa';

const gameClient = new GameClient();

@Route('games')
@Tags('Games')
export class GamesController extends Controller {
  @Get('/')
  public async getGames(): Promise<NamedAPIResourceList> {
    try {
      return await gameClient.listVersionGroups();
    } catch (err) {
      this.setStatus(500);
      throw new Error('Failed to fetch version groups');
    }
  }
}
