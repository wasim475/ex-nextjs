

export const wait = async (millisec)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve()
        }, millisec);
    })
}