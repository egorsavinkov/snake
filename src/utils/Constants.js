import bc from "../images/bc.jpg";
import bc0 from "../images/bc0.jpg";
import bc1 from "../images/bc1.jpg";
import bc2 from "../images/bc2.jpg";
import bc3 from "../images/bc3.jpg";
import styleCSS from "../components/game/game.module.css";
import r10 from "../images/r10.jpg";
import r125 from "../images/r125.jpg";
import r150 from "../images/r150.jpg";
import r175 from "../images/r175.jpg";
import r1100 from "../images/r1100.jpg";
import r20 from "../images/r20.jpg";
import r225 from "../images/r225.jpg";
import r250 from "../images/r250.jpg";
import r275 from "../images/r275.jpg";
import r2100 from "../images/r2100.jpg";
import r30 from "../images/r30.jpg";
import r325 from "../images/r325.jpg";
import r350 from "../images/r350.jpg";
import r375 from "../images/r375.jpg";
import r3100 from "../images/r3100.jpg";
import r40 from "../images/r40.jpg";
import r425 from "../images/r425.jpg";
import r450 from "../images/r450.jpg";
import r475 from "../images/r475.jpg";
import r4100 from "../images/r4100.jpg";

export const gameOverPage = 'GameOver';
export const gamePage = 'Game';
export const homePage = 'Home';
export const playPage = 'Play';
export const authorizationPage = 'Authorization';
export const tutorialPage = 'Tutorial';
export const nextLevelPage = 'Level';
export const winnersPage = 'Winners';
export const registrationPage = 'Registration';
export const cabinetPage = 'Cabinet';
export const RIGHT = 'RIGHT';
export const LEFT = 'LEFT';
export const UP = 'UP';
export const DOWN = 'DOWN';
export const pageNavArr = ['Home', 'Tutorial', 'Winners'];
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_SNAKE_COLOR = 'CHANGE_SNAKE_COLOR';
export const CHANGE_LEVEL_POINTS = 'CHANGE_LEVEL_POINTS';
export const CHANGE_GAME_POINTS = 'CHANGE_GAME_POINTS';
export const CHANGE_LEVEL = 'CHANGE_LEVEL';
export const CHANGE_TUTORIAL = 'CHANGE_TUTORIAL';
export const USER_REGISTRATION_NICKNAME = 'USER_REGISTRATION_NICKNAME';
export const USER_REGISTRATION_EMAIL = 'USER_REGISTRATION_EMAIL';
export const USER_REGISTRATION_UID = 'USER_REGISTRATION_UID';
export const USER_AUTHORIZATION_NICKNAME = 'USER_AUTHORIZATION_NICKNAME';
export const USER_AUTHORIZATION_EMAIL = 'USER_AUTHORIZATION_EMAIL';
export const USER_AUTHORIZATION_PASSWORD = 'USER_AUTHORIZATION_PASSWORD';
export const USER_AUTHORIZATION_UID = 'USER_AUTHORIZATION_UID';
export const USER_AUTHORIZATION_LEVEL = 'USER_AUTHORIZATION_LEVEL';
export const USER_AUTHORIZATION_GAME_POINTS = 'USER_AUTHORIZATION_GAME_POINTS';
export const snakeArr = [[0, 0], [2, 0], [4, 0]];
export const levelArrZero = [];
export const levelArrOne = [[14, 30], [14, 32], [14, 34], [14, 36], [14, 38], [14, 40], [14, 42], [14, 44], [14, 46], [14, 48],
    [14, 54], [14, 50], [14, 52], [14, 54], [14, 56], [14, 58], [14, 60], [14, 62], [14, 64], [14, 66],
    [68, 60], [70, 60], [72, 60], [74, 60], [76, 60], [78, 60], [80, 60], [82, 60], [84, 60], [86, 60], [88, 60], [90, 60],
    [84, 62], [84, 64], [84, 66], [84, 68], [84, 70], [84, 72], [84, 74], [84, 76], [84, 78], [84, 80], [84, 82], [84, 84]];
