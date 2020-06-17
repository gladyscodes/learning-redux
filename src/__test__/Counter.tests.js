import React from 'react';
import Counter from '../Counter';
import { renderWithProvider } from '../jest/utils';
import { fireEvent } from '@testing-library/react';


describe("Counter component", () => {
  it("should render", () => {
    const { getByRole } = renderWithProvider(<Counter/>);
    expect(getByRole("heading")).toBeInTheDocument();
  });

  it("should increment count", () => {
    const { getByRole } = renderWithProvider(<Counter/>);
    const increment  = getByRole("button", { name: "+"});
    fireEvent.click(increment);
    expect(getByRole("heading", {name: 1})).toBeInTheDocument();
  });

  it("should decrement count", () => {
    const { getByRole, debug } = renderWithProvider(<Counter/>);
    const decrement  = getByRole("button", { name: "-"});
    fireEvent.click(decrement);
    debug();
    expect(getByRole("heading", {name: "-1"})).toBeInTheDocument();
  })



});