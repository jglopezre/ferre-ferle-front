import { Button } from 'reactstrap';
import { CustomButtonProps } from '../../types';

// eslint-disable-next-line import/prefer-default-export
export function UserButton({ size, onClick }: CustomButtonProps) {
  return (
    <Button onClick={() => onClick()} color="primary" outline style={{ border: 'none' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </svg>
    </Button>
  );
}
