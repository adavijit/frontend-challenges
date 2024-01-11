import ChessBoard from "./Challenges/ChessBoard/ChessBoard";
import SnakeLadderBoard from "./Challenges/SnakeLadder/SnakeLadderBoard";
import TicTacToe from "./Challenges/TicTacToe/TicTacToe";

const basePath = "https://github.com/adavijit/frontend-challenges/tree/main/src/Challenges";
const challenges = [
    {
        "name": "Tic-Tac-Toe",
        "contributors": ["adavijit"],
        "source": `${basePath}/TicTacToe`,
        "component": <TicTacToe />
    },
    {
        "name": "Chess Board",
        "contributors": ["adavijit"],
        "source": `${basePath}/ChessBoard`,
        "component": <ChessBoard />
    },
    {
        "name": "Snake Ladder Board",
        "contributors": ["adavijit"],
        "source": `${basePath}/SnakeLadder`,
        "component": <SnakeLadderBoard />
    },
];

export default challenges;