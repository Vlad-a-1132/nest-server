"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
if (!process.env.NODE_ENV) {
    dotenv_1.default.config({
        path: `${process.env.npm_config_local_prefix}/.env`
    });
}
else {
    dotenv_1.default.config({
        path: `${process.env.npm_config_local_prefix}/.${process.env.NODE_ENV}.env`
    });
}
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        connection_string: process.env.DATABASE_CONNECTION_STRING,
        name: process.env.DATABASE_NAME,
    },
    cloudinary: {
        resolve_name: process.env.CLOUDINARY_CONFIG_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_CONFIG_API_KEY,
        api_secret: process.env.CLOUDINARY_CONFIG_API_SECRET
    },
    jwt: {
        token: process.env.JWT_SECRET_KEY,
        sign_options: {
            expires_in: process.env.JWT_OPTION_EXPIRES_IN
        }
    },
    static_data_storage: {
        cities_file: `${process.env.npm_config_local_prefix}/${process.env.DATABASE_CITIES_FILE}`
    }
});
//# sourceMappingURL=configuration.js.map