import React, { useRef, useEffect, useState} from 'react';

const useLayOut = () => {
    const [columns, setColumns] = useState(1);    

    useEffect(() => {    
        let numberColumns;    
        const curWidth = document.body.clientWidth;

        switch (true) {
            case curWidth < 768: numberColumns = 1;
                break;
            case curWidth > 767 && curWidth < 992: numberColumns = 3;
                break;
            case curWidth > 991 && curWidth < 1440: numberColumns = 4;
                break;
            case curWidth > 1439 : numberColumns = 6;
                break;
            default: numberColumns = 1;
        }
        setColumns(numberColumns);      
    })

    return columns
}

export default useLayOut;