import React from "react"

import { Form, Button, InputGroup } from "react-bootstrap"

import unsplash from "../api/Api"

function SearchBar(props) {
  const [query, setQuery] = React.useState("")

  const searchPhotos = async (e) => {
    e.preventDefault()
    console.log("submitting")

    unsplash.search
      .getPhotos({
        query: query,
        page: 1,
        perPage: 10,
      })
      .then((response) => {
        props.onResponseReturn(response.response.results)
      })
  }

  return (
    <>
      <Form onSubmit={searchPhotos}>
        <InputGroup>
          <InputGroup.Prepend>
            <Button className="btn-search" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 2 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </InputGroup.Prepend>
          <Form.Control
            className="form-control"
            type="text"
            placeholder="Search Here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputGroup>
      </Form>
      <hr />
    </>
  )
}

export default SearchBar
