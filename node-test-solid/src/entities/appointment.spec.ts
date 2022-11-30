import { expect, test } from 'vitest'
import { Appointment } from './appointment'

test('create an appointment', () => {
    const startsAt = new Date()
    const endsAt = new Date()

    endsAt.setDate(endsAt.getDate() + 1)

    const appointment = new Appointment({
        customer: 'Jhon Doe',
        startsAt,
        endsAt
    })
    // Esperado que o appointment seja uma instancia de Appointment
    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer).toEqual('Jhon Doe')
})

test('cannot create an appointment with end date before start date', () => {
    const startsAt = new Date()
    const endsAt = new Date()

    endsAt.setDate(endsAt.getDate() - 1)

    expect(() => {
        return new Appointment({
            customer: 'Jhon Doe',
            startsAt,
            endsAt
        })
    }).toThrow()

})