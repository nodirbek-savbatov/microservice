import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStratgy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '948951975653-cefae25ghdbe772bcref0l2lg1nam9fl.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }



  async validate(
    accesToken: string,
    refreshToken: string,
    profile: any,
    cb: VerifyCallback,
  ) {
    return cb(null,{...profile,accesToken,refreshToken});
  }
}
