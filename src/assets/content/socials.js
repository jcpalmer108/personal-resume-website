import github from '../images/github.svg'
import leetcode from '../images/leetcode.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import email from '../images/email.svg'

export default {
  action: 'Connect with me',
  links: [
    {
      key: 'github',
      label: 'Github',
      url: 'https://www.github.com/jcpalmer108',
      img: github
    },
    {
      key: 'leetcode',
      label: 'Leetcode',
      url: 'https://leetcode.com/darthToaster/',
      img: leetcode
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jenna-palmer/',
      img: linkedin
    },
    {
      key: 'twitter',
      label: 'Twitter',
      url: 'https://twitter.com/jpalmerproject',
      img: twitter
    },
    {
      key: 'email',
      label: 'Email',
      url: 'mailto:jenna@jennapalmer.info',
      img: email
    }
  ]
}
