
// Business Logic goes here

import AppError from "../../errors/AppError.js"

export const getCountries = async () => {
    
    // fetch from DB using model / 3rd Party API
    const data = [{name: "Sri Lanka", code: "LK"}] 

    if(!data){
        throw new AppError("Not Found", 404)
    }

    return data
}

export const getCountryById = async (id) => {
    
    // fetch from DB using model / 3rd Party API
    const data = null

    if (id === "ERROR_ID") {
        throw new AppError("Custom Error", 400)
    }

    if (id === "1"){
        return {id: "1", country: "Sri Lanka", code: "LK"}
    } else {
        throw new AppError("Not Found", 404, false)
    }
}