import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Bell, User, ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-full items-center justify-between gap-6 px-6 py-4">
                {/* Logo */}
                <div className="shrink-0 flex gap-x-5 items-center justify-evenly w-1/4 ">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <a href="/" className="text-2xl font-bold bg-linear-to-r from-linear-to-r from-[#148f59] via-[#0b8e4f] to-[#086539] text-transparent bg-clip-text">
                            Merchora
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden items-center lg:flex">
                        <Link
                            href="#promos"
                            className="rounded-lg border border-transparent px-3 py-1 text-gray-700 transition-all duration-300 ease-out hover:border-green-600 hover:text-gray-900"
                        >
                            Product
                        </Link>

                        <Link
                            href="#help"
                            className="rounded-lg border border-transparent px-3 py-1 text-gray-700 transition-all duration-300 ease-out hover:border-green-600 hover:text-gray-900"
                        >
                            Category
                        </Link>

                        <Link
                            href="#feed"
                            className="rounded-lg border border-transparent px-3 py-1 text-gray-700 transition-all duration-300 ease-out hover:border-green-600 hover:text-gray-900"
                        >
                            Help
                        </Link>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="w-full mx-4 hidden lg:flex">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                        <Input
                            placeholder="Search Product..."
                            className="pl-10 pr-4 h-10 rounded-lg"
                        />
                    </div>
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-6">
                    {/* Cart */}
                    <Link href="/cart" className="relative text-gray-700 hover:text-gray-900 hidden lg:flex">
                        <ShoppingCart size={24} />
                        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                            2
                        </span>
                    </Link>

                    {/* Notifications */}
                    <Link href="/notifications" className="relative text-gray-700 hover:text-gray-900 hidden lg:flex">
                        <Bell size={24} />
                        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                            1
                        </span>
                    </Link>

                    {/* Profile */}
                    <Link href="/profile" className="h-8 w-8 p-1 items-center justify-center bg-linear-to-r from-linear-to-r from-[#148f59] via-[#0b8e4f] to-[#086539] text-white rounded-full hidden lg:flex">
                        <User size={20} />
                    </Link>

                    {/* Humberger Icon */}
                    <Button variant={"outline"} className="rounded-lg border-2 lg:hidden">
                        <Menu size={30} />
                    </Button>
                </div>
            </div>
        </nav>
    )
}