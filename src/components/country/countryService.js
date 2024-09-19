
// Country related logic goes here

import AppError from "../../errors/AppError.js"

export const getCountries = async () => {
    
    // fetch from DB using model / 3rd Party Service
    const data = [{name: "Sri Lanka", code: "LK"}] 

    if(!data){
        throw new AppError("Not Found", 401)
    }

    return data
}

export const getCountryById = async (id) => {
    
    // fetch from DB using model / 3rd Party Service
    const data = null 
    
    if(!data){
        throw new AppError("Not Found", 401)
    }

    return data
}