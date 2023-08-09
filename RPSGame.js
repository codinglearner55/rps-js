// ROCK PAPER SCISSORS GAME IN JS
//
/* create objects 
   - pieces
   - players
   - the game
   - the game logic
   - playertype using
   - piecetype */
   
   
   
	class Player {
		//class fields
		#playerName = "";
		#playerChoice = 0;
		
		// class methods
		constructor () {
			//this.name = name;
		}
		
		getPlayerName () {
			//
			return this.playerName
		}
		
		setPlayerName (playerName) {
			this.playerName = playerName
		}
		
		getPlayerChoice () {
			//
			return this.playerChoice
		}
		
		setPlayerChoice (playerChoice) {
			this.playerChoice = playerChoice
		}
		
	} // end class
   
   
   class HumanPlayer extends Player {
			// 
	   		constructor () {
				super()
			}
	}

	
	class PCPlayer extends Player {
			// 
			constructor () {
				super()
				//this.name = "Computer Player";
				this.setPlayerName ("Computer Player")
			}
			
			decideOnPlayerChoice () {
				const randomNumber = Math.random()
				this.setPlayerChoice(Math.trunc((randomNumber/3.34)*10))
			}
	}   
	
	class Game {
		
			#gameState = "";
		
			constructor (player1, player2) {
				//
				this.gameState = "Playing"
			}
			
			getgameState (){
				return this.gameState
			}
			
			setGameState (gameState) {
				this.gameState = gameState
			}
			
			showTheEnd () {
				   console.log("The END");
			}
			
			play (player1, player2) {
				const winLossMap = [["D","L","W"], ["W","D","L"],["L","W","D"]]
				
				const gamePieces = ["Rock", "Paper", "Scissors"];
				
				console.log("The Players are choosing their pieces...");
				console.log("The pieces are :");
				
				for (let i = 0; i < gamePieces.length; i++) {
					console.log((i+1) + " : " + gamePieces[i]);
				}
				player1.decideOnPlayerChoice();
				player2.decideOnPlayerChoice();
				
				console.log("Player 1 has chosen: " + gamePieces[player1.getPlayerChoice()]);
				console.log("Player 2 has chosen: " + gamePieces[player2.getPlayerChoice()]);
				
				// game logic
				if (player1.getPlayerChoice() == player2.getPlayerChoice()) {
					console.log("The game is a draw")
					// then play again
					this.play(player1, player2)
				}
				
				let winOrLoss = winLossMap[player1.getPlayerChoice()][player2.getPlayerChoice()]
				
				if (this.gameState != "Concluded") {
					switch (winOrLoss) {
						case "W" :
							console.log("Player 1 Wins");
							break;
						case "L" :
							console.log("Player 2 Wins");
							break;
					}
				}
				this.gameState = "Concluded";
			}
		
	}
	
	function getUsersName() {
				const readline = require("readline")
				
				const rl = readline.createInterface({
					input: process.stdin,
					output: process.stdout,
				});
   
				let userInput = "";
   
				rl.question("What is your name\n", function (string) {
					userInput = string;
		
					//console.log("Your name is " + userInput);
   
					rl.close();
		
					player1.setPlayerName(userInput)
				});
	}

  
   console.log("ROCK PAPER SCISSORS GAME");
  
   const player1 = new PCPlayer()
   const player2 = new PCPlayer()
   player1.setPlayerName("Player 1")
   player2.setPlayerName("Player 2")
   

   const rpsGame = new Game(player1, player2)
   
   rpsGame.play(player1, player2)
   
   //userinput always execs at the end - not understanding it atm
   //rpsGame.showTheEnd()
