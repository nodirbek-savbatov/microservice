import { InjectModel } from '@nestjs/mongoose';
import { User } from './models';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwt: JwtService,
  ) {}

  async googleAuth(req: any) {
    console.log(req.user);
    const foundedUser = await this.userModel.findOne({email: req.user.emails[0].value})
    if(foundedUser){
        const accesToken = this.jwt.sign(
            { id: foundedUser.id, name: foundedUser.name },
            { secret: 'my-secret-key' },
          );
          return {
            accesToken,
            user: foundedUser,
            isNew: false,
        };
    }

    const newUser = await this.userModel.create({
      name: req.user.displayName,
      email: req.user.emails[0].value,
      image: req.user.photos[0].value,
    });
    const accesToken = this.jwt.sign(
      { id: newUser.id, name: newUser.name },
      { secret: 'my-secret-key' },
    );
    return {
        accesToken,
        user: newUser,
        isNew: true,
    };
  }
}
