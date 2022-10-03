## Overview
This project is created to complete the technical assessment given as a part of the recruitment process for getting the Front End Engineer role at Pintu.

## Description
[Pintu](https://pintu.co.id) is one of the finest Crypto Exchange platforms in Indonesia. This project is the replica of their [crypto market](https://pintu.co.id/market) feature which displays a list of available cryptocurrencies to be traded on their platform as well as the search feature and top mover feature to find out the cryptocurrencies which have the most volatile movements (up/down).

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, install all node packages dependencies:
```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

This project uses :
 - [Next.js](https://nextjs.org/) with TypeScript for the ReactJS framework
 - [styled-component](https://styled-components.com/) for the styling
 - [twin.macro](https://www.npmjs.com/package/twin.macro) to simplify the styling class
 - [Tailwind CSS](https://tailwindcss.com/).
 - [React Query](https://www.npmjs.com/package/react-query) for a better data fetching experience
 
And it's deployed to Vercel with the link which can be accessed [here](https://pintu-interview.vercel.app/).

## Storybook

This project comes with [Storybook](https://storybook.js.org/) to help documenting the components used in this project.

To run the storybook, all you need to do is

```bash
npm run storybook
```

A browser tab with a link to [http://localhost:6006](http://localhost:6006) should be opened automatically once the command is run.

## Functionalities

This web app consists of several parts to support its functionality.

#### 1. Market Table

This is the main part of the web which displays the list of cryptocurrencies available to be traded in the platform. It displays the price movement along with the percentage within the last 24 hours, a week, a month and even a year. The movement is in real time (updated every second)

![Market Table](https://i.ibb.co/WW0FqQD/image.png "Market Table")

#### 2. Top Mover

This is the part which shows us the most volatile cryptocurrencies in 24 hours.

![Top Mover](https://i.ibb.co/z6nHQ42/image.png "Top Mover")

#### 3. Market Tags

This is the part which can be used to "filter" cryptocurrencies based on certain category.

![Market Tags](https://i.ibb.co/3Nv5s9N/image.png "Market Tags")

![Market Tags](https://i.ibb.co/CnhMQhY/image.png "Market Tags")

#### 4. Search

Just like how it's named, this is an input form to make it easy for you to search for certain Currencies you are looking for. You can search it by typing down its name or its currencySymbol.

![Search](https://i.ibb.co/x3f9Kq8/image.png "Search")

## Overview
This project is created to complete the technical assessment given as a part of the recruitment process for getting the Front Engineer role at Pintu.

## Description
[Pintu](https://pintu.co.id) is one of the finest Crypto Exchange platforms in Indonesia. This project is the replica of their mobile apps [crypto market](https://pintu.co.id/market) feature which displays a list of available cryptocurrencies to be traded on their platform as well as the search feature and top mover feature to find out the cryptocurrencies which have the most volatile movements (up/down).

## Getting Started

This is an [Expo](https://expo.dev/) project started with a typescript template called
```bash
expo-template-blank-typescript
```


First, install all node packages dependencies:
```bash
npm install
```

Second, run the development server:

```bash
npm start
```

A QR Code will be generated for development using real devices, but, if you prefer to use virtual devices, <b>press 'a'</b> in the terminal for development using Android emulator or <b>press 'i'</b> for development using iOS simulator.

## Tech Stack

This project uses :
 - [Expo](https://nextjs.org/) with TypeScript
 - [React Query](https://www.npmjs.com/package/react-query) for a better data fetching experience
 
And it's deployed to Expo with the link which can be accessed [here](https://expo.dev/@kenedy.lukito/pintu).

> Note: If you're an iOS user, you might get a 403 Network Error while trying to access the link due to Apple App Store policy which does not allow a user to access other people's Expo apps by scanning QR code. You must be added as a team member in order to be able to access it.


## Storybook

This project comes with [Storybook](https://storybook.js.org/) to help documenting the components used in this project.

To run the storybook, all you need to do is

1. Comment out all the code in App.tsx and type in
```bash
export { default } from './storybook';
```

2. Run the app
```bash
npm start
```


## Functionalities

This mobile app consists of several parts to support its functionality.

#### 1. Market Table

This is the main part of the web which displays the list of cryptocurrencies available to be traded in the platform. It displays the price movement along with the percentage within the last 24 hours.

![Market Table](https://i.ibb.co/gtmWZ0J/IMAGE-2022-10-03-11-15-50.jpg "Market Table")

#### 2. Search

Just like how it's named, this is an input form to make it easy for you to search for certain Currencies you are looking for. You can search it by typing down its name or its currencySymbol.

![Search](https://i.ibb.co/KqMF72w/IMAGE-2022-10-03-11-17-37.jpg "Search")

#### 3. Market Tags

This is the part which can be used to "filter" cryptocurrencies based on certain category.

![Market Tags](https://i.ibb.co/93xc70t/IMAGE-2022-10-03-11-17-35.jpg "Market Tags")

![Market Tags](https://i.ibb.co/1qjwMGj/telegram-cloud-photo-size-5-6183775024247321868-y.jpg "Market Tags")

### 4. Sort

This is a feature to sort the cryptocurrencies list based on:

- Default
- Gainers in 24 hours
- Losers in 24 hours
- Asset Name (A to Z)
- Asset Name (Z to A)

![Sort](https://i.ibb.co/QQwk3Sj/IMAGE-2022-10-03-11-19-24.jpg "Sort")

## Assumption

It's assumed that this project has no "cryptocurrency detail" pages. This leads to the way the search bar is designed and the cryptocurrencies cannot be clicked due to no detail page.

## What could be improved?

Design system can be really helpful in order to reduce redundancy of design and code. Therefore, implementing design system can be a huge improvement to this project.
