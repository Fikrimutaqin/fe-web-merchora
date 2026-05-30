'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { useIsMobile } from '@/hooks/use-isMobile'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet'
import { Bell, User, ShoppingCart, Search, Menu } from "lucide-react";

export default function Header() {
    const isMobile = useIsMobile()
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { href: '#promos', label: 'Product' },
        { href: '#help', label: 'Categories' },
        { href: '#feed', label: 'Help' },
    ]

    useEffect(() => {
        if (!isMobile) {
            setIsOpen(false);
        }
    }, [isMobile])

    return (
        <>
            <nav className="border-b border-gray-200 sticky top-0 z-30 w-full bg-white/80 backdrop-blur-2xl">
                <div className="mx-auto flex max-full lg:max-w-7xl items-center justify-between gap-6 px-6 py-4">
                    {/* Logo */}
                    <div className="shrink-0 flex gap-x-5 items-center justify-evenly w-1/4 ">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <a href="/" className="text-2xl font-bold bg-linear-to-r from-linear-to-r from-[#148f59] via-[#0b8e4f] to-[#086539] text-transparent bg-clip-text">
                                Merchora
                            </a>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden items-center lg:flex md:w-1/2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="rounded-lg border border-transparent px-3 py-1 text-gray-700 transition-all duration-300 ease-out hover:border-green-600 hover:text-gray-900"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="w-full mx-4 hidden lg:flex md:w-1/3">
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
                        <Button onClick={() => setIsOpen(true)} variant={"outline"} className="rounded-lg border-2 lg:hidden">
                            <Menu size={30} />
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Sheet */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent side="right" className="w-80 px-3 lg:hidden">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>

                    <div className="flex flex-col gap-6 mt-3 px-3">
                        {/* Search - Mobile */}
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <Input
                                placeholder="Search Product..."
                                className="pl-10 pr-4 h-10 rounded-lg"
                            />
                        </div>

                        {/* Navigation Links - Mobile */}
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-lg border border-transparent px-3 py-2 text-gray-700 transition-all duration-300 ease-out hover:border-green-600 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Actions - Mobile */}
                        <div className="border-t border-gray-200 pt-4 flex flex-col gap-3">
                            {/* Cart */}
                            <Link
                                href="/cart"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-gray-700 transition-all duration-300 ease-out hover:border-green-600 hover:text-gray-900 hover:bg-gray-50"
                            >
                                <ShoppingCart size={24} />
                                <span>Cart (2)</span>
                            </Link>

                            {/* Notifications */}
                            <Link
                                href="/notifications"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-gray-700 transition-all duration-300 ease-out hover:border-green-600 hover:text-gray-900 hover:bg-gray-50"
                            >
                                <Bell size={24} />
                                <span>Notifications (1)</span>
                            </Link>

                            {/* Profile */}
                            <Link
                                href="/profile"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-gray-700 transition-all duration-300 ease-out hover:border-green-600 hover:text-gray-900 hover:bg-gray-50"
                            >
                                <User size={24} />
                                <span>Profile</span>
                            </Link>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}