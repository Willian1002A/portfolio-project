import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

type Anchor = 'left' | 'top';
const toggleDrawer = (anchor: Anchor, open: boolean, useState) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
    const [state, setState] = useState
    if ( event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')   ) {
        return;
    }
    setState({ ...state, [anchor]: open });
};
interface ToggleMenuProps {
    toggleDrawer?: any;
    useState?: any;
    className?: string;
    children?: any;
    anchor?: Anchor;
    toggle?:boolean
    id?: string;
}
export function ToggleDrawer(useState){
    return toggleDrawer("top", false, useState);
}
export function MenuButton (props: ToggleMenuProps) {
    return (
        <IconButton size={"small"} id={props.id} sx={{ color: '#D9D9D9', display: 'flex' }} onClick={toggleDrawer("top", true, props.useState)} edge="end" color="inherit" aria-label="menu">
            <MenuIcon fontSize="inherit" color='inherit'/>
        </IconButton>
    )
}
export function ToggleMenu(props: ToggleMenuProps) {
    const [state] = props.useState;
    return(
        <div className={props.className}>
            {
                (["top"] as const).map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false, props.useState)}
                            >
                                { props.children }
                            </Drawer>
                        </React.Fragment>
                    )
                )
            }
        </div>
    )
}
