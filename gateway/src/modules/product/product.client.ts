import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class ProductClient implements OnModuleInit {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3002,
        host: 'localhost',
      },
    });
  }

  async onModuleInit() {
    await this.client.connect();
  }

  getAllProducts() {
    return this.client.send('findAllProduct', '');
  }

  getSingleProduct(id: number) {
    return this.client.send('findOneProduct', { id });
  }

  createProduct(product: any) {
    return this.client.send('createProduct', product);
  }
}
