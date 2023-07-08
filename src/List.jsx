import Item from './Item';

function List() {
   return (
      <>
         <h1>Minha lista</h1>
      <ul>
         <Item marca={"Ferrari"} anoLancamento={1985} />
         <Item marca={"Lamborghini"} anoLancamento={1920} />
         <Item marca={"Alfa Romeo"} anoLancamento={1930} />
         <Item />
      </ul>
      </>
   );
}

export default List;