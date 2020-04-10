import {
  IS_LOGINED,
  CHANGE_DISPLAYMODE,
  GAME_TYPE,
  NICKNAME,
  ARTICLES,
  LEADER_BOARD,
} from '../actions';

const initialState = {
  isLogined: false,
  displayMode: 'Game',
  gametype: '1',
  articles: [],
  nickname: 'guest',
  leaderBoard: [],
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
    case GAME_TYPE: {
      return {
        ...state,
        gametype: action.gametype,
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

    default:
      return state;
  }
};

export default reducers;
