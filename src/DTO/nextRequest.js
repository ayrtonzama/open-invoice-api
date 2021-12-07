function handler(code=200,success=true,message="Success",data,){
    let obj={
        code:code,
        message:message,
        success:success
    }
    if(data){
        obj.data=data
    }
    return obj
}
module.exports =handler