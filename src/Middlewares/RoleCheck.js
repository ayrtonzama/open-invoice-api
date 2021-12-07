const { UnauthorizedError } = require("express-jwt")

exports.RoleChecks=(role,allowed=['ADM','EMP'],next)=>{

    if(allowed.includes(role)){

        next()
    }else{
        throw UnauthorizedError;
    }

}