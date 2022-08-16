import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {
  faHouse,
  faLocationArrow,
  faBorderAll,
  faCompass,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Icon = styled.div`
  margin-left: 22px;
  > svg {
    height: 24px;
    width: 24px;
  }
`;
const Nav = styled.nav`
  display: flex;
  padding-left: 24px;
`;
function IconNav() {
  return (
    <Nav>
      <Icon>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </Icon>
      <Icon>
        <Link to="/">
          <FontAwesomeIcon icon={faLocationArrow} />
        </Link>
      </Icon>
      <Icon>
        <Link to="/">
          <FontAwesomeIcon icon={faBorderAll} />
        </Link>
      </Icon>
      <Icon>
        <Link to="/">
          <FontAwesomeIcon icon={faCompass} />
        </Link>
      </Icon>
      <Icon>
        <Link to="/">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
      </Icon>
    </Nav>
  );
}
export default IconNav;
