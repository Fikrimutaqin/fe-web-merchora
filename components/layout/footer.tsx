import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-white text-gray-600">
            <div className="max-full lg:max-w-7xl mx-auto items-start justify-between gap-6 px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo */}
                    <div className="flex flex-col items-start gap-2 lg:pl-3">
                        <a href="/" className="text-2xl font-bold bg-linear-to-r from-linear-to-r from-[#148f59] via-[#0b8e4f] to-[#086539] text-transparent bg-clip-text">
                            Merchora
                        </a>
                    </div>

                    {/* About */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 ">About Merchora</h4>
                        <p className=" text-wrap">
                            Multi-Merchant E-Commerce Platform Marketplace On the one hand
                        </p>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 ">Categories</h4>
                        <ul className="space-y-2 ">
                            <li><Link href="#">Electronics</Link></li>
                            <li><Link href="#">Clothing</Link></li>
                            <li><Link href="#">Books</Link></li>
                            <li><Link href="#">Home & Garden</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 ">Customer Support</h4>
                        <ul className="space-y-2 ">
                            <li><Link href="#">Help Center</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                            <li><Link href="#">Shipping & Returns</Link></li>
                            <li><Link href="#">FAQ</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-300 mt-8 pt-8">
                    <div className="flex flex-col items-center justify-between lg:flex-row">
                        <p className="">&copy; {new Date().getFullYear()} Merchora. All rights reserved.</p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className=" hover:">Privacy Policy</Link>
                            <Link href="#" className=" hover:">Terms of Service</Link>
                            {/* <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                    <Mail size={16} />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                    <Bell size={16} />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                    <User size={16} />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}