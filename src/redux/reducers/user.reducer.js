const initialState = {
	credentials: {
		role: null,
		token: null,
	},
	status: 'idle', // idle, loading, succeed, failed
	error: null,
};

/*
daftar user action
1. user/userLoggedIn
	- menyimpan role dan token
	- mengubah status menjadi succeed
2. user/userLoading
	- mengubah status menjadi loading
3. user/userFailed
	- mengubah status menjadi failed
*/

export function userReducer(state = initialState, action) {
	switch (action.type) {
		case 'user/userLoggedIn': {
			return {
				...state,
				user: action.payload,
				status: 'succeed',
			};
		}
		case 'user/userLoading': {
			return {
				...state,
				status: 'loading',
			};
		}
		case 'user/userFailed': {
			return {
				...state,
				status: 'failed',
				error: action.payload,
			};
		}
		default: {
			return state;
		}
	}
}
