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
  completeContent: [
    {
      key: "one",
      label: "One",
      category: "frontend",
      url: "www.google.com",
      subtitle: "this is a subtitle one"
    },
    {
      key: "two",
      label: "Two",
      category: "backend",
      url: "www.amazon.com",
      subtitle: "this is a subtitle two"
    }
  ],
  incompleteContent: [
    {
      key: "one",
      label: "One",
      category: "frontend",
    },
    {
      key: "two",
      label: "Two",
      category: "backend",
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

/*

TODO: 
- optional and required
- only required

-write Experience Modal test

- update all tests to include mocks of imported components

-extract all types to type file


*/

describe('SkillsModal', () => {
  test('renders if required and optional params are passed in', () => {
    render(
      <SkillsModal closeModal={jest.fn()} content={params.completeContent} categories={params.categories} />
    )
  
  })
})
