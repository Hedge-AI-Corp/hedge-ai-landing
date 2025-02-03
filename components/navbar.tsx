"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const features: {
  icon: string;
  title: string;
  href: string;
  description: string;
}[] = [
  {
    icon: "🤖",
    title: "HedgeAI Bot",
    href: "/features/hedge-ai-bot",
    description:
      "Hedge AI's flagship product, uses cutting edge AI to secure your investments.",
  },
];

const resources: {
  icon: string;
  title: string;
  href: string;
  description: string;
}[] = [
  {
    icon: "📊",
    title: "Analytics",
    href: "/analytics",
    description:
      "Get real-time analytics on your investments and make informed decisions.",
  },
  {
    icon: "📝",
    title: "Blog",
    href: "/blog",
    description:
      "Read our blog to stay updated on the latest trends in investing.",
  },
  {
    icon: "📚",
    title: "Case Studies",
    href: "/case-studies",
    description: "Read our case studies to see how Hedge AI has helped others.",
  },
  {
    icon: "❓",
    title: "FAQs",
    href: "/faqs",
    description:
      "Have questions? Check out our FAQs to see if we've answered them.",
  },
];

export default function NavbarMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/features" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Features
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {resources.map((resource) => (
                <ListItem
                  key={resource.title}
                  icon={resource.icon}
                  title={resource.title}
                  href={resource.href}
                >
                  {resource.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/invest" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Invest
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: string; title: string }
>(({ className, icon, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            <span>{icon}</span>
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
