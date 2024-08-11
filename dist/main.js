"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@nestjs/core");
const app_module_1 = require("app.module");
const config_1 = require("@nestjs/config");
const all_exception_filter_1 = require("common/filters/all-exception.filter");
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const compression_1 = tslib_1.__importDefault(require("compression"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('port');
    const corsOptions = {};
    const helmetOptions = {
        crossOriginEmbedderPolicy: false,
    };
    app.use((0, helmet_1.default)(helmetOptions));
    app.use((0, compression_1.default)());
    app.setGlobalPrefix('api');
    app.useGlobalFilters(new all_exception_filter_1.AllExeptionFilter());
    app.enableCors(corsOptions);
    await app.listen(port, () => {
        console.log(`Server is running http://localhost:${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map