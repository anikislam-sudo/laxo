import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import logo from "../assets/logo (1).png";
import CartDrawer from "../cartDrawer/CartDrawer";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.items);
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const menuItems = (
        <>
            <li><Link className="hover:text-primary" to="/">Shop</Link></li>
            <li><Link className="hover:text-primary" to="/">Prescription</Link></li>
            <li><Link className="hover:text-primary" to="/">Book a Therapy</Link></li>
            <li><Link className="hover:text-primary" to="/">Blog</Link></li>
        </>
    );

    return (
        <nav className="bg-NavColor shadow-md">
            {/* Notification Bar */}
            <div className="bg-NavColor1 py-2 text-center">
                <p className="text-sm pr-4 text-black">
                    Our new website is live! While we fine-tune, your patience is appreciated.
                </p>
            </div>

            <div className="container mx-auto px-4 py-2 flex justify-around items-center">
                {/* Logo */}
                <Link className="flex items-center" to="/">
                    <img src={logo} alt="Logo" className="h-10" />
                </Link>

                {/* Center Links (Desktop View) */}
                <ul className="hidden lg:flex pr-4 space-x-10 font-bold items-center">
                    {menuItems}
                </ul>

                {/* Right Side Icons for Desktop */}
                <div className="hidden lg:flex items-center space-x-4">
                    <span className="">
                        <FaSearch className="w-6 h-6" />
                    </span>
                    <div className="relative">
                        <button onClick={toggleCart} className="relative">
                            <FaShoppingCart className="w-6 h-6" />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                    </div>
                    <Link className="hover:text-primary font-bold" to="/login">Sign In</Link>
                </div>

                {/* Mobile View Icons */}
                <div className="lg:hidden flex justify-between items-center space-x-4">
                    <span><FaSearch className="w-6 h-6" /></span>
                    <button onClick={toggleCart} className="relative">
                        <FaShoppingCart className="w-6 h-6" />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                    <button onClick={toggleMenu} className="text-black">
                        {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="lg:hidden flex flex-col items-center bg-NavColor w-full h-screen absolute top-0 left-0 z-50">
                    <div className="flex items-center justify-between w-full px-4 py-2">
                        <img src={logo} alt="Logo" className="h-10 " />
                        <button onClick={toggleMenu} className="text-black">
                            <FaTimes className="w-6 h-6" />
                        </button>
                    </div>

                    <ul className="flex flex-col items-center justify-center space-y-8 text-xl font-bold">
                        {menuItems}
                        <li className="font-bold text-black hover:text-primary">
                            <Link to="/login">Sign In</Link>
                        </li>
                    </ul>
                </div>
            )}

            {/* Cart Drawer */}
            <CartDrawer isOpen={isCartOpen} onClose={toggleCart} />
        </nav>
    );
};

export default Navbar;