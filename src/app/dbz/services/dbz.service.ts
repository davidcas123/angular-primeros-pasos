import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000,
    },
  ];

  addCharacter(character: Character): void {
    console.log('MainPage');
    console.log(character);
    //{id: uuid(), ...character} Indica que toma todas las propiedades del objeto character y las esparce en el nuevo objeto que se creo
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };

    this.characters.push(newCharacter);
  }

  /*onDeleteCharacter(index: number) {
    console.log(index);
    this.characters.splice(index, 1);
  }*/

  //filter regresa un nuevo arreglo donde el character.id debe ser diferente a l id
  deleteCharacterById(id: string){
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