export const levelArrTwo = [[74, 24], [74, 26], [74, 28], [74, 30], [74, 32], [74, 34], [74, 36], [74, 38], [74, 40], [74, 42], [74, 44], [74, 46], [74, 48],
    [74, 52], [74, 54], [74, 56], [74, 58], [74, 60], [74, 62], [74, 64], [74, 66], [74, 68], [74, 70], [74, 72], [74, 74],
    [22, 24], [22, 26], [22, 28], [22, 30], [22, 32], [22, 34], [22, 36], [22, 38], [22, 40], [22, 42], [22, 44], [22, 46], [22, 48],
    [22, 52], [22, 54], [22, 56], [22, 58], [22, 60], [22, 62], [22, 64], [22, 66], [22, 68], [22, 70], [22, 72], [22, 74],
    [24, 24], [26, 24], [28, 24], [30, 24], [32, 24], [34, 24], [36, 24], [38, 24], [40, 24], [42, 24], [44, 24], [46, 24], [50, 24],
    [52, 24], [54, 24], [56, 24], [58, 24], [60, 24], [62, 24], [64, 24], [66, 24], [68, 24], [70, 24], [72, 24],
    [22, 76], [24, 76], [26, 76], [28, 76], [30, 76], [32, 76], [34, 76], [36, 76], [38, 76], [40, 76], [42, 76], [44, 76], [46, 76], [50, 76],
    [52, 76], [54, 76], [56, 76], [58, 76], [60, 76], [62, 76], [64, 76], [66, 76], [68, 76], [70, 76], [72, 76], [74, 76]];
