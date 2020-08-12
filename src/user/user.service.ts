import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository, Repository, QldbQuery } from 'nest-qldb';
import { User } from './user';

@Injectable()
export class UserService {
  private readonly loger: Logger;
  constructor(
    @InjectRepository(User) readonly userRepository: Repository<User>,
  ) {
    this.loger = new Logger(UserService.name);
  }

  async get(qldbId: string) {
    return await this.userRepository.retrieve(qldbId);
  }

  async put(qldbId: string, user: User) {
    await this.userRepository.replace(qldbId, user);
  }

  async post(user: User) {
    return await this.userRepository.create(user);
  }

  async delete(qldbId: string) {
    return await this.userRepository.destroy(qldbId);
  }

  async history(qldbId: string) {
    return await this.userRepository.history(qldbId);
  }

  async query(query: QldbQuery<User>) {
    return await this.userRepository.query(query);
  }
}
