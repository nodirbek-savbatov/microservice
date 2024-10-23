import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule, CategoryModule, ChatModule, LocalizationModule, ProductModule } from '@modules';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'client'),
      serveRoot: '/static',
    }),
    JwtModule.register({
      global: true,
      secret: "may-secret-key",
      signOptions: {expiresIn: 120},
    }),
    MongooseModule.forRoot("mongodb://localhost:27017/microservice"),
    CategoryModule,
    ProductModule,
    ChatModule,
    LocalizationModule,
    AuthModule
  ],
})
export class AppModule {}