export const levelArrThree = [
    [90, 12], [90, 14], [90, 16], [90, 18], [90, 20], [90, 22], [90, 24], [90, 26], [90, 28], [90, 30], [90, 32], [90, 34], [90, 36], [90, 38], [90, 40], [90, 42], [90, 44], [90, 46], [90, 48],
    [90, 50], [90, 52], [90, 54], [90, 56], [90, 58], [90, 60], [90, 62], [90, 64], [90, 66], [90, 68], [90, 70], [90, 72], [90, 74], [90, 76], [90, 78], [90, 80], [90, 82], [90, 84], [90, 86], [90, 88], [90, 90],
    [88, 78], [86, 78], [84, 78], [82, 78], [80, 78], [78, 78], [76, 78], [74, 78], [72, 78], [70, 78], [68, 78], [66, 78], [64, 78],
    [10, 12], [10, 14], [10, 16], [10, 18], [10, 20], [10, 22], [10, 24],
    [12, 24], [14, 24], [16, 24], [18, 24], [20, 24], [22, 24],
    [12, 38], [14, 38], [16, 38], [18, 38], [20, 38], [22, 38], [24, 38], [26, 38], [28, 38], [30, 38], [32, 38], [34, 38], [36, 38],
    [36, 36], [36, 34], [36, 32], [36, 30], [36, 28], [36, 26], [36, 24],
    [10, 38], [10, 40], [10, 42], [10, 44], [10, 46], [10, 48],
    [10, 50], [10, 52], [10, 54], [10, 56], [10, 58], [10, 60], [10, 62], [10, 64], [10, 66], [10, 68], [10, 70], [10, 72], [10, 74], [10, 76], [10, 78], [10, 80], [10, 82], [10, 84], [10, 86], [10, 88], [10, 90],
    [12, 80], [14, 80], [16, 80], [18, 80], [20, 80], [22, 80], [24, 80],
    [24, 78], [24, 76], [24, 74], [24, 72], [24, 70], [24, 68], [24, 66], [24, 64], [24, 62], [24, 60], [24, 58], [24, 56], [24, 54], [24, 52],
    [10, 10], [12, 10], [14, 10], [16, 10], [18, 10], [20, 10], [22, 10], [24, 10], [26, 10], [28, 10], [30, 10], [32, 10], [34, 10], [36, 10], [38, 10], [40, 10], [42, 10], [44, 10], [46, 10], [48, 10], [50, 10],
    [52, 10], [54, 10], [56, 10], [58, 10], [60, 10], [62, 10], [64, 10], [66, 10], [68, 10], [70, 10], [72, 10], [74, 10], [76, 10], [78, 10], [80, 10], [82, 10], [84, 10], [86, 10], [88, 10], [90, 10],
    [50, 12], [50, 14], [50, 16], [50, 18], [50, 20], [50, 22], [50, 24], [50, 26], [50, 28], [50, 30], [50, 32], [50, 34], [50, 36], [50, 38], [50, 40], [50, 42], [50, 44], [50, 46], [50, 48], [50, 50], [50, 52],
    [48, 52], [46, 52], [44, 52], [42, 52], [40, 52], [38, 52], [36, 52], [36, 54], [36, 56], [36, 58], [36, 56], [36, 60], [36, 62], [36, 64], [36, 66], [36, 68],
    [50, 66], [50, 68], [50, 70], [50, 72], [50, 74], [50, 76], [50, 78], [50, 80], [50, 82], [50, 84], [50, 86], [50, 88],
    [52, 66], [54, 66], [56, 66], [58, 66], [60, 66], [62, 66], [64, 66], [66, 66], [68, 66], [70, 66], [72, 66], [74, 66],
    [76, 66], [76, 64], [76, 62], [76, 60], [76, 58], [76, 56], [76, 54], [76, 52], [76, 50], [76, 48], [76, 46], [76, 44], [76, 42], [76, 40], [76, 38], [76, 36], [76, 34], [76, 32], [76, 30], [76, 28], [76, 26], [76, 24], [76, 22], [76, 20],
    [74, 20], [72, 20], [70, 20], [68, 20], [66, 20], [64, 20], [62, 20],
    [12, 90], [14, 90], [16, 90], [18, 90], [20, 90], [22, 90], [24, 90], [26, 90], [28, 90], [30, 90], [32, 90], [34, 90], [36, 90], [38, 90], [40, 90], [42, 90], [44, 90], [46, 90], [48, 90], [50, 90],
    [52, 90], [54, 90], [56, 90], [58, 90], [60, 90], [62, 90], [64, 90], [76, 90], [78, 90], [80, 90], [82, 90], [84, 90], [86, 90], [88, 90]
];
export const black = `black`;
export const pink = `pink`;
export const blue = 'blue';
export const lemon = 'lemon';
export const indigo = 'indigo';
export const violet = `violet`;
export const orange = `orange`;
export const levelArr = ['zero', 'one', 'two', 'three', 'finish'];
export const bonusCard = [
    ['Bonus card', 'Earn points, increase the difficulty of the game and unlock ' +
    'new bonus cards', bc],
    ['Bahai Gardens', 'Located on Mount Carmel in Haifa. 19 garden terraces, decorated with landscape compositions, ' +
    'descend from the majestic Bahai temple to the coast.', bc0],
    ['Masada Fortress', 'A powerful ancient defensive structure on top of an impregnable rock in the Judean Desert. ' +
    'Since ancient times, it has been used as a fortress and fortified dwelling of the ruler and his family. ' +
    'In the ruins there are many ancient buildings of historical value.', bc1],
    ['Dead Sea', 'In fact, this is not a sea, but a salt lake. It is famous for its rich composition of water and ' +
    'healing mud. Salt water is rich in elements such as magnesium, bromine, sodium, potassium, etc.', bc2],
    ['Old City of Jaffa', 'One of the oldest cities in the world, which existed as a port 4000 years ago. It was here that ' +
    'Noah once built an ark, and Perseus freed Andromeda, the Crusaders, and then Napoleon, also managed to ' +
    'visit here.', bc3]
];
// export const levelBackground = {
//     zero: `${styleCSS.game_area_f1}`,
//     one: `${styleCSS.game_area_f2}`,
//     two: `${styleCSS.game_area_f3}`,
//     three: `${styleCSS.game_area_f4}`
// }
export const levelShowplace = [
    [r10, r125, r150, r175, r1100],
    [r20, r225, r250, r275, r2100],
    [r30, r325, r350, r375, r3100],
    [r40, r425, r450, r475, r4100]
];

export const pageBackground = {
    Home: `home_background`,
    Play: `play_background`,
    Winners: `winners_background`,
    Level: `level_background`,
    GameOver: `gameOver_background`,
    Registration: `ar_background`,
    Authorization: `ar_background`
}