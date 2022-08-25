import { render, screen } from '@testing-library/react';
import 'jest-styled-components'
import SkillsModal from '../../components/SkillsModal';
import { ModalProps } from "../../types/Modal";

const mockModal = jest.fn();
jest.mock("../../components/Modal", () => ({ closeModal, children }: ModalProps) => {
  mockModal(closeModal, children);
  return <div>{children}</div>;
});

const params = {
  required: [
    {
      key: "test",
      label: "One",
      category: "frontend",
    },
    {
      key: "test",
      label: "Three",
      category: "frontend",
    },
    {
      key: "test",
      label: "Two",
      category: "backend",
    }
  ],
  optional: [
    {
      url: "www.amazon.com",
      subtitle: "this is a subtitle two"
    },
    {
      url: "www.google.com",
      subtitle: "this is a subtitle three"
    },
    {
      url: "www.google.com",
      subtitle: "this is a subtitle one"
    }
  ],
  categories: [
    {
      key: 'frontend',
      label: "Frontend"
    },
    {
      key: 'backend',
      label: "Backend"
    }
  ]
}

describe('SkillsModal', () => {
  test('renders if required and optional params are passed in', () => {
    const completedContent = params.required.map((item, index) => ({ ...item, ...params.optional[index] }))
    render(<SkillsModal closeModal={jest.fn()} content={completedContent} categories={params.categories} />)
    expect(screen.getByTestId('SkillsModal')).toMatchSnapshot()
    expect(screen.getByTestId('SkillsModal').childNodes).toHaveLength(params.required.length)
    expect(screen.getAllByTestId('Subheader')).toHaveLength(params.categories.length)

    for(let i = 0; i < (screen.getByTestId('SkillsModal').childElementCount - 1); i++) {
      const section = screen.getByTestId('SkillsModal').childNodes[i]
      expect(section.childNodes[0]).toHaveTextContent(params.categories[i].label)
      expect(section.childNodes[1].childNodes.length).toBe(params.required.filter((skill) => skill.category === params.categories[i].key).length)
    }
  })

  test('renders if only required params are passed in', () => {
    render(<SkillsModal closeModal={jest.fn()} content={params.required} categories={params.categories} />)
    expect(screen.getByTestId('SkillsModal')).toMatchSnapshot()
    expect(screen.getByTestId('SkillsModal').childNodes).toHaveLength(params.required.length)
    expect(screen.getAllByTestId('Subheader')).toHaveLength(params.categories.length)

    for(let i = 0; i < (screen.getByTestId('SkillsModal').childElementCount - 1); i++) {
      const section = screen.getByTestId('SkillsModal').childNodes[i]
      expect(section.childNodes[0]).toHaveTextContent(params.categories[i].label)
      expect(section.childNodes[1].childNodes.length).toBe(params.required.filter((skill) => skill.category === params.categories[i].key).length)
    }
  })

})
