import HeaderButton from './HeaderButton';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { ToggleDrawer, MenuButton, ToggleMenu} from "./Toggle";
import ListItem from '@mui/material/ListItem';
import openCloseHeader from "../../core/openCloseHeader";
import * as React from 'react';
import LinkA from "../LinkA";
import headerContentPt from "../../assets/languages/pt/template/header.json";
import headerContentEn from "../../assets/languages/en/template/header.json";
import headerContentEs from "../../assets/languages/es/template/header.json";
import { useRouter } from 'next/router';
interface TypeHeaderProps{
    useState?: any;
}
interface headerProps{
    className?: string;
}
export function HorizontalHeader(props: headerProps){
    const { query } = useRouter();
    let hrefAtrib = "";
    if(query.idioma){
        hrefAtrib = "?idioma=" + query.idioma;
    }
    let headerContentTranslated = headerContentPt;
    switch(query.idioma){
      case "PT":
        headerContentTranslated = headerContentPt;
        break;
      case "EN":
        headerContentTranslated = headerContentEn;
        break;
      case "ES":
        headerContentTranslated = headerContentEs;
        break
      default:
        headerContentTranslated = headerContentTranslated;
    }
    return (
        <>
            <LinkA href={`/${headerContentTranslated[0]?.href + hrefAtrib}`} className="logo">
                Willian D’Amico
            </LinkA>
            <div className="links">
                <LinkA href={`/${headerContentTranslated[0]?.href + hrefAtrib}`} className="headerButton" targetOnNewTab={false}>
                    {headerContentTranslated[0]?.text}
                </LinkA>
                <LinkA href={`/${hrefAtrib + headerContentTranslated[1]?.href}`} className="headerButton" targetOnNewTab={false}>
                    {headerContentTranslated[1]?.text}
                </LinkA>
                <LinkA href={`/${headerContentTranslated[2]?.href + hrefAtrib}`} className="headerButton" targetOnNewTab={false}>
                    {headerContentTranslated[2]?.text}
                </LinkA>
            </div>
            <div className="languageButtons">
                <LinkA href={query.id ? query.id + headerContentTranslated[3]?.href : headerContentTranslated[3]?.href } className="headerLanguageButton">
                    {/* {headerContentTranslated[3]?.text} */}
                    <span title={headerContentTranslated[3]?.text} id="iconPT" className="icon"/>
                </LinkA>
                <LinkA href={query.id ? query.id + headerContentTranslated[4]?.href : headerContentTranslated[4]?.href } className="headerLanguageButton">
                    {/* {headerContentTranslated[4]?.text} */}
                    <span title={headerContentTranslated[4]?.text} id="iconEN" className="icon"/>

                </LinkA>
                <LinkA href={query.id ? query.id + headerContentTranslated[5]?.href : headerContentTranslated[5]?.href } className="headerLanguageButton">
                    {/* {headerContentTranslated[5]?.text} */}
                    <span title={headerContentTranslated[5]?.text} id="iconES" className="icon"/>
                </LinkA>
            </div>
        </>
    )
}
function SpecsMap(specs, headerElement){
    return specs.map((text, index) => (
        headerElement(text, index)
    ))
}
const specs = ['Home', 'Sobre', 'Projetos', 'PT', 'EN', 'ES'];
export function VerticalHeader(props: TypeHeaderProps){
    function LinkString(i) {
        const { query } = useRouter();
        let hrefAtrib = "";
        if(query.idioma){
            hrefAtrib = "?idioma=" + query.idioma;
        }
        let headerContentTranslated = headerContentPt;
        switch(query.idioma){
        case "PT":
            headerContentTranslated = headerContentPt;
            break;
        case "EN":
            headerContentTranslated = headerContentEn;
            break;
        case "ES":
            headerContentTranslated = headerContentEs;
            break
        default:
            headerContentTranslated = headerContentTranslated;
        }
        switch(i) {
            case 0:
                return `/${headerContentTranslated[0]?.href + hrefAtrib}`;
            case 1:
                return `/${hrefAtrib + headerContentTranslated[1]?.href}`;
            case 2:
                return `/${headerContentTranslated[2]?.href + hrefAtrib}`;
            case 3:
                return query.id ? query.id + headerContentTranslated[3]?.href : headerContentTranslated[3]?.href;
            case 4:
                return query.id ? query.id + headerContentTranslated[4]?.href : headerContentTranslated[4]?.href;
            case 5:
                return query.id ? query.id + headerContentTranslated[5]?.href : headerContentTranslated[5]?.href;
            default:
                break;
        }
    }
    const useState = React.useState({
        left: false,
        top: false
    });
    const headerElement = (text, index) => (
        <ListItem
            key={index}
            onClick={(obj) => openCloseHeader(false)}
            onKeyDown={(obj) => openCloseHeader(false)}
            button>
            <HeaderButton
                onClick={ToggleDrawer(useState)}
                onKeyDown={ToggleDrawer(useState)}
                index={index} text={text} href={LinkString(index)} />
        </ListItem>
    )
    return(
        <>
            <div className={`buttonExpandMenu`}>
                <MenuButton useState={useState}/>
            </div>
            <ToggleMenu useState={useState}>
                <Box
                    className="headerVerticalButtonStyle"
                    sx={{ width: "top" === 'top' ? 'auto' : 300 }}
                    role="presentation"
                >
                    {SpecsMap(specs, headerElement)}
                </Box>
            </ToggleMenu>
        </>
    )
}