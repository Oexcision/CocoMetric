import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FiBriefcase, FiUsers } from "react-icons/fi"



const items = [
  // { icon: FiHome, title: "Home", path: "/" },
  { icon: FiBriefcase, title: "Cocomo", path: "/cocomo" },
  { icon: FiBriefcase, title: "Cocomo II", path: "/cocomo-two" },
  { icon: FiBriefcase, title: "Puntos de Funcion", path: "/function-point" },
  { icon: FiBriefcase, title: "Use Case Point", path: "/use-case-point" },
  // { icon: FiHelpCircle, title: "Help", path: "/help" },
  //{ icon: FiSettings, title: "User Settings", path: "/settings" },
]

interface SidebarItemsProps {
  onClose?: () => void
}

const SidebarItems = ({ onClose }: SidebarItemsProps) => {
  const textColor = useColorModeValue("ui.main", "ui.light")
  //const bgActive = useColorModeValue("#E2E8F0", "#4A5568")
  const currentUser = {email:"oscare.c.s@hotmail.com",is_superuser:false}

  const finalItems = currentUser?.is_superuser
    ? [...items, { icon: FiUsers, title: "Admin", path: "/admin" }]
    : items

  const listItems = finalItems.map(({ icon, title, path }) => (
    <Flex
      as={Link}
      to={path}
      w="100%"
      p={2}
      key={title}
      color={textColor}
      onClick={onClose}
    >
      <Icon as={icon} alignSelf="center" />
      <Text ml={2}>{title}</Text>
    </Flex>
  ))

  return (
    <>
      <Box>{listItems}</Box>
    </>
  )
}

export default SidebarItems
