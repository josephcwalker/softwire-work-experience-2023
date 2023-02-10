// Enum substitute
export const Tetromino = {
	I_Piece: "I_Piece",
	J_Piece: "J_Piece",
	L_Piece: "L_Piece",
	O_Piece: "O_Piece",
	S_Piece: "S_Piece",
	Z_Piece: "Z_Piece",
	T_Piece: "T_Piece",
};

export const emptyGameState = {
	// A 10x20 array full of null values
	playfield: new Array(20).fill(new Array(10).fill(null)),
	score: 0,
	upcomingTetrominoes: Array.from({length: 3}, () => {
		const pieces = Object.values(Tetromino);
		return pieces[Math.floor(Math.random() * pieces.length)];
	}),
	heldTetromino: null
};

export default function createGame(initialGameState = emptyGameState) {
	const tetrisGame = {
		gameState: initialGameState,

		/**
		 * Progress the game forward one timestep
		 */
		gameTick: function() {

		},

		/**
		 * Return if the game is over
		 * @return {boolean}
		 */
		isGameOver: function() {

		},

		/**
		 * Return the tile at the given position
		 * If there is a tile, return it's colour
		 * @return {null | string}
		 *
		 * Possible colours: "cyan, blue, orange, yellow, green, purple, red"
		 */
		getTileAtPosition: function(x, y) {

		},

		/**
		 * Return the score of the game
		 * @return {int}
		 */
		getScore: function() {

		},

		/**
		 * Return any stats that have been kept track of (tetrominos dropped, tetrises made, etc.)
		 * @return {object}
		 *
		 * Which stats to keep track of can be determined later
		 */
		getStats: function() {

		},

		/**
		 * Get any upcoming tetrominoes
		 * @return {Array<Tetromino>}
		 */
		getUpcomingTetrominoes: function() {

		},

		/**
		 * Return the tetromino currently being held, if any
		 * @return {null | Tetromino}
		 */
		getHeldTetromino: function() {

		},

		/**
		 * Return the entire game state in a single object
		 * This combines every one of the above functions (for debug purposes)
		 * @return {object}
		 */
		getGameState: function() {
			return this.gameState;
		},

		/**
		 * Move the current tetromino left 1 tile
		 */
		moveLeft: function() {

		},

		/**
		 * Move the current tetromino right 1 tile
		 */
		moveRight: function() {

		},

		/**
		 * Rotate the current tetromino clockwise 90 degrees
		 */
		rotateteTrominoClockwise: function() {

		},

		/**
		 * Rotate the current tetromino anti-clockwise 90 degrees
		 */
		rotateteTrominoAntiClockwise: function() {

		},

		/**
		 * Instantly drop the current tetromino as far as it goes and lock it in place
		 */
		instantDropTetromino: function() {

		},

		/**
		 * Hold the current tetromino, swapping it for any currently held one
		 */
		holdCurrentTetromino: function() {

		},
	};

	return tetrisGame;
};
