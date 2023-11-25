const dotenv = require('dotenv')

dotenv.config()

const ENV = process.env.NODE_ENV || "development"

if (ENV === "development") {
    dotenv.config({ path: ".env.development" })
} else {
    dotenv.config({ path: ".env.production" })
}


const CONFIG = {
    development: {
        app: {
            PORT: process.env.PORT || 4005
        },
        db: {
            URL: process.env.MySQL_URL
        }
    },
    production: {
        app: {
            PORT: process.env.PORT || 4006
        },
        db: {
            URL: process.env.MySQL_URL
        }
    }
}

module.exports = CONFIG[ENV]