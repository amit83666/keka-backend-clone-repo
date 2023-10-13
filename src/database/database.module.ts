import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[
        MongooseModule.forRoot(`mongodb+srv://kekaUser:kekaPass@atlascluster.lb71le6.mongodb.net/kekaDBretryWrites=true&w=majority`)
    ],
    exports:[MongooseModule]
})
export class DatabaseModule {}
