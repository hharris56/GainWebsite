"use client"

import Link from "next/link";
import "./navbar.css";
import "./navbar-mobile.css";
// import { useRouter } from "next/router";

export default function NavbarMobile(props: any){

    return (
        <div className="mobile-navbar-container">
            <MobileNavbarButton title="audio" route="/audio"></MobileNavbarButton>
            <MobileNavbarButton title="visual" route="/visual"></MobileNavbarButton>
            <MobileNavbarButton title="code" route="/code"></MobileNavbarButton>
        </div>
    )
}

interface ButtonProps{
    title: string,
    route: string,
    selected?: boolean,
}
function MobileNavbarButton(props: ButtonProps){

    return (
        <Link 
        className="mobile-navbar-button"
        href={props.route} 
        key={props.title}>
            {props.title}
        </Link>
    )
}