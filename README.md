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
