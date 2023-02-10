import createGame, { emptyGameState, Tetromino } from '../scripts/gameLogicInterface';

test('a reset game state returns default information', () => {
	const initialGameState = emptyGameState;

	let game = createGame(initialGameState);

	expect(game.getGameState()).toBe(emptyGameState);

	expect(game.getScore()).toBe(emptyGameState.score);
	expect(game.getUpcomingTetrominoes()).toBe(emptyGameState.upcomingTetrominoes);
	expect(game.getHeldTetromino()).toBe(emptyGameState.heldTetromino);
});

test('game tick changes the game state', () => {
	const initialGameState = emptyGameState;

	let game = createGame(initialGameState);
	game.gameTick();

	expect(game.getGameState()).not.toBe(emptyGameState);
});

test('game over is false when no blocks are on the top row', () => {
	let gameState = emptyGameState;

	let game = createGame(gameState);

	expect(game.isGameOver()).toBe(false);
});

test('determines that the game is over when a block reaches the top row', () => {
	let gameState = emptyGameState;
	gameState.playfield[19][0] = 'red';

	let game = createGame(gameState);

	expect(game.isGameOver()).toBe(false);
});

test('returns colour of tile at specific position', () => {
	let gameState = emptyGameState;
	gameState.playfield[5][7] = 'red';
	gameState.playfield[4][7] = 'cyan';

	let game = createGame(gameState);

	expect(game.getTileAtPosition(7, 5)).toEqual('red');
	expect(game.getTileAtPosition(7, 4)).toEqual('cyan');
});

test('correctly returns the score', () => {
	let gameState = emptyGameState;
	gameState.score = 100;

	let game = createGame(gameState);

	expect(game.getScore()).toEqual(100);
});

test('increases the score when clearing a line', () => {
	let gameState = emptyGameState;
	gameState.playfield[0].fill('red');

	let game = createGame(gameState);
	game.gameTick();

	expect(game.getScore()).toBeGreaterThan(emptyGameState.score);
});

test('increases the score by more than 4*lines when clearing a tetris', () => {
	let gameState = emptyGameState;
	gameState.playfield[0].fill('red');

	let game = createGame(gameState);
	game.gameTick();

	const singleLineScore = game.getScore() - emptyGameState.score();

	gameState.playfield[1].fill('red');
	gameState.playfield[2].fill('red');
	gameState.playfield[3].fill('red');

	game = createGame(gameState);
	game.gameTick();

	expect(game.getScore()).toBeGreaterThan(4 * singleLineScore);
});

test('returns the upcoming tetrominoes', () => {
	const upcomingTetrominoes = [Tetromino.I_Piece, Tetromino.J_Piece, Tetromino.T_Piece]
	let gameState = emptyGameState;
	gameState.upcomingTetrominoes = upcomingTetrominoes;

	let game = createGame(gameState);

	expect(game.getUpcomingTetrominoes()).toBe(upcomingTetrominoes);
});

test('returns the held tetromino', () => {
	let gameState = emptyGameState;
	gameState.heldTetromino = Tetromino.O_Piece;

	let game = createGame(gameState);

	expect(game.getHeldTetromino()).toBe(Tetromino.O_Piece);
});

test('holds the currently active tetromino', () => {
	const gameState = emptyGameState;
	const activeTetromino = gameState.activeTetromino.name;

	let game = createGame(gameState);
	game.holdCurrentTetromino();

	expect(game.getHeldTetromino()).toBe(activeTetromino);
});
