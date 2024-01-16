import { inter, outfit } from './ui/fonts'
import './globals.css'
import Header from './components/Header/Header'



export const metadata = {
  title: {
    template: '%s | Mark Gardner',
    default: 'Mark Gardner | Front-end Developer',
  },
  description: `Portfolio site highlighting Mark Gardner's work`,
}

// export const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable:'--font-Inter'
// })

// export const outfit = Outfit({
//   subsets: ['latin'],
//   display: 'swap',
//   variable:'--font-Inter'
// })



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
