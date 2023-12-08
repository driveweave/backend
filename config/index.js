
require('dotenv').config()

module.exports = {
    DB_URL: process.env.DB_URL,
    PORT: process.env.PORT,
    USER_JWT_SECRET: process.env.USER_JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    COOKIE_PARSER_SECRET: process.env.COOKIE_PARSER_SECRET,
    API_DOMAIN_NAME: process.env.API_DOMAIN_NAME,
    
    CONSTANTS: {
        EMAIL_DELIVERY_STATUS: {
            PENDING: 'pending',
            DELIVERED: 'delivered',
            FAILED: 'failed'
        },
        GENERATED_LINK_REASON: {
            RESET_PASSWORD: 'reset-password',
            EMAIL_VERIFICATION: 'email-verification'
        },
    },
    ORGANISATION_EMAIL_ADDRESS: process.env.ORGANISATION_EMAIL_ADDRESS,
    ORGANISATION_EMAIL_PASSWORD: process.env.ORGANISATION_EMAIL_PASSWORD,
    ORGANISATION_MAIL_HOST: process.env.ORGANISATION_MAIL_HOST
}