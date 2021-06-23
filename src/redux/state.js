let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "HY", likesCount: 4},
                {id: 2, message: "HY", likesCount: 67},
                {id: 3, message: "HY", likesCount: 6},
                {id: 4, message: "hello", likesCount: 400},
            ],
            newPostText: "",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Yo'},
            ],
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("State has been changed");
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;

window.store = store;