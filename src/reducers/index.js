import {
  IS_LOGINED,
  CHANGE_DISPLAYMODE,
  SET_GAME,
  NICKNAME,
  ARTICLES,
  LEADER_BOARD,
  CHANGE_TOKEN,
  CHANGE_CURRENTARTICLE,
  MY_SCORE,
} from '../actions';

const initialState = {
  isLogined: false,
  displayMode: 'NOTICEBOARD',
  currentGame: null,
  articles: [],
  article: [],
  nickname: 'guest',
  leaderBoard: {},
  gameList: [
    {
      gameID: 0,
      gameTitle: 'Snake',
      thumbnail: 'snake.png',
    },
    {
      gameID: 1,
      gameTitle: 'Tetris',
      thumbnail: 'tetris.jpg',
    },
    {
      gameID: 2,
      gameTitle: 'Sudoku',
      thumbnail: 'sudoku.png',
    },
  ],
  myScore: {
    nickname: 'black tardis',
    games: [
      {
        gameTitle: 'Game 1',
        scores: ['-'],
      },
      {
        gameTitle: 'Game 2',
        scores: ['-'],
      },
      {
        gameTitle: 'Game 3',
        scores: ['-'],
      },
    ],
  },
  token: {
    accessToken: '',
    refreshToken: '',
  },
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGINED: {
      return {
        ...state,
        isLogined: !state.isLogined,
      };
    }

    case CHANGE_DISPLAYMODE: {
      return {
        ...state,
        displayMode: action.displayMode,
      };
    }
    case SET_GAME: {
      return {
        ...state,
        currentGame: action.gameID,
      };
    }

    case NICKNAME: {
      return {
        ...state,
        nickname: action.nickname,
      };
    }

    case ARTICLES: {
      return {
        ...state,
        articles: action.articles,
      };
    }

    case LEADER_BOARD: {
      return {
        ...state,
        leaderBoard: action.leaderBoard,
      };
    }

    case CHANGE_TOKEN: {
      return {
        ...state,
        token: {
          accessToken: action.token.accessToken,
          refreshToken: action.token.refreshToken,
        },
      };
    }

    case CHANGE_CURRENTARTICLE: {
      return {
        ...state,
        article: action.article,
      };
    }

    case MY_SCORE: {
      return {
        ...state,
        myScore: action.myScore,
      };
    }

    default:
      return state;
  }
};

export default reducers;
