export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    longDescription: string;

}
const products: Product[] = [
    {
        id: 1,
        name: 'Unisex Retro T-shirt',
        price: 19.99,
        description: 'Vintage Style Unisex T-shirt',
        image: "http://localhost:8080/fidget-1.jpg",
        longDescription: 'Step back in time with our vintage-style unisex T-shirt. Inspired by the classic designs of the past, this T-shirt features a comfortable fit and a unique retro print. Perfect for those who appreciate timeless fashion.'
    },
    {
        id: 2,
        name: "Women's Floral Print Blouse",
        price: 29.99,
        description: "Elegant Floral Print Blouse",
        image: "http://localhost:8080/fidget-2.jpg",
        longDescription: "Add a touch of elegance to your wardrobe with this women's floral print blouse. The delicate floral pattern and soft fabric make it an ideal choice for both casual and formal occasions."
    },
    {
        id: 3,
        name: "Men's Plaid Shirt",
        price: 24.99,
        description: "Classic Plaid Pattern Shirt",
        image: "http://localhost:8080/fidget-3.jpg",
        longDescription: "Stay stylish and comfortable with our classic men's plaid shirt. The timeless plaid pattern and breathable fabric ensure that you can wear it for various occasions, from work to weekends."
    },
    {
        id: 4,
        name: "Women's Striped T-shirt",
        price: 14.99,
        description: "Striped Cotton T-shirt",
        image: "http://localhost:8080/fidget-4.jpg",
        longDescription: "Keep it casual and chic with our women's striped T-shirt. Made from soft cotton, this T-shirt features a classic striped design that pairs perfectly with your favorite jeans or shorts."
    },
    {
        id: 5,
        name: "Men's Dress Shirt",
        price: 34.99,
        description: "Formal Dress Shirt",
        image: "http://localhost:8080/fidget-5.jpg",
        longDescription: "Elevate your formal attire with our men's dress shirt. Crafted from high-quality fabric, it offers a comfortable fit and a sharp, professional look. Ideal for business meetings and special occasions."
    },
    {
        id: 6,
        name: "Women's V-Neck Sweater",
        price: 39.99,
        description: "Cozy V-Neck Sweater",
        image: "http://localhost:8080/fidget-6.jpg",
        longDescription: "Stay warm and stylish with our women's V-neck sweater. The soft and cozy fabric makes it a perfect choice for the colder seasons. The V-neck design adds a touch of sophistication to your outfit."
    },
    {
        id: 7,
        name: "Men's Polo Shirt",
        price: 17.99,
        description: "Classic Polo Shirt",
        image: "http://localhost:8080/fidget-7.jpg",
        longDescription: "Go for a timeless and sporty look with our men's polo shirt. The classic polo collar and comfortable fit make it an ideal choice for casual outings and sports activities."
    },
    {
        id: 8,
        name: "Women's Denim Shirt",
        price: 27.99,
        description: "Denim Button-Up Shirt",
        image: "http://localhost:8080/fidget-8.jpg",
        longDescription: "Achieve a trendy and versatile style with our women's denim shirt. This button-up shirt is made from high-quality denim and can be dressed up or down for a variety of occasions."
    },
    {
        id: 9,
        name: "Men's Graphic Tee",
        price: 16.99,
        description: "Cool Graphic Print T-shirt",
        image: "http://localhost:8080/fidget-9.jpg",
        longDescription: "Express your individuality with our men's graphic tee. Featuring a cool graphic print, this T-shirt adds a touch of personality to your casual wardrobe. Stand out from the crowd with this unique design."
    },
    {
        id: 10,
        name: "Women's Linen Blouse",
        price: 22.99,
        description: "Lightweight Linen Blouse",
        image: "http://localhost:8080/fidget-10.jpg",
        longDescription: "Stay cool and comfortable with our women's linen blouse. The lightweight and breathable linen fabric make it perfect for hot summer days. The blouse's relaxed fit and elegant style ensure you'll look and feel your best."
    },
    {
        id: 11,
        name: "Unisex t-Shirt",
        price: 5.99,
        description: "Brathaus Madison Unisex Retro T-shirt",
        image: "http://localhost:8080/fidget-11.jpg",
        longDescription: "Taverns come and go, but for more than 30 years, one watering hole reigned supreme in downtown Madison — the famous Brathaus, which sat at the corner of State Street and Lake Street. Starting in 1953, students, professors and downtown workers would gather for a famous bratwurst or steak sandwich and wash it down with an ice cold beer. It’s biggest days were football Saturdays when it seemed half the UW campus would crowd into the dim Bavarian-style pub to celebrate before and after the big game. Since 1989, the tavern has been under new ownership and gone by a new name — State Street Brats."
    }

]
export default products;

