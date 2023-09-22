import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../../context/OrderContext"
import AdminPanel from "./AdminPanel/AdminPanel.jsx"
import AdminTabs from "./AdminTabs.jsx"
import { fadeInFromBottom } from "../../../../../../theme/animations"

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext)

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;

  animation: ${fadeInFromBottom} ease-in 500ms;
`
