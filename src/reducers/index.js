import {
  IS_LOGINED,
  CHANGE_DISPLAYMODE,
  GAME_TYPE,
  NICKNAME,
  ARTICLES,
  LEADER_BOARD,
  CHANGE_TOKEN,
  CHANGE_CURRENTARTICLE,
} from '../actions';

const initialState = {
  isLogined: false,
  displayMode: 'Game',
  gametype: '1',
  articles: [
    {
      title: 'Hello world',
      contents: 'This is contents example',
      user_id: 2,
      likes: 5,
      dislikes: 1,
      created_at: '2020-04-05 22:04:40',
    },
  ],
  article: [],
  nickname: 'guest',
  leaderBoard: [],
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

    case CHANGE_TOKEN: {
      return {
        ...state,
        token: {
          accesToken: action.token.accessToken,
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

    default:
      return state;
  }
};

export default reducers;
