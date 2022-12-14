class AppError extends Error {
    statusCode: number
    error: string

    constructor(message: string, statusCode?: number, error: boolean = false){
        super()
        this.message = message
        this.statusCode = statusCode || 400
    }
}

export default AppError