import createGame, { emptyGameState } from '../scripts/gameLogicInterface';

test('a reset game state returns default information', () => {
	const initialGameState = emptyGameState;

	let game = createGame(initialGameState);

	expect(game.getGameState()).toBe(emptyGameState);
});