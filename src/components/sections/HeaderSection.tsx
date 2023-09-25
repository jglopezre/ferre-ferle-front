import { CategoriesBar } from '../bars/CategoriesBar';
import { MainBar } from '../bars/MainBar';

// eslint-disable-next-line import/prefer-default-export
export function HeaderSection() {
  return (
    <header>
      <MainBar />
      <CategoriesBar />
    </header>
  );
}
