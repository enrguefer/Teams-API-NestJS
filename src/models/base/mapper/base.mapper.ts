import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { BaseEntity } from 'src/models/base/entity/base.entity.model';
import { BaseDTO } from 'src/models/base/dto/base.dto.model';

/**
 * Mapper para transformaciones de objetos entre los tipos BaseDTO y BaseEntity
 * 
 * @see https://nartc.me/blog/automapper-nestjs
 * @author Enrique Guerrero Fernández
 * @version 1
 */
@Injectable()
export class BaseMapper extends AutomapperProfile {

  constructor(@InjectMapper() readonly mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper : Mapper) => {

      mapper.createMap(BaseEntity, BaseDTO, {})
        .forMember( dest => dest._id, mapFrom( src => src._id ) )

      mapper.createMap(BaseDTO, BaseEntity, {})
        .forMember( dest => dest._id, mapFrom( src => src._id ) )
    }
  }

}