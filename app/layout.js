
import { inter, outfit } from './ui/fonts'
import './globals.scss'
import Header from './components/Header/Header'
import { ThemeProvider } from './components/ThemeContext/ThemeContext'

export const metadata = {
  title: {
    template: '%s | Mark Gardner',
    default: 'Mark Gardner | Front-end Developer',
  },
  description: `Portfolio site highlighting Mark Gardner's work`,
}

export default function RootLayout({ children }) {

  return (
    <ThemeProvider >
    <html lang="en" data-theme='light' className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
    </ThemeProvider>
  )
}
