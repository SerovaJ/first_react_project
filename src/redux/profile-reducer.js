const ADD_POST_ELEMENT = 'ADD-POST-ELEMENT';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{id: 1, message: 'It\'s your new program!', likesCount: 12},
		{id: 2, message: 'Hello!', likesCount: 11},
	],

	newPostText: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST_ELEMENT:
			let newPost = {
				id: 3,
				message: state.newPostText,
				likesCount: 0
			};

			state.posts.push(newPost);
			state.newPostText = '';
			return state;

		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;

		default:
			return state;
	}
}

export const addPostElementActionCreator = () => ({
	type: ADD_POST_ELEMENT,
})

export const updateNewPostTextActionCreator = (textPost) =>({
	type: UPDATE_NEW_POST_TEXT,
	newText: textPost
})

export default profileReducer;
