# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![Screenshot 2025-02-14 143709](https://github.com/user-attachments/assets/8dc4e26b-cacc-422f-8aa8-bea64347fd41)
![Screenshot 2025-02-14 143727](https://github.com/user-attachments/assets/96a0478b-12b3-462b-8192-c4e782cf49af)
![Screenshot 2025-02-14 143743](https://github.com/user-attachments/assets/42a7d248-a91e-4e35-878c-67325e199a9b)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/url-shortening-api-landing-page-v_SCKa_ciI)
- [Live Site URL](https://url-shortening-api-landing-page-frontend.onrender.com/)
- [Backend repo](https://github.com/ippotheboxer/url-shortening-api-landing-page-server)

## My process

I designed the app with tailwind using the mobile-first approach. I tried to create as many resuable components as possible, for example the button and the wrapper component. The next part was making sure that the app was receiving the urls and then calling the api: originally I only had a frontend, however you cannot call the API on the frontend due to cors policy, so I made a simple backend which makes a request to cleanURI. I then hosted the backend and frontend separately on render. Then I made sure that each request the user made (as long as it was validated) would get stored in an array of objects in local storage. Getting this to work took a lot of trial and error, but eventually I got it to work so that the URL links could be mapped through to create divs containing the information and a copy button to copy the shortened link. This project took a lot of work but I'm proud with how it turned out.

### Built with

- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) - JS with types
- [Tailwind-css](https://tailwindcss.com/) - CSS framework
- [Vite](https://vite.dev/) - Frontend build tool

### Useful resources

- [Render](https://render.com/) - I hosted the backend as a webapp, and the frontend as a static site with render.
- [CleanURI](https://cleanuri.com/) - The api used to shortned urls.
