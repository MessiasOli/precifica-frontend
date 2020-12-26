import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { HOME_PATH, REQUESTS_PATH, PRODUCTS_PATH, REPORTS_PATH } from "../../../config/routing/paths";

import UserContext from "../../../config/contexts/auth";

import { ImHome3 } from "react-icons/im";
import { FaClipboardList, FaBox } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";

import { Nav, Wrap, ItemMenu } from "./style";

const NavMenu = ({ open }) => {
    const { logout } = useContext(UserContext);
    const history = useHistory();

    const handleClick = () => {
        logout(history);
    };

    return (
        <Nav open={open}>
            <Wrap>
                <ItemMenu to={HOME_PATH}>
                    <ImHome3 />
                    Home
                </ItemMenu>
                <ItemMenu to={REQUESTS_PATH}>
                    <FaClipboardList />
                    Pedidos
                </ItemMenu>
                <ItemMenu to={PRODUCTS_PATH}>
                    <FaBox />
                    Produtos
                </ItemMenu>
                <ItemMenu to={REPORTS_PATH}>
                    <BsGraphUp />
                    Relatórios
                </ItemMenu>
                <ItemMenu logout as="button" onClick={handleClick}>
                    <RiLogoutBoxRLine />
                    Sair
                </ItemMenu>
            </Wrap>
        </Nav>
    );
};

export default NavMenu;