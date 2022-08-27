import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {fireEvent, render} from '@testing-library/react'
import FormBlog from './FormBlog'

test('<FormBlog/> updates parent state and calls onSubmit',()=>{
    const createBlog=jest.fn()

    const component=render(<FormBlog createBlog={createBlog}/>)

    const input =component.container.querySelector('input')
    const form = component.container.querySelector('form')

    fireEvent.change(input,{
        target:{value:'React frontend'}
    })
    fireEvent.submit(form)

    expect(createBlog.mock.calls).toHaveLength(1)
    expect(createBlog.mock.calls[0][0].title).toBe('React frontend')
})