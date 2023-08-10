export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://joblistings-rashidshamloo.vercel.app'
    : 'http://localhost:3000';
