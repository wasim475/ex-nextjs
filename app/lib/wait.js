import { resolve } from 'styled-jsx/css'

export const wait = async (millisec)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve()
        }, millisec);
    })
}