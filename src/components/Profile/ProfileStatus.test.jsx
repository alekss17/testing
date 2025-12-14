import React from "react";
import TestRenderer, { act } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile Status Component", () => {
  test("renders profileStatus or placeholder", () => {
    const component = TestRenderer.create(
      <ProfileStatus profileStatus="it-alekss.com" userId={1} meId={1} UpdateProfileStats={() => {}} />
    );
    const tree = component.toJSON();
    const text = tree.children[0].children[0]; // внутри <p>
    expect(text).toBe("it-alekss.com");
  });
     
  test("ater creation span with status shoud be displayed with correct status", () => {
    const component = TestRenderer.create(
      <ProfileStatus profileStatus="it-alekss.com" userId={1} meId={1} UpdateProfileStats={() => {}} />
    );
    const root = component.root;
    const p = root.findByType("p")
    expect(p.children[0]).toBe("it-alekss.com");
  });
  test("ater creation span with status shoud be displayed with correct status", () => {
    const component = TestRenderer.create(
      <ProfileStatus profileStatus="it-alekss.com" userId={1} meId={1} UpdateProfileStats={() => {}} />
    );
    const root = component.root;
    const p = root.findByType("p")
    expect(p.children[0]).toBe("it-alekss.com");
  });
  test("after creation input should NOT be displayed", () => {
    const component = TestRenderer.create(
      <ProfileStatus profileStatus="it-alekss.com" userId={1} meId={1} UpdateProfileStats={() => {}} />
    );
    const root = component.root;
    const inputs = root.findAllByType("input"); // не бросает ошибку, возвращает массив
    expect(inputs.length).toBe(0);
  });

  test("after creation input should NOT be displayed", () => {
    const mockCallback = jest.fn();
  
    let component;
  
    act(() => {
      component = TestRenderer.create(
        <ProfileStatus
          profileStatus="it-alekss.com"
          userId={1}
          meId={1}
          UpdateProfileStats={mockCallback}
        />
      );
    });
  
    const root = component.root;
  
    // включаем edit mode вручную
    const p = root.findByType("p");
  
    act(() => {
      p.props.onDoubleClick(); // включает editMode
    });
  
    const input = root.findByType("input");
  
    act(() => {
      input.props.onBlur(); // вызывает ReActivateEditMode
    });
  
    // проверяем, что UpdateProfileStats вызвался
    expect(mockCallback.mock.calls.length).toBe(1);
  });
  

test("input shoud be displayed in editMode instead of span", () => {
  let component;

  act(() => {
    component = TestRenderer.create(
      <ProfileStatus profileStatus="it-alekss.com" userId={1} meId={1} UpdateProfileStats={() => {}} />
    );
  });

  const root = component.root;
  const p = root.findByType("p");

  act(() => {
    p.props.onDoubleClick();
  });

  const input = root.findByType("input");

  expect(input.props.value).toBe("it-alekss.com");
});

});
 