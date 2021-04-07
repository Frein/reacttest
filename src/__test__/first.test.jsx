import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with or without a name", () => {
    act(() => {
        render(<App />, container);
    });
    expect(container.textContent).toContain("stranger");

    act(() => {
        render(<App name="Jenny" />, container);
    });
    expect(container.textContent).toContain("Jenny");

    act(() => {
        render(<App name="Margaret" />, container);
    });
    expect(container.textContent).toContain("Margaret");
});