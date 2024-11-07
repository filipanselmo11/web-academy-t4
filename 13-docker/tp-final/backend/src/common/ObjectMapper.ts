abstract class ObjectMapper<K, V> {

  public async mapearLista(listaOrigem: K[]): Promise<V[]> {
      const listaDestino: V[] = [];

      for(let origem of listaOrigem){
          const destino = await this.mapear(origem);
          listaDestino.push(destino);
      }

      return listaDestino;
  }

  public abstract mapear(origem: K): Promise<V>;

}

export { ObjectMapper };