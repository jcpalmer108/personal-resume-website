<p align="center">
  <img align="center" height="100" src="./src/assets/images/logos/jennapalmer-dark.svg">
</p>
<div align="center">
  <h2>Resume Website</h2>
  <p>
    This Personal Resume Website is a project created in July 2022 in order to illustrate my full-stack development skills surrounding Web Application Development and Design in a React.js environment. 
  </p>
</div>

[![Netlify Status](https://api.netlify.com/api/v1/badges/7470b2e5-1575-4f15-b0d1-4686d7da4830/deploy-status)](https://app.netlify.com/sites/jenna-palmer/deploys)

<br>
<a name="table-of-contents"></a>

# Table of Contents

- [Background](#background)<br>
- [Tech Stack](#techstack)<br>
- [Feature List](#features)<br>
  - [Mobile & Desktop Friendly Navbar](#responsive-navbar)<br>
  - [Multiple Calls to Action](#calls-to-action)<br>
  - [Marquee to Mosaic](#marquee)<br>
  - [Rotating Testimonial Carosel](#carosel)<br>
  - [Dynamically Created Components](#dynamically-created-components)<br>
  - [Modal for Further Information](#modal)<br>
  - [Email Sends on Form Submit](#email-on-submit)<br>
- [Running the App](#running-the-app)<br>
  - [Branch environments](#environments)<br>
  - [Steps to install](#install-the-app)<br>
  - [Steps to run tests](#test-the-app)<br>
  - [Steps to Deploy](#deploying-the-app)<br>
- [Future Features](#futurefeatures)<br>
- [Screenshots](#screenshots)<br>
- [Need to Contact Me?](#contact)<br>
- [Credits](#credits)<br>

<a name="background"></a>

# Background

Back in 2018, when I first moved to the West Coast, I was informed by a recruiter I was working with that having a Resume Website on-hand and live could be a crucial piece to my job-hunt journey in that new world.

While heeding her advice, I discovered that I had no free time to dedicate building a website front-to-back so I ended up whipping up a quick web page in the popular CMS, Squarespace. This website served its purpose for what I needed at the time, however I have been looking to replace it with something custom since first going-live on my domain "www.jennapalmer.info".

That is where this project steps in. I'm creating this project utilizing much of what I've learned over these last 5 years, working as a Full-Stack Software Engineer on several high-profile clients. I hope that upon its completion, this website will be a shining example of what I am personally capable of, and how I would go about solving complicated problems with well-rounded solutions.

<p align=right><a href="#table-of-contents">...Back to Top</a></p>

<a name="techstack"></a>

# Tech Stack

This project was written using the following tech stack:

- React.js (Functional Components)
- Styled Components
- Typescript

Additional testing tech that was also included is:

- Jest
- React Testing Library
- Cypress

Regarding deployment: this application is hosted and deployed via pipelines within the Github environment. The domain itself is hosted on GoDaddy.

<p align=right><a href="#table-of-contents">...Back to Top</a></p>

<a name="features"></a>

# Feature List

This project features the following features:

<a name="responsive-navbar"></a>

## Mobile & Desktop Friendly Navbar

Renders as a hamburger menu on mobile, and when expanded wide enough, removes the hamburger and displays a list of available menu pages.

![Desktop & Mobile Friendly Navbar](./src/assets/images/readme/navbar-example.png)

<a name="calls-to-action"></a>

## Multiple Calls to Action

There are several buttons throughout the website that link to the 'Contact' section in order to streamline getting the user in contact with the author.

![Multiple Calls to Action](./src/assets/images/readme/calls-to-action.png)

<a name="marquee"></a>

## Marquee to Mosaic

The mobile version of the Skills Section shows several of the skills tiles rotating on a marquee. The desktop version completely removes this marquee, and instead renders a mosaic of tiles that stay squares when resizing the page width.

![Marquee to Mosaic](./src/assets/images/readme/marquee-to-mosaic.gif)

<a name="carosel"></a>

## Rotating Testimonial Carousel

The Testimonial page has a carosel of testimonials that automatically scrolls through each of the available quotes every 10 seconds.

![Testimonials Carousel](./src/assets/images/readme/testimonials-carousel.gif)

<a name="dynamically-created-components"></a>

## Dynamically Created Components

Several sections illustrate the utilization of dynamically rendered components, however the Work History section is the bext example of them all. All job history is stored in an array of objects, and this array is used to dynamically create each job listing.

This means, that the modals created for each Job are also dynamically rendered.

![Dynamically Created Components](./src/assets/images/readme/dynamic-components.png)

<a name="modal"></a>

## Modal for Further Information

Users who want more information on a specific piece of job history, can click on the trigger "READ MORE" and see a modal filled with extended information surrounding the author's participation in that role.

![Modal for Further Information](./src/assets/images/readme/modals-example.gif)

<a name="email-on-submit"></a>

## Email Opens Drafted Email

In the Contact section there is a form, and this form actively sends the author an email with the added information.

<!-- ![Test Pic](./src/assets/images/test-readme-pic.png?raw=true "Test Pic") -->

<p align=right><a href="#table-of-contents">...Back to Top</a></p>

<a name="futurefeatures"></a>

# Future Features

These are features that may be developed one day, but are not currently under development:

## Database and API for Content

I would like to create an online database that I am able to automatically update with any updates, changes, or removals from my resume information. I would like my website to pull its data from this database, so that upon a successful API call the website is updated accordingly.

## Resume Generator (for Personal Use)

Given that I have all of my website content provided on a single file, I would love to create a terminal form that allows me to custom generate a Resume given varying requirements. This would assist me during future interviews because it would allow me to possibly cater my resume to fit what the team needs at that time. (This could also be a cover letter generator!)

## Resume Generator (for Website)

If I already have the logic to generate a resume, might as well add a "Download my Resume HERE" button to the website. This would download the most generic version of my resume.

<p align=right><a href="#table-of-contents">...Back to Top</a></p>

<a name="running-the-app"></a>

# Running the Application

This section outlines what you would need to do in order to pull, and run, this React-based application.

<a name="environments"></a>

## Branch environments

COMING SOON

<a name="install-the-app"></a>

## Steps to install

Ensure you have the latest version of `npm` and `node` installed onto your machine before running the following commands.

1. Clone this repo to your local machine.
2. Install dependencies: `npm i`
3. Launch application: `npm start`

<a name="test-the-app"></a>

## Steps to run tests

Ensure you have your project properly installed and able to be run before running the following commands.

- Unit and Integration Tests: `npm test`
- End-to-End Tests: `npm run test:e2e`

<a name="deploying-the-app"></a>

## Steps to Deploy

To deploy to Netlify, you simply have to merge your new branch into main. Any new commits in the Github will result in a new deployment on Netlify. Because of this, be sure to create feature branches rather than pushing straight to main.

<p align=right><a href="#table-of-contents">...Back to Top</a></p>

<a name="screenshots"></a>

# Application Screenshots

![Landing](./src/assets/images/readme/landing.png)

![About](./src/assets/images/readme/about.png)

![Skills](./src/assets/images/readme/skills.png)

![Skills Modal](./src/assets/images/readme/skills-modal.png)

![Testimonials](./src/assets/images/readme/testimonials.png)

![Experience](./src/assets/images/readme/experience.png)

![Experience Modal](./src/assets/images/readme/experience-modal.png)

![Contact](./src/assets/images/readme/contact.png)

![Footer](./src/assets/images/readme/footer.png)

<p align=right><a href="#table-of-contents">...Back to Top</a></p>

<a name="contact"></a>

# Need to Contact Me?

If you have any comments, questions, or concerns regarding this project, feel free to reach out to me via the information below:

**Jenna Palmer** <br>
jcpalmer108@gmail.com<br>
[www.jennapalmer.info](https://www.jennapalmer.info)<br>

I'd love to hear any suggestions or feedback you may have too! Thanks for visiting my Github.

<p align=right><a href="#table-of-contents">...Back to Top</a></p>

<a name="credits"></a>

# Credits

I'd like to credit my designer [hardikgonyada](https://www.fiverr.com/hardikgondhiya) for creating wonderful mocks for me. I found them via Fiverr, the platform for freelance artists, and would highly recommend Hardik's work to anyone looking for design on a tech-based product.

I would also like to credit the following open-source projects I am utilizing in this application:

- [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee)
- [React Spring](https://react-spring.dev/)
- [Docx](https://https://docx.js.org/#/)


<p align=right><a href="#table-of-contents">...Back to Top</a></p>
