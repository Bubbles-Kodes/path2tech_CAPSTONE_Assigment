import logo from './logo.png'
import cheesecake from './cheesecake.png'
import basket_icon from './basket_icon.svg'
import search_icon from './search_icon.svg'
import cheesecakes from './cheesecakes.png'
import cakes from './cakes.png'
import cookies from './cookies.png'
import shakes from './shakes.png'
import teas from './teas.png'
import classic_cheesecake from './vanilla_cheesecake.png'
import chocolate_cheesecake from './chocolate_cheesecake.png'
import raspberry_cheesecake from './raspberry_cheesecake.png'
import sugar_cookies from './sugar_cookie.jpg'
import oreo_cookies from './oreo_cookie.png'
import chocolate_chip_cookie from './chocolate_chip_cookie.png'
import carrot_cake from './carrot_cake.png'
import chocolate_cake from './chocolate_cake.png'
import vanilla_cake from './vanilla_cake.png'
import strawberry_shake from './strawberry_shake.png'
import chocolate_shake from './chocolate_shake.png'
import vanilla_shake from './vanilla_shake.png'
import instagram_logo_icon from './instagram_logo_icon.svg'
import tiktok_logo_icon from './tiktok_logo_icon.svg'
import store_apple from './store_apple.svg'
import store_google from './store_google.svg'
import close_icon from './close_icon.svg'


export const assets = {
    logo: logo,
    basket_icon: basket_icon,
    search_icon: search_icon,
    store_apple: store_apple,
    store_google: store_google,
    instagram_logo_icon: instagram_logo_icon,
    tiktok_logo_icon: tiktok_logo_icon,
    close_icon: close_icon,
    cheesecake: cheesecake,
    classic_cheesecake: classic_cheesecake,
    chocolate_cheesecake: chocolate_cheesecake,
    raspberry_cheesecake: raspberry_cheesecake,
    sugar_cookies: sugar_cookies,
    oreo_cookies: oreo_cookies,
    chocolate_chip_cookie: chocolate_chip_cookie,
    carrot_cake: carrot_cake,
    chocolate_cake: chocolate_cake,
    vanilla_cake: vanilla_cake,
    strawberry_shake: strawberry_shake,
    chocolate_shake: chocolate_shake,
    vanilla_shake: vanilla_shake
}
export const menu_list =[
    {
        menu_name: "cheesecakes",
        menu_img: cheesecakes        
    },
    {
        menu_name: "cakes",
        menu_img: cakes
    },
    {
        menu_name: "cookies",
        menu_img: cookies
    },
    {
        menu_name: "shakes",
        menu_img: shakes
    },
]

export const food_list = [
    {
        id: 1,
        name: "Classic Cheesecake",
        img: classic_cheesecake,
        price: 10.99,
        description: "Our classic cheesecake is made with a velvety, cream cheese filling and a buttery graham cracker crust. It's the perfect dessert for any occasion.",
        category: "cheesecakes"
    },
    {
        id: 2,
        name: "Chocolate Cheesecake",
        img: chocolate_cheesecake,
        price: 12.99,
        description: "Our chocolate cheesecake is made with a rich, chocolate filling and a chocolate cookie crust. It's a decadent dessert that's sure to satisfy your sweet tooth.",
        category: "cheesecakes"
    },
    {
        id: 3,
        name: "Raspberry Cheesecake",
        img: raspberry_cheesecake,
        price: 11.99,
        description: "Our strawberry cheesecake is made with a creamy, strawberry filling and a graham cracker crust. Refreshing dessert that's perfect for summer.",
        category: "cheesecakes"
    },

    {
        id: 5,
        name: "Carrot Cake",
        img: carrot_cake,
        price: 14.99,
        description: "Our carrot cake is made with a moist, spiced cake and a cream cheese frosting. It's a classic dessert that's perfect for any celebration.",
        category: "cakes"
    },
    {
        id: 6,
        name: "Chocolate Cake",
        img: chocolate_cake,
        price: 15.99,
        description: "Our chocolate cake is made with a rich, chocolate cake and a chocolate frosting. It's a decadent dessert that's sure to satisfy your chocolate cravings.",
        category: "cakes"
    },
    {
        id: 7,
        name: "Vanilla Cake",
        img: vanilla_cake,
        price: 13.99,
        description: "Our vanilla cake is made with a light, vanilla cake and a vanilla frosting. It's a simple dessert that's perfect for any occasion.",
        category: "cakes"
    },
    {
        id: 8,
        name: "Oreo Cookies",
        img: oreo_cookies,
        price: 9.99,
        description: "Our oreo cookies are made with a rich, chocolate cookie and a creamy, vanilla filling. They're a classic treat that's perfect for snacking.",
        category: "cookies"
    },
    {
        id: 9,
        name: "Chocolate Chip Cookies",
        img: chocolate_chip_cookie, 
        price: 8.99,
        description: "Our chocolate chip cookies are made with a chewy, chocolate chip cookie dough. They're a classic treat that's perfect for sharing.",
        category: "cookies"
    },
    {
        id: 10,
        name: "Sugar Cookies",
        img: sugar_cookies,
        price: 7.99,
        description: "Our sugar cookies are made with a buttery, sugar cookie dough. They're a simple treat that's perfect for any occasion.",
        category: "cookies"
    },
    {
        id: 11,
        name: "Chocolate Shake",
        img: chocolate_shake,
        price: 6.99,
        description: "Our chocolate shake is made with rich, chocolate ice cream and milk. It's a classic treat that's perfect for cooling off on a hot day.",
        category: "shakes"
    },
    {
        id: 12,
        name: "Vanilla Shake",
        img: vanilla_shake,
        price: 5.99,
        description: "Our vanilla shake is made with creamy, vanilla ice cream and milk. It's a simple and classic treat that's perfect for any occasion.",
        category: "shakes"
    },
    {
        id: 13,
        name: "Strawberry Shake",
        img: strawberry_shake,
        price: 7.99,
        description: "Our strawberry shake is made with fresh, strawberries and creamy, vanilla ice cream. Refreshing treat that's perfect for summer.",
        category: "shakes"
    },
    /*{
        id: "14",
        name: "Green Tea",
        img: teas,
        price: 3.99,
        description: "Our green tea is made with high-quality, green tea leaves and water. It's a healthy beverage that's perfect for any time of day.",
        category: "teas"
    },
    {
        id: "15",
        name: "Black Tea",
        img: teas,
        price: 3.99,
        description: "Our black tea is made with premium, black tea leaves and water. It's a classic beverage that's perfect for any occasion.",
        category: "teas"
    },
    {
        id: "16",
        name: "Chai Tea",
        img: teas,
        price: 4.99,
        description: "Our chai tea is made with a blend of, black tea, spices, and milk. It's a comforting beverage that's perfect for warming up on a cold day.",
        category: "teas"
    },*/
]