import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin-ext'] })

export const metadata = {
  title: 'WeatherClimax',
  description: 'WeatherClimax',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <link 
      rel="shortcut icon" 
      href="favicon.png" 
      type="image/x-icon" 
      />

      <body 
      className={inter.className}
      suppressHydrationWarning={true}>
      {children}
      </body>

    </html>
  )
}
