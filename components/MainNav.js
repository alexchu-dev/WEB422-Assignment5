/**************************************************************************************
 *  WEB422 – Assignment 4   Name: Alex Chu    Student ID: 153954219   Date: 2 Jul 2023
 *************************************************************************************/
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"

export default function MainNav() {
  const router = useRouter()
  //This form is using Controlled Component with useState. To see the demonstration of using React-Hook-Form, please check /pages/search.js
  const [keyword, setKeyword] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }
  function submitForm(e) {
    e.preventDefault()
    setIsExpanded(false)
    router.push(`/artwork?title=true&q=${keyword}`)
  }

  return (
    <>
      <Navbar
        bg="secondary"
        data-bs-theme="light"
        expand="lg"
        expanded={isExpanded}
      >
        <Container>
          <Navbar.Brand>
            <Link href="https://alexchu.dev" passHref legacyBehavior>
              <Nav.Link onClick={() => setIsExpanded(false)}>Alex Chu</Nav.Link>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleExpand}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link onClick={() => setIsExpanded(false)}>Home</Nav.Link>
              </Link>
              <Link href="/search" passHref legacyBehavior>
                <Nav.Link onClick={() => setIsExpanded(false)}>
                  Advanced Search
                </Nav.Link>
              </Link>
            </Nav>
            &nbsp;
            <Form className="d-flex" onSubmit={submitForm}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Button
                type="submit"
                variant="secondary"
                onClick={() => setIsExpanded(false)}
              >
                Search
              </Button>
            </Form>
            &nbsp;
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  )
}
