import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import '@/app/globals.css'
import Header from '@/components/header'

const noto = Noto_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokemon',
  description: 'Pokemon API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={noto.className}>
        <Header/>
        <div className='mt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
