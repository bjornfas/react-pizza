
export const onSetPrice = (i, price) => {
    switch(i) {
        case 1:
            return price + 200;
        case 2:
            return price + 400;
        default:
            return price;
    }
}

export const onSetSize = (i) => {
    switch(i) {
        case 1:
            return 30;
        case 2:
            return 40;
        default:
            return 26;
    }
}

export const onSetType = (i) => {
    switch(i) {
        case 1:
            return "традиционное";
        default:
            return "тонкое";
    }
}
 
