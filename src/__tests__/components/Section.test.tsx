import Section from '../../components/Section';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components'

const params = {
  label: "testing",
  childText: "Child 1"
}
  
test('Section - Happy Path', async () => {
  render(
    <Section label={params.label} light thin wide center>
      <p>{params.childText}</p>
    </Section>
  )

  expect(screen.getByTestId('Wrapper')).toMatchSnapshot()
  expect(screen.getByTestId('Wrapper').childElementCount).toEqual(2)
  expect(screen.getByTestId('Label')).toHaveTextContent(
    params.label.toUpperCase()
  )
  expect(screen.getByTestId('Children')).toHaveTextContent(
    params.childText
  )
})

test('Section - Unhappy Path', async () => {
  render(
    <Section>
      <p>{params.childText}</p>
    </Section>
  )

  expect(screen.getByTestId('Wrapper')).toMatchSnapshot()
  expect(screen.getByTestId('Wrapper').childElementCount).toEqual(1)
  expect(screen.queryAllByTestId('Label')).toHaveLength(0)
  expect(screen.getByTestId('Children')).toHaveTextContent(
    params.childText
  )
})
