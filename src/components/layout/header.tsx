import clsx from "clsx";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { FloatingBar } from "@/components/ui/floating-bar";
import { Link } from "@/components/ui//link";
import { Container } from "@/components/ui/container";
import { MenuIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { NavLink } from "@/components/ui/nav-link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { type NavigationItem, type NavigationDropdown } from "@/config/navigation";

// Type guard to check if an item is a dropdown
function isDropdown(item: NavigationItem): item is NavigationDropdown {
  return "items" in item;
}

// Navigation component that renders nav items
function Navigation({ items }: { items: NavigationItem[] }) {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {items.map((item, index) => {
          if (isDropdown(item)) {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground data-[state=open]:text-foreground text-sm transition-colors">
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid min-w-max">
                    {item.items.map((subItem) => (
                      <li key={subItem.href}>
                        <NavigationMenuLink asChild>
                          <NavLink
                            href={subItem.href}
                            className="hover:bg-accent block w-full rounded-sm px-3 py-2 text-sm"
                          >
                            {subItem.name}
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          } else {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild>
                  <NavLink
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground data-[current=true]:text-foreground inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// Mobile navigation component for the drawer
function MobileNavigation({ items }: { items: NavigationItem[] }) {
  return (
    <ul className="divide-muted flex flex-col divide-y">
      {items.map((item, index) => {
        if (isDropdown(item)) {
          return (
            <li key={index} className="py-2">
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <button className="text-foreground flex w-full items-center justify-between gap-3 font-medium">
                    {item.name}
                    <ChevronDownIcon aria-hidden="true" className="size-[1em]" />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent asChild>
                  <ul className="flex flex-col gap-2 pt-4">
                    {item.items.map((subItem, index) => (
                      <li key={index}>
                        <NavLink key={subItem.href} href={subItem.href} className="font-medium">
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
          );
        } else {
          return (
            <li key={index} className="py-2">
              <NavLink
                key={item.href}
                href={item.href}
                className="text-foreground w-full font-medium"
              >
                {item.name}
              </NavLink>
            </li>
          );
        }
      })}
    </ul>
  );
}

export function Header({
  narrow = true,
  navigation,
}: {
  narrow?: boolean;
  navigation: NavigationItem[];
}) {
  return (
    <FloatingBar
      asChild
      position={"sticky"}
      autoHide={true}
      className={clsx(
        // Base styles for the navbar
        "z-100 h-(--navbar-height,64px) w-full",
        // Transition and initial state
        "transform-gpu transition duration-300",
        // Initial state
        "bg-background",
        // Scrolled state - when the user starts scrolling
        "data-scrolled:bg-background/75 data-scrolled:backdrop-blur-2xl",
        // Hidden state for auto-hide behavior
        "data-hidden:data-scrolled:shadow-none data-hidden:motion-safe:-translate-y-full"
      )}
    >
      <header>
        <Container
          size={narrow ? "default" : "fluid"}
          className="flex h-full items-center justify-between gap-8"
        >
          {/* Left side */}
          <div className="flex flex-1 items-center gap-4">
            <Link href="/" aria-label="Home Page">
              <Logo aria-hidden="true" className="w-20" />
            </Link>
          </div>

          {/* Right side */}
          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="ml-auto hidden lg:block">
              <Navigation items={navigation} />
            </div>

            {/* Mobile menu */}
            <div className="lg:hidden">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="secondary" size="icon" aria-label="open menu">
                    <MenuIcon aria-hidden="true" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-lg">
                    <DrawerHeader>
                      <DrawerTitle className="text-left">Menu</DrawerTitle>
                    </DrawerHeader>
                    <div className="space-y-6 p-4">
                      <MobileNavigation items={navigation} />
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button className="w-full">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </Container>
      </header>
    </FloatingBar>
  );
}
