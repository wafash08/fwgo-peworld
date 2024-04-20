const initialState = {
	credentials: {
		role: null,
		token: null,
	},
	status: 'idle', // idle, loading, succeed, failed
	error: null,
};

/*
daftar auth action
1. auth/authLoggedIn
	- menyimpan role dan token
	- mengubah status menjadi succeed
2. auth/authSignedUp
	- mengubah status menjadi succeed
3. auth/authLoading
	- mengubah status menjadi loading
4. auth/authFailed
	- mengubah status menjadi failed
*/

export function authReducer(state = initialState, action) {
	switch (action.type) {
		case 'auth/authLoggedIn': {
			return {
				...state,
				credentials: action.payload,
				status: 'succeed',
			};
		}
		case 'auth/authSignedUp': {
			return {
				...state,
				status: 'succeed',
			};
		}
		case 'auth/authLoading': {
			return {
				...state,
				status: 'loading',
			};
		}
		case 'auth/authFailed': {
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
