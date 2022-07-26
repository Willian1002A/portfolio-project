import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
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
function renderIcons(i,text) {
    switch(i) {
        case 0:
            return (<HomeIcon className="IconStyle" /> );
        case 1:
            return (<InfoIcon className="IconStyle" /> );
        case 2:
            return (<ArticleIcon className="IconStyle" /> );
        case 3:
            return (<span id={`icon${text}`} className="icon IconStyle"/>);
        case 4:
            return (<span id={`icon${text}`} className="icon IconStyle"/>);
        case 5:
            return (<span id={`icon${text}`} className="icon IconStyle"/>);
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
            {renderIcons(index,text)}
            <ListItemText>
                <p className="fontHeader withIcon">{text}</p>
            </ListItemText>
        </a>
    )
}