import { render, screen } from '@testing-library/react';
import 'jest-styled-components'
import Skills from '../../components/Skills';
import Button from "../../components/Button";

jest.mock('../../components/Button')

const params = {
  key: "about",
  label: "Skills",
  inMenu: true,
  title: "test title",
  description: [
    "test contents 1",
    "test contents 2"
  ],
  subSection: {
    skills: [
      {
        key: "testskill1",
        label: "Test Skill 1",
        url: "https://test.skill.one/"
      },
      {
        key: "testskill2",
        label: "Test Skill 2",
        url: "https://test.skill.two/"
      },
    ]
  }
}

describe('Skills', () => {
  test('renders if only required params are passed in', () => {
    render(
      <Skills content={params} />
    )
  
    expect(screen.getByTestId('Skills')).toMatchSnapshot()
    expect(screen.getByTestId('Title')).toHaveTextContent(params.title)

    params.description.forEach((item, index) => {
      expect(screen.getByTestId(`Description ${index + 1}`)).toHaveTextContent(item)
    })

    expect(screen.getAllByTestId('Tiles')).toHaveLength(9)
    expect(screen.getByTestId('Row 1').childNodes).toHaveLength(3)
    expect(screen.getByTestId('Row 2').childNodes).toHaveLength(5)
    expect(screen.getByTestId('Row 3').childNodes).toHaveLength(3)
    expect(Button).toHaveBeenCalled()

    params.subSection.skills.forEach((item, index) => {
      expect(screen.getByRole('link', { name: item.label })).toBeTruthy()
      expect(screen.getByRole('img', { name: item.label })).toHaveAttribute('href', item.url)
      expect(screen.getByRole('img', { name: item.label })).toHaveAttribute('alt', item.label)

    })

    expect(screen.getByTestId('Marquee')).toBeTruthy()
  })
})
