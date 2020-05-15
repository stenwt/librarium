import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from "../../../components/Link";

const MenuNode = styled.div`
  color: #78909c;
  margin: 20px 0;

  .svg-inline--fa {
    margin-right: 10px;
  }
  ${props => props.active && css`
    > a {
      color: #4432F5;
    }
  `}
`;

const ChildrenItems = styled.div`
  margin: 10px 0 10px 26px;

  ${MenuNode} {
    margin: 5px 0;
  }
`;

const TreeNode = ({ url, title, items = [], icon, hiddenFromNav, config = {gatsby: {}} }) => {
  if (hiddenFromNav) {
    return null;
  }
  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const expanded =
    !url || location && (location.pathname.startsWith(url) || location.pathname.startsWith(config.gatsby.pathPrefix + url));

  let isActive = false
  if (expanded) {
    isActive = true;
  }

  if (url === '/' && location.pathname !== "/") {
    isActive = false;
  }

  return (
    <MenuNode active={isActive}>
      {title && (
        <Link to={url}>
          {icon && <FontAwesomeIcon icon={icon} />}
          {title}
        </Link>
      )}
      {expanded && hasChildren ? (
        <ChildrenItems>
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              {...item}
            />
          ))}
        </ChildrenItems>
      ) : null}
    </MenuNode>
  );
};

export default TreeNode;
