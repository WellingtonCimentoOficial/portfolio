import { render, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import ContactForm from "./ContactForm"
import { act } from "react"

jest.mock('@emailjs/browser', () => ({
    send: jest.fn().mockResolvedValue({status: 200, text: 'OK'})
}))

beforeEach(() => {
    window.grecaptcha = {
        ready: jest.fn((callback) => callback()),
        render: jest.fn(),
        execute: jest.fn()
    }
})

describe('Contact Form', () => {
    it('Should load recaptcha script', () => {
        render(<ContactForm />)

        const src = 'https://www.google.com/recaptcha/api.js'
        const recaptchaScript = document.querySelector(`script[src="${src}"]`)

        expect(recaptchaScript).toBeInTheDocument()
    })
    
    it('Should render inputs', () => {
        render(<ContactForm />)

        const firstNameInput = screen.getByPlaceholderText("Digite seu primeiro nome")
        const lastNameInput = screen.getByPlaceholderText("Digite seu último nome")
        const emailInput = screen.getByPlaceholderText("Digite seu e-mail")
        const messageInput = screen.getByPlaceholderText("Digite sua mensagem")

        expect(firstNameInput).toBeInTheDocument()
        expect(lastNameInput).toBeInTheDocument()
        expect(emailInput).toBeInTheDocument()
        expect(messageInput).toBeInTheDocument()
    })

    it('Should render button component', () => {
        render(<ContactForm />)

        const button = screen.getByRole('button', {name: 'Enviar'})

        expect(button).toBeInTheDocument()
    })

    it('Should open loading component', async () => {
        render(<ContactForm />)

        const firstNameInput = screen.getByPlaceholderText("Digite seu primeiro nome")
        const lastNameInput = screen.getByPlaceholderText("Digite seu último nome")
        const emailInput = screen.getByPlaceholderText("Digite seu e-mail")
        const messageInput = screen.getByPlaceholderText("Digite sua mensagem")

        const firstName = "Wellington"
        const lastName = "Cimento"
        const email = "email@email.com"
        const message = "Minha mensagem para você"

        await act(async () => {
            await userEvent.type(firstNameInput, firstName)
            await userEvent.type(lastNameInput, lastName)
            await userEvent.type(emailInput, email)
            await userEvent.type(messageInput, message)
        })

        expect(firstNameInput).toHaveValue(firstName)
        expect(lastNameInput).toHaveValue(lastName)
        expect(emailInput).toHaveValue(email)
        expect(messageInput).toHaveValue(message)

        const submitButton = screen.getByRole('button', {name: "Enviar"})

        await userEvent.click(submitButton)

        const toastMessage = screen.queryByText("Mensagem enviada")
        expect(toastMessage).toBeInTheDocument()
    })
})