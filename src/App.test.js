import React from "react";
import ReactDOM from "react-dom/client";
import SamurajJSApp from "./App";

jest.mock('axios', () => ({
    create: jest.fn(() => ({
      get: jest.fn(() => Promise.resolve({ data: {} })),
      post: jest.fn(() => Promise.resolve({ data: {} })),
      put: jest.fn(() => Promise.resolve({ data: {} })),
      delete: jest.fn(() => Promise.resolve({ data: {} })),
    })),
  }));

  test('renders without crashing', () => {
      const div = document.createElement('div');
      const root = ReactDOM.createRoot(div);
      root.render(<SamurajJSApp />);
      root.unmount(); // вместо unmountComponentAtNode
  });
  