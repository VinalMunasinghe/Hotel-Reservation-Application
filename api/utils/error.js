export const CreateError = (status, message) => {
    const err=new Error()
    err.status = 404
    err.message="Not Found"
}