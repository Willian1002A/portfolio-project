let aux = false;// Esta solução que foi utilizada para desktop não funciona muito bem em dispositivos moveis
// export default function openCloseHeader(filter, obj?:any, click=false) {
export default function openCloseHeader(filter, click=false) {
    const internalHeader = document.querySelector(`.internalHeader`);
    const maxHeightScroll = document.scrollingElement.scrollHeight;
    // const actualHeight = obj?.pageY || document.scrollingElement.scrollTop;
    const actualHeight = document.scrollingElement.scrollTop;
    const actualPorcentScrollHeight = actualHeight/maxHeightScroll;
    const maxPorcentScrollHeight = 0.04;
    if(internalHeader){
        if((filter || aux) || actualPorcentScrollHeight < maxPorcentScrollHeight){
            internalHeader.classList.remove("h-0");
            internalHeader.classList.add("h-full");
        }else if(actualHeight > 100){//Esta lógica Necessita melhoria.
            internalHeader.classList.remove("h-full");
            internalHeader.classList.add("h-0");
        }
    }
    aux=click;
}