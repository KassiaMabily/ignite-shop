import { styled } from "@/styles";

export const Container = styled('div', {
    position: 'relative',
    zIndex: 10,
    display: 'none',

    '&[data-open="true"]': {
        display: 'block !important',
    },

})

export const WrapContainerContent = styled('div', {
    overflow: "hidden",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    '& > div': {
        overflow:"hidden",
        position:"absolute",
        top:0,
        right:0,
        bottom:0,
        left:0,

        '& > div': {
            "display":"flex","position":"fixed","top":"0","bottom":"0","right":"0","paddingLeft":"2.5rem","maxWidth":"100%","pointerEvents":"none",

            '& > div': {
                "width":"100vw","maxWidth":"28rem","pointerEvents":"auto",

                '& > div': {
                    display: "flex",
                    flexDirection: "column",
                    borderTopWidth: 1,
                    borderColor: "red",
                    height: "100%",
                    backgroundColor: "$gray800",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }
            }
        }
    },
})


export const ContainerContent = styled('div', {
    display: 'flex',
    overflowY: 'hidden',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    flexDirection: 'column',
    flex: '1 1 0%',
    minHeight: 0,

    '& > div': {
        paddingLeft: "1rem",
        paddingRight:"1rem",
        "@media (min-width: 640px)": {
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem"
        },

        '& > div': {
            display: "flex",
            justifyContent: "space-between",
            alignItems:"flex-start",

            '& > h2': {
                fontSize: "$lg",
                lineHeight: "32px",
                fontWeight: 700,
                color: "$gray100"
            },

            '& > button': {
                background: 'none',
                border: 'none',
                color: '$gray400'
            }
        }
    }
})

export const Content = styled('div', {
    position:"relative",
    paddingLeft:"2rem",
    paddingRight:"2rem",
    marginTop:"1.5rem",
    flex:"1 1 0%",
    display: "flex",
    flexDirection: 'column',
    gap: 24,

    "@media (min-width: 640px)":{
        paddingLeft:"1.5rem",
        paddingRight:"1.5rem"
    }
})

export const CartItem = styled('div', {
    display: 'flex',
    gap: 20,
    img: {
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
        borderRadius: 8
    },

    '& > div': {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-between',
        gap: 8,

        h4: {
            fontSize: '$md',
            color: '$gray300',
            lineHeight: '29px',
            fontWeight: 400
        },

        span: {
            fontSize: '$md',
            color: '$white',
            fontWeight: 700,
            lineHeight: '29px'
        },

        '& > button': {
            background: 'none',
            border: 'none',
            color: '$green500',
            fontSize: 16,
            fontWeight: 700,
        }
    }
})

export const Footer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',

    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },

    '& > div:first-child': {
        '& > span:first-child': {
            fontWeight: 400,
            fontSize: '$md'
        },
        '& > span:last-child': {
            fontWeight: 400,
            fontSize: '$lg',
            color: '$gray300'
        }
    },

    button: {
        marginTop: 50,
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
        }
    }
})

export const PriceInfo = styled('div', {
    '& > span:first-child': {
        fontWeight: 400,
        fontSize: '$lg',
    },
    '& > span:last-child': {
        fontWeight: 700,
        fontSize: '$xl',
    }
})
