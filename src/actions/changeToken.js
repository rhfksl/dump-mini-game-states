export const CHANGE_TOKEN = 'CHANGE_TOKEN';

export const changeToken = (accessToken, refreshToken) => ({
  type: CHANGE_TOKEN,
  token: {
    accessToken,
    refreshToken,
  },
});
