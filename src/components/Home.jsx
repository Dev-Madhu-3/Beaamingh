// src/pages/Home.jsx
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import AutoSlider from "./AutoSlider"

const products = [
    { id: 1, name: "Organic Apples", price: "$5 / kg", img: "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1755799597/2284261742533859_kddsja.png" },
    { id: 3, name: "Herbal Tea", price: "$8 / pack", img: "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1755799599/9987811742533926_ybicak.png" },
    { id: 2, name: "Fresh Honey", price: "$12 / bottle", img: "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1755799597/4978161742534053_r9hrib.png" },
]

export default function Home() {
    return (
        <div className="flex flex-col">
            <AutoSlider />
            {/* Hero Section / Carousel */}
            <section className="w-full h-[80vh] bg-green-100 flex items-center justify-center text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="p-6"
                >
                    <h1 className="text-5xl font-bold text-green-800">Welcome to Beaamingh</h1>
                    <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
                        Your trusted destination for organic, eco-friendly, and healthy products.
                    </p>
                    <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg">
                        Shop Now
                    </Button>
                </motion.div>
            </section>

            {/* Intro Section */}
            <section className="py-16 bg-white text-center">
                <h2 className="text-3xl font-bold text-green-700">About Beaamingh</h2>
                <p className="mt-4 max-w-3xl mx-auto text-gray-600">
                    We are committed to delivering fresh organic products sourced directly
                    from farmers. Beaamingh is all about sustainability, health, and trust.
                </p>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-green-50">
                <h2 className="text-3xl font-bold text-center text-green-700">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-6">
                    {products.map((product) => (
                        <Card key={product.id} className="shadow-xl rounded-2xl hover:scale-105 transition">
                            <img src={product.img} alt={product.name} className="w-full h-56 object-cover rounded-t-2xl" />
                            <CardContent className="p-4 text-center">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-gray-600">{product.price}</p>
                                <Button className="mt-3 bg-green-600 hover:bg-green-700 text-white w-full">
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-white text-center">
                <h2 className="text-3xl font-bold text-green-700">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 px-6">
                    {["Fruits", "Vegetables", "Skincare", "Beverages"].map((cat, i) => (
                        <div
                            key={i}
                            className="p-6 bg-green-100 rounded-2xl shadow-md hover:bg-green-200 transition"
                        >
                            <h3 className="font-semibold text-lg text-green-800">{cat}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-green-50 text-center">
                <h2 className="text-3xl font-bold text-green-700">Why Choose Beaamingh?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-6">
                    <div className="p-6 bg-white shadow-lg rounded-2xl">
                        <h3 className="text-xl font-semibold">100% Organic</h3>
                        <p className="text-gray-600 mt-2">No chemicals, no preservatives — only natural goodness.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-2xl">
                        <h3 className="text-xl font-semibold">Direct from Farmers</h3>
                        <p className="text-gray-600 mt-2">Supporting local farmers and sustainable agriculture.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-2xl">
                        <h3 className="text-xl font-semibold">Eco-Friendly Packaging</h3>
                        <p className="text-gray-600 mt-2">We care about the planet as much as you do.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-green-800 text-white py-8 text-center">
                <h3 className="text-lg font-bold">Beaamingh Organic Store</h3>
                <p className="mt-2">📍 Nellore,Andhra Pradesh, India | 📞 +91 9989857197</p>
                <div className="mt-4 flex justify-center gap-6">
                    <a href="#" className="hover:text-green-300">Facebook</a>
                    <a href="#" className="hover:text-green-300">Instagram</a>
                    <a href="#" className="hover:text-green-300">Twitter</a>
                </div>
                <p className="mt-6 text-sm">&copy; 2025 Beaamingh. All rights reserved.</p>
            </footer>
        </div>
    )
}
