import propTypes from 'prop-types';

function Item({marca, anoLancamento}) {
   return (
      <>
         <li>
            <p>{marca} - {anoLancamento}</p>
         </li>
      </>
   );
}

Item.propTypes = {
   marca: propTypes.string,
   anoLancamento: propTypes.number
}

Item.defaultProps = {
   marca: "Sem teu cu, ta procurando oque curioso do caral**",
   anoLancamento: 0
}

export default Item;