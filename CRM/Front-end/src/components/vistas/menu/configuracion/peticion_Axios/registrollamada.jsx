import Axios from "axios"
export const getEnero = async(setEnero)=>{
    try {
        const res = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/enero`);
        setEnero(res.data)
    } catch (error) {
        console.error("error enero",error);
    }
}
export const getFebrero = async(setFebrero)=>{
    try {
        const res = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/febrero`);
        setFebrero(res.data)
    } catch (error) {
        console.error("error enero",error);
    }
}
export const getMarzo= async(setMarzo)=>{
    try {
        const res = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/marzo`);
        setMarzo(res.data)
    } catch (error) {
        console.error("error enero",error);
    }
}
export const getAbril = async(setAbril)=>{
    try {
        const res = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/abril`);
        setAbril(res.data)
    } catch (error) {
        console.error("error enero",error);
    }
}
export const getMayo = async(setMayo)=>{
    try {
        const res = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/mayo`);
        setMayo(res.data)
    } catch (error) {
        console.error("error enero",error);
    }
}
export const getJunio = async(setJunio)=>{
    try {
        const res = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/junio`);
        setJunio(res.data)
    } catch (error) {
        console.error("error e",error);
    }
}
export const getJulio = async(setJulio)=>{
    try {
        const res = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/julio`);
        setJulio(res.data)
    } catch (error) {
        console.error("error enero",error);
    }
}
export const getAgosto = async(setAgosto)=>{
    try {
        const res = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/agosto`);
        setAgosto(res.data)
    } catch (error) {
        console.error("error enero",error);
    }
}
export const getSeptiembre = async(setSeptiembre)=>{
    try {
        const res = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/septiembre`);
        setSeptiembre(res.data)
    } catch (error) {
        console.error("error enero",error);
    }
}
export const getOctumbre = async(setOcumbre)=>{
    try {
        const res = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/octumbre`);
        setOcumbre(res.data)
    } catch (error) {
        console.error("error octumbre",error);
    }
}
export const getNoviembre = async(setNoviembre)=>{
    try {
        const res = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/noviembre`);
        setNoviembre(res.data)
    } catch (error) {
        console.error("error enero",error);
    }
}
export const getDiciembre = async(setDiciembre)=>{
    try {
        const res = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/diciembre`);
        setDiciembre(res.data)
    } catch (error) {
        console.error("error enero",error);
    }
}