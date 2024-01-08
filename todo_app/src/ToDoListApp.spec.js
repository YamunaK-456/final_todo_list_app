import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import ToDoApp from "./Components/ToDoListApp";

describe("ToDOAPP",()=>{
    it("Should display header and todoApp",()=>{
        const app=render(< ToDoApp />);
        const header = screen.getByTestId("header");
        expect(header).not.toBe(null);
        const data= screen.getByTestId("ToDoList");
        expect(data).toBeDefined();

    });
    it("Should have class notCompleted not marked task",()=>{
        const app=render(<ToDoApp/>);
        const element = screen.getByText("Read SpringBoot");
        expect(element).toHaveClass("notCompleted");
    })
    it("Should have class completed for marked task",()=>{
        const app=render(<ToDoApp/>);
        const element = screen.getByText("Read SpringBoot");
        expect(element).toHaveClass("notCompleted");
        fireEvent.click(element);
        expect(element).toHaveClass("completed");

    })
    it("should remove all completed tasks",()=>{
        const app=render(<ToDoApp/>);
        const element = screen.getByText("Read SpringBoot");
        expect(element).toHaveClass("notCompleted");
        fireEvent.click(element);
        fireEvent.click(screen.getByRole('button'));
        expect(screen.queryByText("Read SpringBoot")).toBeNull();
    })
    

})