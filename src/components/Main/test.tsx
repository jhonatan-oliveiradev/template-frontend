import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    //render component
    const { container } = render(<Main />)

    // search the element and verify if it exists
    expect(
      screen.getByRole('heading', { name: /react main/i })
    ).toBeInTheDocument()

    //generate snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
