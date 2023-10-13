import { Injectable } from '@nestjs/common';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService:UsersService,
    private jwtService: JwtService){}
  async validateUser(email:string, pass:string):Promise<any>{
    const user = await this.userService.findByEmail(email);
    if(user && user.password === pass){
        const { password, ...result } = user.toObject();
        console.log("result ", result);
        return result;
    }
    return null;
}
async login(user:any){
  const payload = {
    
  }
}

  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
