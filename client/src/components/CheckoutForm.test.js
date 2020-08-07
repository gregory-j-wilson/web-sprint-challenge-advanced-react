import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm />)

    const header = screen.getByText(/checkout form/i)

    expect(header).toBeInTheDocument()

});



test("form shows success message on submit with form details", () => {

    render(<CheckoutForm />)

    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)

    fireEvent.change(firstName, { target: { value: 'Greg' }})
    fireEvent.change(lastName, { target: { value: 'Wilson' }})
    fireEvent.change(address, { target: { value: '1215 N Meridian Ave' }})
    fireEvent.change(city, { target: { value: 'Wichita' }})
    fireEvent.change(state, { target: { value: 'KS' }})
    fireEvent.change(zip, { target: { value: '67203' }})


    const submitButton = screen.getByRole('button', { name: /checkout/i })

    fireEvent.click(submitButton)


    expect(screen.getByText(/you have ordered some plants/i))


});
