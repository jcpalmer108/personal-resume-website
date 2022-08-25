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
    skills: {
      categories: [
        {
          key: 'frontend',
          label: 'Frontend'
        },
        {
          key: 'backend',
          label: 'Backend'
        }
      ],
      data: [
        {
          key: "test",
          label: "Test Skill 1",
          url: "https://test.skill.one/",
          category: "frontend"
        },
        {
          key: "test",
          label: "Test Skill 2",
          url: "https://test.skill.two/",
          category: "frontend"
        },
        {
          key: "test",
          label: "Test Skill 3",
          url: "https://test.skill.three/",
          category: "frontend"
        },
        {
          key: "test",
          label: "Test Skill 4",
          url: "https://test.skill.four/",
          category: "frontend"
        },
        {
          key: "test",
          label: "Test Skill 5",
          url: "https://test.skill.five/",
          category: "backend"
        },
        {
          key: "test",
          label: "Test Skill 6",
          url: "https://test.skill.six/",
          category: "backend"
        },
        {
          key: "test",
          label: "Test Skill 7",
          url: "https://test.skill.seven/",
          category: "backend"
        },
        {
          key: "test",
          label: "Test Skill 8",
          url: "https://test.skill.eight/",
          category: "backend"
        },
        {
          key: "test",
          label: "Test Skill 9",
          url: "https://test.skill.nine/",
          category: "backend"
        }
      ]
    }
  }
}

describe('Skills', () => {
  test('renders if only required params are passed in', () => {
    render(
      <Skills content={params} />
    )
  
    expect(screen.getByTestId('Mobile')).toMatchSnapshot()
    expect(screen.getByTestId('NotMobile')).toMatchSnapshot()
    screen.getAllByTestId('Title').forEach((title) => {
      expect(title).toHaveTextContent(params.title)
    })
    screen.getAllByTestId('Description').forEach((desc) => {
      expect(desc).toHaveTextContent(params.description[0])
    })


    expect(screen.getAllByTestId('Tile')).toHaveLength(9)
    expect(screen.getByTestId('Row 1').childNodes).toHaveLength(3)
    expect(screen.getByTestId('Row 2').childNodes).toHaveLength(5)
    expect(screen.getByTestId('Row 3').childNodes).toHaveLength(3)
    expect(Button).toHaveBeenCalled()

    for(let i = 0; i < 9; i++) {
      const item = params.subSection.skills.data[i]
      expect(screen.getAllByRole('link', { name: item.label })).toHaveLength(2)
      screen.getAllByRole('link', { name: item.label }).forEach(link => {
        expect(link).toHaveAttribute('href', item.url)
      })
      screen.getAllByRole('img', { name: item.label }).forEach(image => {
        expect(image).toHaveAttribute('alt', item.label)
      })
    }
  })
  
  // test('does not render if less than 9 skills are entered', () => {
  //   const lessThan9Skills = {
  //     key: "about",
  //     label: "Skills",
  //     inMenu: true,
  //     title: "test title",
  //     description: [
  //       "test contents 1",
  //       "test contents 2"
  //     ],
  //     subSection: {
  //       skills: [
  //         {
  //           key: "github",
  //           label: "Test Skill 1",
  //           url: "https://test.skill.one/"
  //         },
  //         {
  //           key: "github",
  //           label: "Test Skill 2",
  //           url: "https://test.skill.two/"
  //         }
  //       ]
  //     }
  //   }

  //   render(<Skills content={lessThan9Skills} />)
  //   expect(screen.queryAllByTestId('Mobile')).toHaveLength(0)
  //   expect(screen.queryAllByTestId('NotMobile')).toHaveLength(0)
  // })
})
