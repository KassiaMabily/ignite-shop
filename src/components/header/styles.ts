import { styled } from "@/styles";

export const HeaderContainer = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem 0',
    maxWidth: 1180,
    width: '100vw',
    margin: '0 auto',
    position: 'relative',
})

export const CartButton = styled('button', {
    background: '$gray800',
    color: '$gray400',
    padding: 12,
    border: 'none',
    borderRadius: 6,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,

    'span': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 700,
        lineHeight: 23,
        fontSize: 12,
        position: 'absolute',
        top: -7,
        right: -7,
        width: 24,
        height: 24,
        padding: 8,
        background: '$green500',
        borderRadius: 100,
        color: '$white',
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '$gray900',
    }
})
