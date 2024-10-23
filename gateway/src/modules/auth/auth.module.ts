import { Module } from "@nestjs/common";
import { GoogleStratgy } from "./strategies";
import { AuthService } from "./auth.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, USerSchema } from "./models";
import { AuthController } from "./auth.controller";

@Module({
    imports: [MongooseModule.forFeature([{name: User.name, schema: USerSchema}]),
],
    providers: [GoogleStratgy,AuthService],
    controllers: [AuthController]
})
export class AuthModule{}