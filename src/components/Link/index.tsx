import React from "react";
import NextLink from 'next/link'
import PropTypes from 'prop-types'

const Link = ({href, children}) => {
  return (
    <NextLink href={href} passHref>
      <a>
        {children}
      </a>
    </NextLink>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Link