export const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}
export const getChunkSize = ({type, isCentered=false}) => {
    if(type=='products'){
        // console.log('type, window.innerWidth', type, isCentered)
        if(window.innerWidth >= 1024){
            return 6
        }else if(window.innerWidth < 1024 && window.innerWidth >= 768){
            return 3
        }else if(window.innerWidth < 768 && window.innerWidth >= 640){
            return 4
        }else{
            return 3
        }
    }else{
        if(window.innerWidth >= 1024){
            if(isCentered) return 5
            else return 4
        }else if(window.innerWidth < 1024 && window.innerWidth >= 640){
            return 4
        }else{
            return 3
        }
    }
}