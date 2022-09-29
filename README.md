This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

## First Step

Register at [The Movie Database](https://www.themoviedb.org/?language=en-US).

Get your API key by going to the setting section.

Then create a .env.local file and add your key API_KEY=ENTER_YOUR_API_KEY

## Second Step

Install npm module

```
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Code Formatting

- Typescript config from Google
- ESLint
- Prettier
- Prettier plugin for Tailwind CSS
- VS Code settings
- Husky (Pre-commit hook to avoid committing bad code.)

### VSCode Extensions

- Install `Prettier - Code formatter`
- Install `Tailwind CSS IntelliSense`

### Change VSCode settings

- Change `Editor: Default Formatter` to `Prettier - Code formatter`
- Check `Editor: Format On Paste`
- Check `Editor: Format On Save`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
