import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BetForm from "../BetForm";

describe("BetForm Component", () => {
  test("renders the UI elements correctly", () => {
    render(<BetForm />);

    // Check heading
    expect(
      screen.getByRole("heading", { name: /place a bet/i })
    ).toBeInTheDocument();

    // Dropdown
    expect(screen.getByLabelText(/select a bet/i)).toBeInTheDocument();

    // Over/Under buttons
    expect(screen.getByText("Over")).toBeInTheDocument();
    expect(screen.getByText("Under")).toBeInTheDocument();

    // Place Bet button
    expect(screen.getByRole("button", { name: /place bet/i })).toBeDisabled();
  });

  test("enables 'Place Bet' button once a bet and side are chosen", () => {
    render(<BetForm />);

    // Initially "Place Bet" should be disabled
    const placeBetButton = screen.getByRole("button", { name: /place bet/i });
    expect(placeBetButton).toBeDisabled();

    // Select a bet from the dropdown
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "bet1" } });
    // Still no side chosen, so button is disabled
    expect(placeBetButton).toBeDisabled();

    // Click "Over"
    const overButton = screen.getByText("Over");
    fireEvent.click(overButton);

    // Now bet is chosen + side is chosen => button should be enabled
    expect(placeBetButton).not.toBeDisabled();

    fireEvent.click(placeBetButton);
  });

  test("switches bet side if 'Under' is clicked after choosing 'Over'", () => {
    render(<BetForm />);

    // Choose "bet2"
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "bet2" },
    });

    // Click "Over"
    fireEvent.click(screen.getByText("Over"));
    const placeBetBtn = screen.getByRole("button", { name: /place bet/i });
    expect(placeBetBtn).not.toBeDisabled();

    // Now click "Under"
    fireEvent.click(screen.getByText("Under"));
    // Button remains enabled
    expect(placeBetBtn).not.toBeDisabled();
  });
});
