# IP Address Tracker

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). 

Blog write-up [here](https://hny-blogs.vercel.app/posts/ip-address-tracker).

## Table of Contents
- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshots](#screenshots)
- [Setup](#setup)
- [Built with](#built-with)
- [My Process](#my-process)
  - [App Router](#app-router)
  - [Development](#development)
- [Useful Resources](#useful-resources)

## Overview
The purpose of this project is to build a functional web application that allow users to search IP addresses and get real-time details about it, including the location of it via a map.

### The Challenge
Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshots
![](/public/screenshots/screen-desktop.png)
![](/public/screenshots/screen-mobile.png)
![](/public/screenshots/screen-mobile2.png)

## Setup
To run this project locally, create an account at [IP Geolocation API](https://geo.ipify.org/) and get an API key. 

Create a `.env.local` file in the root directory and add the following variable:
```
NEXT_PUBLIC_API_KEY='YOUR API KEY HERE'
```

Install the necessary dependencies using NPM:
```
$ npm install
```

Afterwards, run the project in dev mode:
```
$ npm run dev
```

## Built with
- [Next.js](https://nextjs.org/)
- Typescript
- Tailwind CSS
- [React Leaflet](https://react-leaflet.js.org/)
- [IP Geolocation API](https://geo.ipify.org/)

## My Process
Working on this project was not an easy walk-in-the-park but provided me further experience on building web applications utilizing APIs. More specifically, I learned more about the Next's development environment and working around it.

### App Router
Since the application relies on mainly client-side interactivity, a majority of the application is built with client components to provide that required functionality. Client components are pre-rendered on the server, then hydrated upon arriving to the client, marked with a `use client` directive. 

Because of this, this also means that fetching data from the API is done within the client components with hooks. This results in not utilizing Next.js's [new data fetching system via the App Router](https://nextjs.org/docs/app/building-your-application/data-fetching). 

### Development
My development cycle for this project is quite linear as I first needed to create the appropriate types for the API data, functions to fetch the API data, then combined them to cover the full functionality of the application.

When the functionality of the application has been covered, the next process of development would to create the UI of the app that matches the given style guide and wire it to the functionality of the application while covering any bugs along the way. 

## Useful Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
- [Leaflet Documentation](https://leafletjs.com/reference.html)
- [React Leaflet Documentation](https://react-leaflet.js.org/)
- [iHateRegex Cheat Sheet](https://ihateregex.io/)
- [Figma](https://www.figma.com/) to create the loading spinner SVG
- [Stack Overflow - FlippingBinary's solution to wire Leaflet into Next](https://stackoverflow.com/a/64634759)
