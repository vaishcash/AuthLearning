"use client";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";
import { Social } from "./social";


interface CardwrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};

export const Cardwrapper = ({ children, headerLabel, backButtonLabel, backButtonHref, showSocial }: CardwrapperProps) => {    
    return (
        <Card className="w-[500px]   shadow-2xl">
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
            {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social/> </CardFooter>
            )}
            <CardFooter className="justify-center">
                <BackButton
                href={backButtonHref}
                label={backButtonLabel}
              />

            </CardFooter>
        </Card>
    )
}