import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navbarReducer from "./navbarReducer";
let store = {
     _state: {
        profile: {
            posts: [
                {message:"Hey! Im leaving to California!", count:52, id:1},
                {message:"Wow! That's my new project.", count:0, id:2}
            ],
            newPostText: ''
        },
        messagesPart: {
            dialogs: [
                {id: '/dialogs/1', name: 'Dima', url: 'https://i.pinimg.com/originals/01/39/03/013903b378dc82f54bff5e4b7c2c739b.jpg'},
                {id: '/dialogs/2', name: 'Kama', url: 'https://i.pinimg.com/originals/1e/ad/6b/1ead6b3ae43da939c45a4db22f356afd.jpg'},
                {id: '/dialogs/3', name: 'Anri', url: 'https://www.homeadore.ru/files/products/kare_k61581_754027911.800x800w.jpg?e4cb9e4ca8396a0b14aad654f90c2cdf'},
                {id: '/dialogs/4', name: 'Alina', url: 'https://i.pinimg.com/originals/83/b8/77/83b877aa8597b1ffc7810ce3b06c378e.jpg'},
                {id: '/dialogs/5', name: 'Ki', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9f1qTS_CHKLCO_hZrbd9ybwAyoCSHbKDlQ&usqp=CAU'},
                {id: '/dialogs/6', name: 'BAGA', url: 'https://journeydogtraining.com/wp-content/uploads/2018/08/IMG_1068-600x600.jpg'}
            ],
            messages: [
                {id: 1, message: 'Hi!', myMessage: 'Hello!'},
                {id: 2, message: 'How r u?', myMessage: 'Perfect'},
                {id: 3, message: 'Yo!', myMessage: 'Yo, Man!'}
            ],
            myMessages: [
                {id: 1, myMessage: 'Hello!'},
                {id: 2, myMessage: 'Perfect'},
                {id: 3, myMessage: 'Yo, Man!'}
            ],
            messagesText: ''
        },
        navbar: {
            friends: [
                {
                    name:'Dima',
                    url: 'https://i.pinimg.com/originals/01/39/03/013903b378dc82f54bff5e4b7c2c739b.jpg'
                },
                {
                    name: 'Kama',
                    url: 'https://i.pinimg.com/originals/1e/ad/6b/1ead6b3ae43da939c45a4db22f356afd.jpg'
                },
                {
                    name: 'Anri',
                    url: 'https://www.homeadore.ru/files/products/kare_k61581_754027911.800x800w.jpg?e4cb9e4ca8396a0b14aad654f90c2cdf'
                }
            ]
        }
    },
     getState() {
       return this._state;
     },
     rerenderFullTree() {
        console.log('state');
    },
     subscribe(observer) {
        this.rerenderFullTree = observer;
    },

     dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messagesPart = messagesReducer(this._state.messagesPart, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
         this.rerenderFullTree();
     }
}
export default store;
