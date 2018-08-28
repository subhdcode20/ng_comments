export default function ng(state = [], action) {

	const tempState = { ...state }

	switch(action.type) {
		case 'LOADER_NOTIFICATION':
			return { ...tempState, isLoading: true }
			break;
		case 'NOTIFICATIONS':
			let isError = true;
			let isLoading = true;
			let list = [];
			if(
				action.payload &&
				action.payload.status &&
				action.payload.status >= 200 && action.payload.status < 300
			) {
				isError = false;
				const data = action.payload.data.noti;

				list = data.filter( entry => {
					return Boolean(entry.channelid);
				});

				if(list.length > 0) localStorage.setItem('NG_myNotifications', JSON.stringify(list));
				isLoading = false;
			}

			return { ...tempState, list, isLoading, timestamp: Date.now() }
			break;
		
		case 'NOTIFICATIONS_CACHE':
			list = [];
			try {
				const fromCache = localStorage.getItem('NG_myNotifications');
				list = JSON.parse(fromCache)
			}catch(e){
				list = [];
			}

			return { ...tempState, list }
			break;

		default:
			return tempState;
	}
}
