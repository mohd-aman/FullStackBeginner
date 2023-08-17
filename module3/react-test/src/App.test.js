import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check four list items',()=>{
  render(<App/>);
    const allLi = screen.getAllByRole("listitem");
    // console.log(allLi.length)
    expect(allLi.length).toBe(4);
})

test("check for hello heading",()=>{
  render(<App/>);
  const heading = screen.getByTestId("test_id_1");
  expect(heading).toBeInTheDocument();
})