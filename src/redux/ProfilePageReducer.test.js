import React from "react";
import ProfilePage from "./ProfilePageReducer";
import { addPostActionCreator } from "./ProfilePageReducer";

test('new post should be added', () => {
  let action = addPostActionCreator('it-alekss.com')
let initialState = {
  postData: [ 
       { id: 1, message: "Hi, how are you", likescount: 12 }
    ]
}
  let NewState = ProfilePage(initialState, action)

  expect(NewState.postData.length).toBe(2)
});