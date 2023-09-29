import { useContext } from 'react';
import { Button } from 'reactstrap';
import { CustomButtonProps } from '../../types';
import { CartContext } from '../../contexts';
import styles from '../../scss/cartButton.module.scss';

// eslint-disable-next-line import/prefer-default-export
export function CartButton({ size, onClick }: CustomButtonProps) {
  const { state } = useContext(CartContext);

  return (
    <div className={styles.buttonHolder}>
      <Button onClick={() => onClick()} color="primary" outline style={{ border: 'none', height: '100%' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div hidden={state.length === 0} className={styles.circleNumber}>
          {state.length > 9 ? '+9' : state.length}
        </div>
      </Button>
    </div>
  );
}
