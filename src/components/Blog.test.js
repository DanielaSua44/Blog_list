import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render,fireEvent,screen} from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'

test('render content',() => {
    const blog={
        title:'test-react',
        author:'React',
        url:'http://react.org.com',
        likes:22
    }

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<Blog blog={blog} />)

    expect(component.container).toHaveTextContent('test-react','React')

})

test('should show author',() =>{
     const blog={
        title:'test-react',
        author:'React'
    }

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component=render(<Blog blog={blog}/>)

    // eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
    const div = component.container.querySelector('.card-title')

    expect(div).toHaveTextContent('test-react')

})

test('cuando presiono el boton view aparecen el contenido de url y likes',()=>{
   const blog={
        title:'test-react',
        author:'React'
    }

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component=render(<Blog blog={blog}/>)
  // eslint-disable-next-line no-undef, testing-library/no-container, testing-library/prefer-screen-queries
  const button = component.getByText('view')
  fireEvent.click(button)

})

test('clicking the button calls event handler twoo',()=>{
 const blog={
        title:'test-react',
        author:'React'
    }

    const mockHandler=jest.fn()
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component=render(<Blog blog={blog} handleLike={mockHandler}/>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const boton=component.getByText('like')
  fireEvent.click(boton)
  fireEvent.click(boton)

  expect(mockHandler.mock.calls).toHaveLength(2)

})