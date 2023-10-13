import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
export type UserDocument = User & Document;
@Schema()
export class User {
  toObject(): { [x: string]: any; password: any; } {
    throw new Error('Method not implemented.');
  }
  @Prop({ default: uuidv4() })
  id: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  password: string;

  @Prop()
  role: 'user' | 'admin';

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now, set: (value) => (value ? value : Date.now()) })
  updatedAt: Date;

  @Prop({ default: null, type: Date })
  deletedAt: Date;
}
export const UserSchema = SchemaFactory.createForClass(User);