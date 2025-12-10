import ProfilePage, { addPostActionCreator, deletePost } from './ProfilePageReducer';

jest.mock('../DAL/api', () => ({
  ProfileApi: {
    GetProfile: jest.fn(),
    GetProfileStatus: jest.fn(),
    UpdateProfileStatus: jest.fn(),
  }
}));

const initialState = {
  postData: [ 
    { id: 1, message: "Hi, how are you", likescount: 0 },
    { id: 2, message: "Hi", likescount: 0 },
    { id: 3, message: "Hohoho", likescount: 0 }
  ],
  profile: null,
  ProfileStatus: ""
};


  test('new post should be added', () => {
    const action = addPostActionCreator('it-alekss.com');

    const newState = ProfilePage(initialState, action);

    expect(newState.postData.length).toBe(4);
  });

  test('new text should be corrected', () => {
    const action = addPostActionCreator('it-alekss.com');

    const newState = ProfilePage(initialState, action);

    expect(newState.postData[3].message).toBe('it-alekss.com');
  });

  test('after deleted length of messages should be decrementet', () => {
    const action = deletePost(2);

    const newState = ProfilePage(initialState, action);

    expect(newState.postData.length).toBe(2);
  });

  test('after deleted length of messages shouldn\'t be decrementet', () => {
    const action = deletePost(1000000);

    const newState = ProfilePage(initialState, action);

    expect(newState.postData.length).toBe(3);
  });