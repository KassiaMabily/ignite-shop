import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image";
import { useState } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Head from "next/head";
import { useShoppingCart } from "use-shopping-cart";

interface ProductProps {
  product: any
}

export default function Product({ product }: ProductProps) {
    const { addItem } = useShoppingCart();

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>

            <ProductContainer>
                <ImageContainer>
                    <Image src={product.image} width={520} height={480} alt="" />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.formatted_price}</span>

                    <p>{product.description}</p>

                    <button onClick={() => addItem(product)}>
                        Comprar agora
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>

    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_OXhYZdSzNY9QCW' } },
        ],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async (context) => {
    const { id } = context.params!;

    const product = await stripe.products.retrieve(id, {
        expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price;

    return {
        props: {
            product: {
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
        },
        revalidate: 60 * 60 * 1 // 1 hours
    }
}
