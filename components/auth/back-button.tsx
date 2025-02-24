"use client";
import Link from "next/link";
import { Button } from "../ui/button"

interface BackButtonProps{
    href:string;
    label:string;

}

export const BackButton=({href,label}:BackButtonProps)=>{

    return(
        <Button variant="link" size="sm" className="text-sm font-normal"
        >
<Link href={href}>{label}</Link>
        </Button>
    )
}