import { render,screen,fireEvent } from "@testing-library/react"
import Login from "./Login"


test("check username input is there",()=>{
    render(<Login/>);
    const userInput = screen.getByPlaceholderText("UserName");
    expect(userInput).toBeInTheDocument();
});

test("check password input is there",()=>{
    render(<Login/>);
    const passInput = screen.queryByRole('textbox', { type: 'email' });
    expect(passInput).toBeInTheDocument();
})

test("check for submit button",()=>{
    render(<Login/>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

test("check input username should be empty at first",()=>{
    render(<Login/>);
    const userInput = screen.getByPlaceholderText("UserName");
    // console.log(userInput);
    expect(userInput.value).toBe("");
})

test("check input should be empty for password at first",()=>{
    render(<Login/>);
    const userInput = screen.getByPlaceholderText("Password");
    // console.log(userInput);
    expect(userInput.value).toBe("");
})

test("Button should be disabled when there is no data",()=>{
    render(<Login/>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
})

test("Check for correct data received for userName",()=>{
    render(<Login/>);
    const userInput = screen.getByPlaceholderText(/username/i);
    fireEvent.change(userInput, { target: { value: '🐙' } })


})