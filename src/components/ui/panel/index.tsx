import { Fragment, useState } from 'react'
import { CartItem, Container, ContainerContent, Content, Footer, PriceInfo, WrapContainerContent } from './styles'
import { DebugCart, useShoppingCart } from 'use-shopping-cart'
import Image from 'next/image';
import axios from 'axios';
import { X } from '@phosphor-icons/react';

export function SlideCart({ open, setOpen }: Props) {
    const { cartDetails, removeItem, cartCount, formattedTotalPrice } = useShoppingCart();
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

    async function handleBuyButton() {
        try {
            setIsCreatingCheckoutSession(true);

            const response = await axios.post('/api/checkout', {
                cartDetails: cartDetails
            })

            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl;
        } catch (err) {
            setIsCreatingCheckoutSession(false);

            alert('Falha ao redirecionar ao checkout!')
        }
    }

    return (
        <Container data-open={open}>
            <WrapContainerContent>
                <div>
                    <div>
                        <div>
                            <div>
                                <ContainerContent>
                                    <div>
                                        <div>
                                            <h2>Sacola de compras</h2>

                                            <button type="button" onClick={() => setOpen(false)}>
                                                <X size={24} />
                                            </button>
                                        </div>
                                    </div>
                                    <Content>
                                        {
                                            Object.entries(cartDetails ?? {}).map(([key, value]) => {
                                                return (
                                                    <CartItem key={key}>
                                                        <Image src={value.image ?? ""} height={100} width={100} alt=''/>

                                                        <div>
                                                            <div>
                                                                <h4>{value.name}</h4>
                                                                <span>{value.formatted_price}</span>
                                                            </div>
                                                            <button onClick={() => removeItem(value.id)}>Remover</button>
                                                        </div>
                                                    </CartItem>
                                                )
                                            })
                                        }
                                    </Content>
                                </ContainerContent>
                                <Footer>

                                    <div>
                                        <span>Quantidade</span>
                                        <span>{cartCount}</span>
                                    </div>
                                    <PriceInfo>
                                        <span>Valor total</span>
                                        <span>{formattedTotalPrice}</span>
                                    </PriceInfo>

                                    <button onClick={() => handleBuyButton()}>
                                        finalizar compra
                                    </button>
                                </Footer>
                            </div>
                        </div>
                    </div>
                </div>
            </WrapContainerContent>
        </Container>

    )
}

type Props = {
    open: boolean,
    setOpen: (value: boolean) => void
}
