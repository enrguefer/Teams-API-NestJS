import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '¡Bienvenido a la Api de Equipos! Autor: Enrique Guerrero';
  }
}
