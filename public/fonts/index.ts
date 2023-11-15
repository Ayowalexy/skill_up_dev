import { Montserrat, Poppins, Lato } from "next/font/google";
import localFont from 'next/font/local'

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '400', '500', '600'],
    variable: '--font-montserrat'
})

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", '300', '500', "600", "700", "900"],
    variable: "--font-poppins",
});

export const athens = localFont({
    src: [
        {
            path: './fonts/AthensBold.ttf',
            weight: "600",
            style: 'bold'
        },
        {
            path: './fonts/Agina.otf',
            weight: "400",
            style: 'normal'
        },
    ]
})


export const gilroy = localFont({
    src: [
        {
            path: './fonts/Gilroy-Black.ttf',
            weight: '600',
            style: 'black',
        },
        {
            path: './fonts/Gilroy-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/Gilroy-SemiBold.ttf',
            weight: '500',
            style: 'semibold',
        },
        {
            path: './fonts/Gilroy-Light.ttf',
            weight: '300',
            style: 'light',
        },
    ]
})