import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FaUserAstronaut } from "react-icons/fa"
import { FiLogOut, /*FiUser,*/ FiHelpCircle } from "react-icons/fi"
//import { useAuthentication } from "../../context/AuthContext"

const UserMenu = () => {

  //const { logout } = useAuthentication()

  const handleLogout = async () => {
    //logout();
  }

  return (
    <>
      {/* Desktop */}
      <Box
        display={{ base: "none", md: "block" }}
        position="fixed"
        top={4}
        right={4}
      >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<FaUserAstronaut color="white" fontSize="18px" />}
            bg="ui.main"
            isRound
          />
          <MenuList>
            <MenuItem icon={<FiHelpCircle fontSize="18px" />} as={Link} to="help">
              Help
            </MenuItem>
            <MenuItem
              icon={<FiLogOut fontSize="18px" />}
              onClick={handleLogout}
              color="ui.danger"
              fontWeight="bold"
            >
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  )
}

export default UserMenu
