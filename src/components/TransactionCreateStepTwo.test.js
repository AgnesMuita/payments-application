import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { act } from 'react-dom/test-utils';


import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

// //for unit testing
// test('on initial render, the pay button is disabled',async()=>{

//     render(<TransactionCreateStepTwo sender={{id:"5"}} receiver={{id:"5"}}/>)
//     expect(await screen.findByRole('button',{name:/pay/i})).toBeDisabled()

// })

test('if amount and note is entered, the pay button is enabled',async()=>{

    render(<TransactionCreateStepTwo sender={{id:"5"}} receiver={{id:"5"}}/>)
    //added here for integration test
    expect(await screen.findByRole('button',{name:/pay/i})).toBeDisabled()

    userEvent.type(screen.getByPlaceholderText(/amount/i), "50")
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner")

    expect(await screen.findByRole('button',{name:/pay/i})).toBeEnabled()
})