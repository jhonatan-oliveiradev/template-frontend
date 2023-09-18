import Image from 'next/image'
import Link from 'next/link'

const featureCard = [
  {
    title: 'Next.js',
    description: 'The React Framework for Production.',
    href: 'https://github.com/vercel/next.js/'
  },
  {
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework packed',
    href: 'https://tailwindcss.com'
  },
  {
    title: 'TypeScript',
    description: `Type safe JavaScript at runtime.`,
    href: 'https://www.typescriptlang.org/'
  },
  {
    title: 'ESLint',
    description: `Find and fix problems in your code`,
    href: 'https://eslint.org/'
  },
  {
    title: 'Prettier',
    description: `An opinionated code formatter`,
    href: 'https://prettier.io/'
  },
  {
    title: 'Husky',
    description: `Git hooks made easy`,
    href: 'https://typicode.github.io/'
  },
  {
    title: 'Jest',
    description: `Delightful JavaScript Testing Framework with a focus on simplicity`,
    href: 'https://jestjs.io/'
  },
  {
    title: 'React Testing Library',
    description: `Simple and complete React DOM testing utilities that encourage good testing practices.`,
    href: 'https://testing-library.com'
  }
]

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6">
      <div className="flex h-screen items-center justify-between flex-col">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-violet-700 my-6">
            Welcome to my boilerplate!
          </h1>
          <p>Feel free to clone it and use it in your projects.</p>
        </div>
        <div className="flex flex-col mt-12">
          <h2 className="text-2xl font-semibold">Features</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-8">
            {featureCard.map((card) => (
              <div className="w-7xl" key={card.title}>
                <div>
                  <Link
                    className="p-6 rounded-lg bg-gray-600/20 flex flex-col gap-2 hover:text-violet-700 transition-all hover:bg-gray-600/30"
                    href={card.href}
                    target="_blank"
                  >
                    <h3 className="font-bold mb-2">{card.title}</h3>
                    <p className="text-left text- text-sm text-zinc-400 line-clamp-1">
                      {card.description}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-12 pb-6">
          <div className="flex items-center justify-center">
            <p className="mr-2">Give a star on</p>
            <Link
              className="flex items-center justify-center"
              href="https://github.com/jhonatan-oliveiradev/template-frontend"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_294_22)">
                  <path
                    d="M9.94092 19.7646C4.94092 21.2646 4.94092 17.2646 2.94092 16.7646M16.9409 22.7646V18.8946C16.9784 18.4177 16.914 17.9384 16.7519 17.4884C16.5899 17.0384 16.3338 16.628 16.0009 16.2846C19.1409 15.9346 22.4409 14.7446 22.4409 9.28459C22.4407 7.88841 21.9036 6.54578 20.9409 5.53459C21.3968 4.31309 21.3645 2.96294 20.8509 1.76459C20.8509 1.76459 19.6709 1.41459 16.9409 3.24459C14.6489 2.62341 12.2329 2.62341 9.94092 3.24459C7.21092 1.41459 6.03092 1.76459 6.03092 1.76459C5.51729 2.96294 5.48506 4.31309 5.94092 5.53459C4.97105 6.55329 4.43344 7.90805 4.44092 9.31459C4.44092 14.7346 7.74092 15.9246 10.8809 16.3146C10.5519 16.6546 10.2982 17.06 10.1362 17.5045C9.97427 17.949 9.90773 18.4227 9.94092 18.8946V22.7646"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_294_22">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.940918 0.764648)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          <Link href="https://jhonatanoliveira.com" target="_blank">
            <Image
              src="https://www.jhonatanoliveira.com/_next/static/media/logo.d4c2b320.svg"
              width={130}
              height={80}
              alt="Logotipo Jhonatan Oliveira"
            />
          </Link>
        </div>
      </div>
    </main>
  )
}
