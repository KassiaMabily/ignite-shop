import { Roboto } from 'next/font/google'
import type { AppProps } from 'next/app'

import { Container } from "@/styles/pages/app"
import { CartProvider } from 'use-shopping-cart'

import { globalStyles } from '@/styles/global'
import { Header } from '@/components/header'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

globalStyles()

const stripeKey = process.env.STRIPE_PUBLISHABLE_KEY as string

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={stripeKey}
      currency="BRL"
      shouldPersist={true}
    >
      <>
        <Container className={roboto.className}>
          <Header />

          <Component {...pageProps} />

        </Container>
      </>
    </CartProvider>
    )
}
