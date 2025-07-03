import React from 'react'

const Footer = () => {
  return (
    <footer className=" bg-gray-100 text-center py-4 text-sm text-gray-600 fixed bottom-0 left-0 w-full">
      © {new Date().getFullYear()} SneakBazar. All rights reserved.
    </footer>
  )
}

export default Footer