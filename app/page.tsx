import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="bg-black py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="HomeItems Logo" width={150} height={40} className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <NavItem href="/about" label="ABOUT US" hasDropdown />
            <NavItem href="/categories" label="CATEGORIES" hasDropdown />
            <NavItem href="/featured" label="FEATURED" hasDropdown />
            <NavItem href="/news" label="NEWS" />
            <NavItem href="/contact" label="CONTACT" />
          </nav>
          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      <section className="relative flex items-center justify-center bg-black text-white py-32">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-background.jpg" alt="Background" fill className="object-cover opacity-30" priority />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 leading-tight mb-8">
            YOU BROWSE THE ITEMS, <br />
            WE DELIVER THE BEST QUALITY
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <Link
              href="/shop"
              className="bg-white text-black py-3 px-8 font-medium hover:bg-gray-100 transition-colors"
            >
              Browse Items
            </Link>
            <Link
              href="/sell"
              className="bg-white text-black py-3 px-8 font-medium hover:bg-gray-100 transition-colors"
            >
              Sell Your Items
            </Link>
            <Link
              href="/contact"
              className="bg-white text-black py-3 px-8 font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-orange-500 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            YOUR GATEWAY TO ACCESS <br />
            THE BEST HOUSEHOLD ITEMS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeaturedItem
              title="Furniture"
              description="Quality pre-owned furniture for every room in your home."
              imageUrl="/placeholder.svg?height=300&width=400"
            />
            <FeaturedItem
              title="Electronics"
              description="Tested and working electronics at affordable prices."
              imageUrl="/placeholder.svg?height=300&width=400"
            />
            <FeaturedItem
              title="Kitchen Items"
              description="Everything you need to equip your kitchen on a budget."
              imageUrl="/placeholder.svg?height=300&width=400"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Items</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <ProductCard
                key={item}
                title={`Vintage Item ${item}`}
                price={`$${Math.floor(Math.random() * 100) + 20}`}
                imageUrl="/placeholder.svg?height=300&width=300"
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="bg-orange-500 text-white py-3 px-8 font-medium hover:bg-orange-600 transition-colors"
            >
              View All Items
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.svg" alt="HomeItems Logo" width={150} height={40} className="h-10 w-auto mb-4" />
            <p className="text-gray-400 mt-4">Your trusted marketplace for quality pre-owned household items.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-gray-400 hover:text-white">
                  Sell Items
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/furniture" className="text-gray-400 hover:text-white">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="/category/electronics" className="text-gray-400 hover:text-white">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/category/kitchen" className="text-gray-400 hover:text-white">
                  Kitchen
                </Link>
              </li>
              <li>
                <Link href="/category/decor" className="text-gray-400 hover:text-white">
                  Home Decor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p>123 Market Street</p>
              <p>Sydney, NSW 2000</p>
              <p className="mt-2">Email: info@homeitems.com.au</p>
              <p>Phone: (02) 1234 5678</p>
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} HomeItems. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

function NavItem({ href, label, hasDropdown = false }: { href: string; label: string; hasDropdown?: boolean }) {
  return (
    <Link href={href} className="text-orange-500 hover:text-orange-400 flex items-center">
      {label}
      {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
    </Link>
  )
}

function FeaturedItem({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="h-48 relative">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <Link
          href={`/category/${title.toLowerCase()}`}
          className="mt-4 inline-block text-orange-500 font-medium hover:underline"
        >
          Browse {title} →
        </Link>
      </div>
    </div>
  )
}

function ProductCard({ title, price, imageUrl }: { title: string; price: string; imageUrl: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-48 relative">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-lg font-bold text-orange-500 mt-1">{price}</p>
        <Link
          href="/product/1"
          className="mt-3 inline-block w-full text-center bg-gray-100 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
