import profileReducer, {addPostActionCreator, deletePost, setStatus} from "./profileReducer";

it('length should be incremented', () => {
    let action = addPostActionCreator("Hala Madrid!");
    let state = {
        posts: [
            {message:"Hey! Im leaving to California!", count:52, id:1},
            {message:"Wow! That's my new project.", count:0, id:2}
        ],
    };
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe("Hala Madrid!");
});
it('after deleting post length should decrement', () => {
    let action = deletePost(1);
    let state = {
        posts: [
            {message:"Hey! Im leaving to California!", count:52, id:1},
            {message:"Wow! That's my new project.", count:0, id:2}
        ],
    };
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
});
it('status text should be correct', () => {
    let action = setStatus("Hala)");
    let state = {status: ""};
    let newState = profileReducer(state, action);
    expect(newState.status).toBe("Hala)");
});
