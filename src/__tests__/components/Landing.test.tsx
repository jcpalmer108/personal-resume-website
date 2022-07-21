import { render, screen } from '@testing-library/react';
import 'jest-styled-components'
import Landing from '../../components/Landing';
import Button from '../../components/Button';

jest.mock('../../components/Button')

const params = {
  key: "landing",
  label: "Landing",
  inMenu: false,
  title: "test title",
  action: {
    text: "test action",
    link: "#contact"
  },
  image: "pexels-ekaterina-bolovtsova-4049791.jpg",
  description: "test contents"
}

describe('Landing', () => {
  test('renders if only required params are passed in', () => {
    render(
      <Landing content={params} />
    )
  
    expect(screen.getByTestId('Main')).toMatchSnapshot()
    expect(screen.getByTestId('Main')).toHaveTextContent(params.title)
    expect(screen.getByTestId('Main')).toHaveTextContent(params.description)
    expect(Button).toHaveBeenCalledTimes(1)
    expect(Button).toHaveBeenCalledWith({
      label: params.action.text,
      url: params.action.link
    }, {})
    expect(screen.getByRole('img', { name: 'landing mobile'})).toBeTruthy()
    expect(screen.getByRole('img', { name: 'landing mobile'})).toHaveAttribute('src', params.image)
    expect(screen.queryByRole('img', { name: 'landing desktop'})).toBeFalsy()
    expect(screen.getByTestId('DiscoverMore')).toMatchSnapshot()
    expect(screen.queryByRole('img', { name: 'scroll'})).toBeFalsy()
  })
})
