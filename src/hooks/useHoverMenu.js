import { useCallback, useState } from 'react';

function useHoverMenu(config) {
    const [anchorEl, setAnchorEl] = useState(null);
    const { menuId, onMenuOpen, onMenuClose } = config || {};

    if (!menuId) throw new Error('You must specify a menu id on <Menu /> component and pass it on useHoverMenu hook');

    const openMenu = useCallback(function (e) {
        setAnchorEl(e.currentTarget);
        if (typeof onMenuOpen === 'function') onMenuOpen(e);
    }, []);

    const closeMenu = useCallback(function (e) {
        if (e.currentTarget.localName !== 'ul') {
            const menu = document.getElementById(menuId).children[2];
            const menuBoundary = {
                left: menu.offsetLeft,
                top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
                right: menu.offsetLeft + menu.offsetHeight,
                bottom: menu.offsetTop + menu.offsetHeight,
            };

            if (
                e.clientX >= menuBoundary.left &&
                e.clientX <= menuBoundary.right &&
                e.clientY <= menuBoundary.bottom &&
                e.clientY >= menuBoundary.top
            ) {
                return;
            }
        }

        setAnchorEl(null);
        if (typeof onMenuClose === 'function') onMenuClose();
    }, []);

    return { anchorEl, openMenu, closeMenu };
}

export default useHoverMenu;
