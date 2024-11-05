import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    email   : string;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ required: true })
    name    : string;

    @Prop({ minlength: 6, required: true })
    password: string;

    @Prop({ default: ['User'], type: [String] })
    roles   : string[]
}

export const UserSchema = SchemaFactory.createForClass(User);
