import Image from "next/image"

import { useKeenSlider  } from 'keen-slider/react'

import { HomeContainer, Product } from "@/styles/pages/home"

import camiseta1 from '../assets/camisetas/1.png'

import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import Link from "next/link"
import Head from "next/head"
import { useShoppingCart } from "use-shopping-cart"
import { Product as IProduct } from "use-shopping-cart/core"
import { Handbag } from "@phosphor-icons/react"

type HomeProps = {
  products: any[]
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart();
  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">

        {
          products.map(product => {
            return (
              <Link key={product.id}  href={`/product/${product.product_id}`} prefetch={false}>
                <Product className="keen-slider__slide">
                  {/* TODO: Simular carregamento de imagem */}
                  {/* https://nextjs.org/docs/pages/api-reference/components/image-legacy#blurdataurl */}
                  {/* https://github.com/woltapp/blurhash */}
                  <Image src={product.image} width={520} height={480} alt="" />

                  <footer>
                    <div>
                      <strong>{product.name}</strong>
                      <span>{product.formatted_price}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addItem(product)
                      }}
                    >
                      <Handbag size={24} />
                    </button>
                  </footer>
                </Product>
              </Link>
            )
          })
        }
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.filter(product => product.active).map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: price.id,
      product_id: product.id,
      name: product.name,
      description: product.description,
      price: price.unit_amount ?? 0,
      image: product.images.length > 0 ? product.images[0] : undefined,
      currency: 'brl',
      formatted_price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format((price.unit_amount ?? 0)/ 100),
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
