import { Flex, Spinner } from "@chakra-ui/react"
import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";

const Layout = () =>{
    const  isLoading  = false;
    
    return (
        <Flex maxW="large" h="auto" position="relative">
          <Sidebar />
          {isLoading ? (
            <Flex justify="center" align="center" height="100vh" width="full">
              <Spinner size="xl" color="ui.main" />
            </Flex>
          ) : (
            <Outlet />
          )}
        </Flex>
      )
}

export default Layout