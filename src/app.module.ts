import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TweetModule } from './tweet/tweet.module';
import { FollowingModule } from './following/following.module';
import { FollowersModule } from './followers/followers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, TweetModule, FollowingModule, FollowersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
