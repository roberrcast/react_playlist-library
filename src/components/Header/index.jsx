import {
    HeaderWrapper,
    HeaderTitle,
    MenuWrapper,
    Menu,
    ListItem,
} from "./styles";

function Header({ title }) {
    return (
        <HeaderWrapper>
            <HeaderTitle>{title}</HeaderTitle>

            <MenuWrapper>
                <Menu>
                    <ListItem>Songs</ListItem>

                    <ListItem>Login</ListItem>

                    <ListItem>About</ListItem>
                </Menu>
            </MenuWrapper>
        </HeaderWrapper>
    );
}

export default Header;
