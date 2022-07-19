export interface HomeProps{
    props: {id?:string} 
}

export interface MenuProps{
    imgProps: {imgNum:string, column:{startColumn:number,lastColumn:number},row:{startRow:number,lastRow:number}},
    textProps: {column:{startColumn:number,lastColumn:number},row:{startRow:number,lastRow:number}}, 
}

export interface AwardProps{
    props: {id?:string},
    children: React.ReactNode;
 }

export interface ImgProps {
    imgProps: {imgNum:string} 
}

