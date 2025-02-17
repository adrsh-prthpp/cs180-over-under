import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BetCard from "../BetCard";

describe("BetCard Component", () => {
  it("renders bet name, Over/Under counts, and expiry time", () => {
    const mockNow = 100000; 
    jest.spyOn(Date, "now").mockImplementation(() => mockNow);

    render(
      <BetCard
        name="Test Bet"
        expiry={120000}
        overCount={2}
        underCount={3}
      />
    );

    // Check bet name
    expect(screen.getByText("Test Bet")).toBeInTheDocument();

    // Check Over/Under counts
    expect(screen.getByText(/Over \(2\)/)).toBeInTheDocument();
    expect(screen.getByText(/Under \(3\)/)).toBeInTheDocument();

    // Check expiry text
    expect(screen.getByText("Expires in: 20s")).toBeInTheDocument();

    // Restore original Date.now
    jest.restoreAllMocks();
  });

  it("renders without expiry time if none is provided", () => {
    render(
      <BetCard
        name="Bet Without Expiry"
        overCount={5}
        underCount={1}
      />
    );

    expect(screen.getByText("Bet Without Expiry")).toBeInTheDocument();
    // Over/Under counts
    expect(screen.getByText("Over (5)")).toBeInTheDocument();
    expect(screen.getByText("Under (1)")).toBeInTheDocument();
    // Should not display "Expires in:"
    expect(screen.queryByText(/Expires in:/)).toBeNull();
  });
});
