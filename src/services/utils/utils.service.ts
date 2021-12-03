
export class utilsService {

    /**
     * Genera un número aleatorio dentro del intervalo [min, max]
     * @param min 
     * @param max 
     * @returns number
     */
    static randomNumberBetween ( min : number, max: number) : number {
        return Math.floor(
            Math.random() * (max - min + 1) + min
          )
    }
}