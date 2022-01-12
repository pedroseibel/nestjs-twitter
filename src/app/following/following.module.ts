import { Module } from '@nestjs/common';
import { FollowingService } from './following.service';
import { FollowingController } from './following.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FollowingController],
  providers: [FollowingService]
})
export class FollowingModule {}