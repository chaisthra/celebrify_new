export const API_CONFIG = {
  BASE_URL: 'https://dzzu31.buildship.run',
  ENDPOINTS: {
    CREATE_EVENT: '/api/create-event',
  },
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
} as const;