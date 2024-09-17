import AppError from "../../common/errors/AppError"

// Country related logic goes here

export const getCountries = async () => {
    
    // fetch from DB using model / 3rd Party Service
    const data = [{name: "Sri Lanka", code: "LK"}] 

    if(!data){
        throw new AppError("Not Found", 401)
    }

    return data
}