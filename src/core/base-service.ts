import { Logger } from '@nestjs/common';
import { Repository, QldbQuery } from 'nest-qldb';

export class BaseService<T> {
  private readonly logger: Logger;
  constructor(protected readonly repository: Repository<T>) {
    this.logger = new Logger(BaseService.name);
  }

  async get(qldbId: string) {
    return await this.repository.retrieve(qldbId);
  }

  async put(qldbId: string, app: T) {
    await this.repository.replace(qldbId, app);
  }

  async post(app: T) {
    return await this.repository.create(app);
  }

  async delete(qldbId: string) {
    return await this.repository.destroy(qldbId);
  }

  async history(qldbId: string) {
    return await this.repository.history(qldbId);
  }

  async query(query: QldbQuery<T>) {
    return await this.repository.query(query);
  }
}
