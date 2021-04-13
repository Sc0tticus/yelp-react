export const API_BASE_URL = 'https://api.yelp.com/v3';

// Typically would create a server to use the token to hide it but not enough time to make that happen.
// FIXME: A bearer token is never supposed to be exposed to the outside world.
// NOTE: as long as this token is saved in the frontend, the application is not production ready.
// The Bearer token must be used on a server whose inner workings are not exposed to the outside world.
// For sake of time keeping bearer token in frontend code. Would take out this out for production.

export const BEARER_TOKEN =
	'eNaf0vZMUNd-TRwWzw1G4sokf22oJfhdyVrV7EJ_a9jTGXFXZ6BEd-sSw7E0EI00pF5hd3Qa0wnU6vTnJWA2EF5VcV2zhGnEotJtGB7hA_Q8MRk-BlePjxhwL0FpYHYx';
