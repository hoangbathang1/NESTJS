"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.enableCors();
    const document = swagger_1.SwaggerModule.createDocument(app, new swagger_1.DocumentBuilder()
        .setTitle('API AUTH')
        .setDescription('Description')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        name: 'Authorization',
        scheme: 'bearer',
        bearerFormat: 'JWT',
    }, 'authorization')
        .build());
    swagger_1.SwaggerModule.setup('/docs', app, document);
    await app.listen(8888);
}
bootstrap();
//# sourceMappingURL=main.js.map