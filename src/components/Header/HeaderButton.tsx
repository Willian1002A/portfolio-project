import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CollectionsIcon from '@mui/icons-material/Collections';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CommentIcon from '@mui/icons-material/Comment';
import MailIcon from '@mui/icons-material/Mail';
interface HeaderButtonProps{
    index?: number;
    text?: string;
    href?: string;
    className?: string;
    onClick?: any;
    onPointerDown?: any;
    onTouchEnd?: any;
    onKeyDown?: any;
}
function renderIcons(i) {
    switch(i) {
        case 0:
            return (<HomeIcon className="IconStyle" /> );
        case 1:
            return (<InfoIcon className="IconStyle" /> );
        case 2:
            // return (<CollectionsIcon className="IconStyle" /> );
            return (<RestaurantMenuIcon className="IconStyle" /> );
        case 3:
            return (<RestaurantMenuIcon className="IconStyle" /> );
        case 4:
            return (<CommentIcon className="IconStyle" /> );
        case 5:
            return (<MailIcon className="IconStyle"/> );
        default:
            break;
    }
}
export default function HeaderButton(props: HeaderButtonProps) {
    const index = props.index;
    const text = props.text;
    const href = props.href;
    return(
        <a 
            onClick={props.onClick}
            onPointerDown={props.onPointerDown}
            onTouchEnd={props.onTouchEnd}
            onKeyDown={props.onKeyDown}
            href={href} key={text}
            className={`headerButtonStyle ${props.className}`}>
            {/* {renderIcons(index)} */}
            <ListItemText>
                <p className="fontHeader">{text}</p>
            </ListItemText>
        </a>
    )
}