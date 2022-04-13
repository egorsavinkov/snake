import bc from "../images/bc.png";
import bc0 from "../images/bc0.jpg";
import bc1 from "../images/bc1.jpg";
import bc2 from "../images/bc2.jpg";
import bc3 from "../images/bc3.jpg";

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
export const CHANGE_STATE_START = 'CHANGE_STATE_START';
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
export const levelArrOne = [[60, 14], [62, 14], [64, 14], [66, 14], [68, 14], [70, 14], [72, 14], [74, 14], [76, 14], [78, 14],
    [80, 14], [82, 14], [84, 14], [86, 14], [88, 14], [90, 14], [92, 14], [94, 14], [96, 14], [98, 14],
    [10, 64], [12, 64], [14, 64], [16, 64], [18, 64], [20, 64], [22, 64], [24, 64], [26, 64], [28, 64], [30, 64], [26, 66],
    [26, 68], [26, 70], [26, 72], [26, 74], [26, 76], [26, 78], [26, 80], [26, 82], [26, 84], [26, 86], [26, 88]];
export const levelArrTwo = [];
export const levelArrThree = [];
export const black = `styleCSS.black`;
export const blue = `blue`;
export const red = `red`;
export const yellow = `yellow`;
export const green = `green`;
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

export const bonusCardObj = {
    intr: {
        title: 'Bonus card',
        description: 'Earn points, increase the difficulty of the game and unlock new bonus cards',
        image: '../images/bc.jpg'
    },
    zero: {
        title: 'Bahai Gardens',
        description: 'Located on Mount Carmel in Haifa. 19 garden terraces, decorated with landscape compositions, ' +
            'descend from the majestic Bahai temple to the coast.',
        image: '../images/bc0.jpg'
    },
    one: {
        title: 'Masada Fortress',
        description: 'A powerful ancient defensive structure on top of an impregnable rock in the Judean Desert. ' +
            'Since ancient times, it has been used as a fortress and fortified dwelling of the ruler and his family. ' +
            'In the ruins there are many ancient buildings of historical value.',
        image: '../images/bc1.jpg'
    },
    two: {
        title: 'Dead Sea',
        description: 'In fact, this is not a sea, but a salt lake. It is famous for its rich composition of water and ' +
            'healing mud. Salt water is rich in elements such as magnesium, bromine, sodium, potassium, etc.',
        image: '../images/bc2.jpg'
    },
    three: {
        title: 'Old City of Jaffa',
        description: 'One of the oldest cities in the world, which existed as a port 4000 years ago. It was here that ' +
            'Noah once built an ark, and Perseus freed Andromeda, the Crusaders, and then Napoleon, also managed to ' +
            'visit here.',
        image: '../images/bc3.jpg'
    }
}
