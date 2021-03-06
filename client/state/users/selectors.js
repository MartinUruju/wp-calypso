/**
 * Returns a user object by user ID.
 * 
 *
 * @format
 * @param {Number} userId User ID
 * @return {Object}        User object
 */

export function getUser( state, userId ) {
	return state.users.items[ userId ];
}
