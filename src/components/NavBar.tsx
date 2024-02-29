import { NavigationMenu, NavigationMenuLink, NavigationMenuList, NavigationMenuItem, navigationMenuTriggerStyle } from "@ui/navigation-menu";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to="/">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Acceuil
                        </NavigationMenuLink>
                    </Link>
                    <Link to="/categories">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Catégories
                        </NavigationMenuLink>
                    </Link>
                    <Link to="/tout">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Tout
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}