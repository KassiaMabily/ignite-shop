import Image from "next/image";
import logoImg from "@/assets/logo.svg"
import { CartButton, HeaderContainer } from "./styles";
import { useState } from "react";
import { SlideCart } from "../ui/panel";
import { Handbag } from "@phosphor-icons/react";
import { useShoppingCart } from "use-shopping-cart";

export function Header() {
    const [ open, setOpen ] = useState(false);
    const { cartCount } = useShoppingCart();

    return (
        <>
            <HeaderContainer>
                <Image src={logoImg} alt="" />

                <CartButton onClick={() => setOpen(true)}>
                    <Handbag size={24} />
                    <span>{cartCount}</span>
                </CartButton>
            </HeaderContainer>
            <SlideCart open={open} setOpen={setOpen} />
        </>
    )
}
