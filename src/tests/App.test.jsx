import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App Component", () => {
  it("Renders magnificent monkeys", () => {
    const { container } = render(<App></App>);
    expect(container).toMatchSnapshot();
  });

  it("Renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<App></App>);
    const button = screen.getByRole("button", { name: "Click me" });
    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
