import { Nav, NavItem, NavLink } from 'reactstrap';

const categories = ['category-1', 'category-2', 'category-3', 'category-4'];

// eslint-disable-next-line import/prefer-default-export
export function CategoriesBar() {
  // TODO: create logic for links deply, and add <Link/> to route to category

  return (
    <Nav fill className="bg-secondary">
      {categories.map((element: string) => (
        <NavItem key={element}>
          <NavLink className="text-black" href="#">
            {element}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
}
