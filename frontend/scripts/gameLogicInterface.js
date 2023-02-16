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
	tetrisesMade: 0,
	tetrominoesDropped: 0,
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

		isStatePossible: function(newState){

		},
		/**
		 * Checks if a new active tetromino state is possible
		 *
		 * The paramenter newState is the same format as `activeTetromino` in the gameState object
		 * @param {object} newState
		 * @returns {boolean}
		 */
		isStatePossible: function(newState) {
			for (let i = 0; i < newState.tiles[0].length; i++) {
				for (let j = 0; j < newState.tiles.length; j++) {
					if (newState.tiles[j][i] == null) { continue; }

					let gridCoords = {
						x: newState.position.x + i,
						y: newState.position.y - j // Playfield has origin bottom-left, tiles has origin top-left
					};

					// Check if tiles are out of bounds
					if (gridCoords.x < 0 || gridCoords.x >= WIDTH || gridCoords.y < 0 || gridCoords.y >= HEIGHT) {
						return false;
					}

					// Check if tiles are on top of each other
					if (this.gameState.playfield[gridCoords.y][gridCoords.x] != null) {
						return false;
					}
				}
			}

			return true;
		},

		/**
		 * Progress the game forward one timestep
		 */
		gameTick: function() {
			if (this.gameState.isStatePossible() === true){
				this.gameState.activeTetromino.position.y = this.gameState.activeTetromino.position.y - 1
			} else {
				this.gameState.activeTetromino = this.gameState.playfield[this.gameState.activeTetromino.position.x][this.gameState.activeTetromino.position.y] //do for loop to only put in the tiles that exist and not the empty ones
				this.gameState.activeTetromino = {
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
			}
			if (!this.gameState.playfield[0].includes(null)){
				for (let tempCheck = 0; tempCheck < 20; tempCheck = tempCheck + 1){
					this.gameState.playfield[tempCheck].splice(0,10)
					this.gameState.playfield.splice(19,0,null)
					this.gameState.score = this.gameState.score + 100
					this.gameState.tetrisesMade = this.gameState.tetrisesMade + 1
				}	
			}
			
		},

		/**
		 * Return if the game is over
		 * @return {boolean}
		 */
		isGameOver: function() {
			if (playfield[19].includes("cyan" || "blue" || "orange" || "yellow" || "green" || "purple" || "red")){
				return(true)
			}

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
					return this.gameState.activeTetromino.tiles[j][i]
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
			return this.gameState.tetrisesMade
			return this.gameState.tetrominoesDropped
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
		},

		/**
		 * Move the current tetromino right 1 tile
		 */
		moveRight: function() {
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
