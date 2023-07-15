import { ScrollViewStyleReset } from 'expo-router/html'
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ScrollViewStyleReset />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}