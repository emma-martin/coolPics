## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Install dependencies running:

```
npm install
```

Then, run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About this project

Responsive grid with a set of 9 images per load using Lorem Picsum: https://picsum.photos/

For desktop the author's name is displayed on hovering the card. This is also a link to a single view of the image clicked. On mobile, clicking the author's name navigates to the single view.

Includes pagination and a search bar to filter the images displayed by the author's name.

## Corner cases considered

- Loader.
- No results found message.
- No more pages message.
- Can't load more pages when there is a search query on place, since the Lorem Picsum API does not implement (as per today) query search functionalities.
