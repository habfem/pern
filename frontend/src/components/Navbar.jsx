import React from 'react'
import styled from "styled-components"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core'
import { mobile, mobileXR, tablet } from '../responsive'

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
  ${mobileXR({ height: "50px" })};
  ${tablet({ height: "50px" })};
  }
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
  ${mobileXR({ padding: "10px 0px" })};
  ${tablet({ padding: "10px 0px" })};
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
  ${mobileXR({ padding: "10px 0px" })};
  ${tablet({ padding: "10px 0px" })};
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
  ${mobileXR({ width: "50px" })};
  ${tablet({ width: "50px" })};
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })};
  ${mobileXR({ fontSize: "24px" })};
  ${tablet({ fontSize: "24px" })};
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
  ${mobileXR({ flex: 2, justifyContent: "center" })};
  ${tablet({ flex: 2, justifyContent: "center" })};
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
  ${mobileXR({ fontSize: "12px", marginLeft: "10px" })};
  ${tablet({ fontSize: "12px", marginLeft: "10px" })};
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center><Logo>SELL.</Logo></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOG IN</MenuItem>
          <MenuItem>
            <Badge overlap="rectangular" badgeContent={4} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar