import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, SchemaTypes } from "mongoose";

export type UserDocument = HydratedDocument<User>


@Schema()
export class User {
    @Prop({required: false, type: SchemaTypes.String })
    name?: string;

    @Prop({required: false, type: SchemaTypes.String })
    email?: string;

    @Prop({required: false, type: SchemaTypes.String })
    phone?: string;

    @Prop({required: false, type: SchemaTypes.String })
    image?: string;
}

export const USerSchema = SchemaFactory.createForClass(User)