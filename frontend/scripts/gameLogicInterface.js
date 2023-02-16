const WIDTH = 10;
const HEIGHT = 20;

export const Tetromino = {
	I_Piece: "I_Piece",
	J_Piece: "J_Piece",
	L_Piece: "L_Piece",
	O_Piece: "O_Piece",
	S_Piece: "S_Piece",
	Z_Piece: "Z_Piece",
	T_Piece: "T_Piece",
};

const TetrominoShapes = {
	I_Piece: [
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0]
	],
	J_Piece: [
        [0,0,1,0],
        [0,0,1,0],
        [0,1,1,0],
        [0,0,0,0]
	],
	L_Piece: [
       [0,1,0,0],
       [0,1,0,0],
       [0,1,1,0],
       [0,0,0,0]
	],
	O_Piece: [
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],
	S_Piece: [
        [0,0,0,0],
        [0,0,1,1],
        [0,1,1,0],
        [0,0,0,0]
	],
	Z_Piece: [
        [0,0,0,0],
        [1,1,0,0],
        [0,1,1,0],
        [0,0,0,0]
	],
	T_Piece: [
        [0,0,0,0],
        [0,1,1,1],
        [0,0,1,0],
        [0,0,0,0]
	]
};

function getRandomTetromino() {
	const options = Object.values(Tetromino);
	return options[Math.floor(Math.random() * options.length)];
}

function getRandomColour() {
	const options = [
		"cyan",
		"blue",
		"orange",
		"yellow",
		"green",
		"purple",
		"red"
	];
	return options[Math.floor(Math.random() * options.length)];
}

export const emptyGameState = {
	// A 10x20 array full of null values
	playfield: new Array(HEIGHT).fill(new Array(WIDTH).fill(null)),
	score: 0,
	upcomingTetrominoes: Array.from({length: 3}, getRandomTetromino),
	heldTetromino: null,
	activeTetromino: {
		...(function() {
			const tetromino = getRandomTetromino();
			return {
				name: tetromino,
				tiles: TetrominoShapes[tetromino]
			};
		}()),
		position: {
			x: (WIDTH - 4) / 2,
			y: HEIGHT - 2, // Top row is reserved for game over
		},
		colour: getRandomColour()
	}
};

export default function createGame(initialGameState = emptyGameState) {
	const tetrisGame = {
		gameState: initialGameState,

		/**
		 * Progress the game forward one timestep
		 */
		gameTick: function() {
			// 1: Move currently active piece down
			// 2: Lock piece in place if it can't move down anymore
			// 3: Clear any full lines
			// 4: Increase score
			// 5: Get new piece from upcoming tetrominoes
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
			if (x < 10 && x >= 0 && y >= 0 && y < 20){
				if (this.gameState.playfield[y][x] !== null){
					return this.gameState.playfield[y][x] // will be a colour like blue or null
				} 
				let i = x - this.gameState.activeTetromino.position.x
				let j = -(y - this.gameState.activeTetromino.position.y)
				if (i >= 0 && i < 4 && j >= 0 && j < 4 ){

					if (this.gameState.activeTetromino.tiles[j][i] == 0) {
						return null;
					} else {
						return this.gameState.activeTetromino.colour;
					}
				} 
					return(null)	
			}
		},

		/**
		 * Return the score of the game
		 * @return {int}
		 */
		getScore: function() {
			return this.gameState.score
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
			return this.gameState.upcomingTetrominoes
		},

		/**
		 * Return the tetromino currently being held, if any
		 * @return {null | Tetromino}
		 */
		getHeldTetromino: function() {
			return this.gameState.heldTetromino
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
		if (this.gameState.activeTetromino.name === 'I Piece' && this.gameState.activeTetromino.position.x > 9){
			this.gameState.activeTetromino.position.x = this.gameState.activeTetromino.position.x + 1
			
		} else if (this.gameState.activeTetromino.name === 'J Piece' && this.gameState.activeTetromino.position.x > 9){
			this.gameState.activeTetromino.position.x = this.gameState.activeTetromino.position.x + 1

		} else if (this.gameState.activeTetromino.name === 'L Piece' && this.gameState.activeTetromino.position.x > 9){
			this.gameState.activeTetromino.position.x = this.gameState.activeTetromino.position.x + 1

		} else if (this.gameState.activeTetromino.name === 'O Piece' && this.gameState.activeTetromino.position.x > 9){
			this.gameState.activeTetromino.position.x = this.gameState.activeTetromino.position.x + 1
			
		} else if (this.gameState.activeTetromino.name === 'S Piece' && this.gameState.activeTetromino.position.x > 9){
			this.gameState.activeTetromino.position.x = this.gameState.activeTetromino.position.x + 1
			
		} else if (this.gameState.activeTetromino.name === 'Z Piece' && this.gameState.activeTetromino.position.x > 9){
			this.gameState.activeTetromino.position.x = this.gameState.activeTetromino.position.x + 1
			
		} else if (this.gameState.activeTetromino.name === 'T Piece' && this.gameState.activeTetromino.position.x > 9){
			this.gameState.activeTetromino.position.x = this.gameState.activeTetromino.position.x + 1
			
		} else{
			alert('Something has gone wrong')
		}
		},

		/**
		 * Move the current tetromino right 1 tile
		 */
		moveRight: function() {
			this.gameState.activeTetromino.position.x = this.gameState.activeTetromino.position.x + 1
		},

		/**
		 * Rotate the current tetromino clockwise 90 degrees
		 */
		rotateTetrominoClockwise: function() {

		},

		/**
		 * Rotate the current tetromino anti-clockwise 90 degrees
		 */
		rotateTetrominoAntiClockwise: function() {

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
			let tempHeldTetromino = this.gameState.heldTetromino
			if (this.gameState.heldTetromino === null){
				this.gameState.heldTetromino = this.gameState.activeTetromino

			} else {
				tempHeldTetromino = this.gameState.heldTetromino
				this.gameState.heldTetromino = this.gameState.activeTetromino
				this.gameState.activeTetromino = tempHeldTetromino
			} 
		},
	};

	return tetrisGame;
};
