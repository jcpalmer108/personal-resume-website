import docker from '../images/docker.svg'
import airflow from '../images/airflow.svg'
import aws from '../images/aws.svg'
import azure from '../images/azure.svg'
import kubernetes from '../images/kubernetes.svg'
import mui from '../images/mui.svg'
import node from '../images/node.svg'
import react from '../images/react.svg'
import vue from '../images/vue.svg'

export default {
  about: {
    key: 'about',
    label: 'About Me',
    title: 'Who am I?',
    description: [
      {
        key: 'paragraph-1',
        value:
          'Magna voluptate Lorem adipisicing esse culpa Lorem elit occaecat officia exercitation dolor excepteur esse aliquip. Anim velit nisi laboris in reprehenderit excepteur officia Lorem dolore. Labore aliqua aliquip amet laboris dolor adipisicing ea tempor minim magna est.'
      },
      {
        key: 'paragraph-2',
        value:
          'Magna voluptate Lorem adipisicing esse culpa Lorem elit occaecat officia exercitation dolor excepteur esse aliquip. Anim velit nisi laboris in reprehenderit excepteur officia Lorem dolore.'
      }
    ],
    action: {
      text: 'Start a Project',
      other: 'What are you waiting for?'
    },
    education: [
      {
        key: 'webster-university',
        school: 'Webster University',
        degree: 'Bachelors of Science in Computer Science',
        year: {
          start: '2014',
          end: '2017'
        }
      },
      {
        key: 'harvard-university',
        school: 'Harvard University',
        degree: 'Bachelors of Smartiness in Computer Science',
        year: {
          start: '2023',
          end: '2025'
        }
      }
    ]
  },
  skills: {
    key: 'skills',
    label: 'my skills',
    title: 'Here are my skills & frameworks',
    description:
      'Magna voluptate Lorem adipisicing esse culpa Lorem elit occaecat officia exercitation dolor excepteur esse aliquip. Anim velit nisi laboris in reprehenderit excepteur officia Lorem dolore.',
    action: {
      text: "Let's talk"
    },
    frameworks: [
      {
        key: 'docker',
        label: 'Docker',
        url: 'https://www.docker.com/',
        img: docker
      },
      {
        key: 'airflow',
        label: 'Apache Airflow',
        url: 'https://airflow.apache.org/',
        img: airflow
      },
      {
        key: 'aws',
        label: 'Amazon Web Services',
        url: 'https://aws.amazon.com/',
        img: aws
      },
      {
        key: 'azure',
        label: 'Microsoft Azure',
        url: 'https://azure.microsoft.com/',
        img: azure
      },
      {
        key: 'kubernetes',
        label: 'Kubernetes',
        url: 'https://kubernetes.io/',
        img: kubernetes
      },
      {
        key: 'mui',
        label: 'Material UI',
        url: 'https://mui.com/',
        img: mui
      },
      {
        key: 'node',
        label: 'Node.js',
        url: 'https://nodejs.org/en/about/resources/',
        img: node
      },
      {
        key: 'react',
        label: 'React.js',
        url: 'https://reactjs.org/',
        img: react
      },
      {
        key: 'vue',
        label: 'Vue.js',
        url: 'https://vuejs.org/',
        img: vue
      }
    ]
  },
  testimonials: {
    key: 'testimonials',
    label: 'testimonials',
    other: {
      testimonials: [
        {
          quote:
            'Super fast delivery, reviews without any problem, very professional and always online. What do you need more? Simply perfect service! For sure we will work together also in future!!',
          name: 'Marchel Jain',
          relationship: 'Founder of Octalex'
        },
        {
          quote:
            'Super fast delivery, reviews without any problem, very professional and always online. What do you need more? Simply perfect service! For sure we will work together also in future!!',
          name: 'Jon Krasinski',
          relationship: 'Co-worker, Slalom St. Louis'
        },
        {
          quote:
            'Super fast delivery, reviews without any problem, very professional and always online. What do you need more? Simply perfect service! For sure we will work together also in future!!',
          name: 'Anita Parr',
          relationship: 'Manager, Nike WHQ'
        }
      ]
    }
  },
  experience: {
    key: 'experience',
    label: 'Experience',
    title: 'Checkout my work experience',
    description:
      'Magna voluptate Lorem adipisicing esse culpa Lorem elit occaecat officia exercitation dolor excepteur esse aliquip. Anim velit nisi laboris in reprehenderit excepteur officia Lorem dolore. Labore aliqua aliquip amet laboris dolor adipisicing ea tempor minim magna est.\nMagna voluptate Lorem adipisicing esse culpa Lorem elit occaecat officia exercitation dolor excepteur esse aliquip. Anim velit nisi laboris in reprehenderit excepteur officia Lorem dolore.',
    experience: [
      {
        jobTitle: 'Senior Software Engineer',
        company: 'Alaska Airlines',
        location: 'Seattle, WA',
        description:
          'Magna voluptate Lorem adipisicing esse culpa Lorem elit occaecat officia exercitation dolor excepteur esse aliquip. Anim velit nisi laboris in reprehenderit excepteur officia Lorem dolore.',
        year: {
          start: 'Current',
          end: '2022'
        }
      },
      {
        jobTitle: 'Mid-Level Software Engineer',
        company: 'Nike WHQ',
        location: 'Portland, OR',
        description:
          'Magna voluptate Lorem adipisicing esse culpa Lorem elit occaecat officia exercitation dolor excepteur esse aliquip. Anim velit nisi laboris in reprehenderit excepteur officia Lorem dolore.',
        year: {
          start: '2020',
          end: '2022'
        }
      },
      {
        jobTitle: 'Mid-Level Software Engineer',
        company: 'Slalom Consulting LLC',
        location: 'Portland, OR',
        description:
          'Magna voluptate Lorem adipisicing esse culpa Lorem elit occaecat officia exercitation dolor excepteur esse aliquip. Anim velit nisi laboris in reprehenderit excepteur officia Lorem dolore.',
        year: {
          start: 'Feb 2020',
          end: 'Jun 2020'
        }
      },
      {
        jobTitle: 'Mid-Level Software Engineer',
        company: 'Nike WHQ',
        location: 'Portland, OR',
        description:
          'Magna voluptate Lorem adipisicing esse culpa Lorem elit occaecat officia exercitation dolor excepteur esse aliquip. Anim velit nisi laboris in reprehenderit excepteur officia Lorem dolore.',
        year: {
          start: '2019',
          end: '2020'
        }
      },
      {
        jobTitle: 'Junior Software Engineer',
        company: 'Slalom Consulting LLC',
        location: 'Portland, OR',
        description:
          'Magna voluptate Lorem adipisicing esse culpa Lorem elit occaecat officia exercitation dolor excepteur esse aliquip. Anim velit nisi laboris in reprehenderit excepteur officia Lorem dolore.',
        year: {
          start: '2018',
          end: '2019'
        }
      }
    ]
  },
  contact: {
    key: 'contact',
    label: 'Contact Me',
    title: "Let's Contact with me",
    description:
      'Deserunt ut minim amet mollit sint enim. Veniam consectetur ad laborum non laborum proident. Elit non sit sint veniam deserunt aliqua. Labore incididunt eiusmod est quis occaeca.',
    form: [
      {
        key: 'name',
        value: 'Name'
      },
      {
        key: 'email',
        value: 'Email'
      },
      {
        key: 'phone',
        value: 'Phone No.'
      },
      {
        key: 'message',
        value: 'Message'
      },
      {
        key: 'submit',
        value: 'Submit'
      }
    ]
  }
}
