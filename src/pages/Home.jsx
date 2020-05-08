import React, { useContext } from 'react'
import { Search } from '../components/Search'
import { CardComponent } from '../components/CardComponent'
import { Row, Col, Spinner } from 'react-bootstrap'
import { GithubContext } from '../context/github/GithubContext'

export const Home = props => {
  const {loading, users} = useContext(GithubContext)
  return (
    <React.Fragment>
      <Search />
      <Row xs={2} md={4} lg={5} >
        {loading
          ? <Spinner  animation="border" />
          : users.map(user => (
                <Col sm={4} key={user.id}>
                  <CardComponent user={user} />
                </Col>
              )
            )
        }
      </Row>
    </React.Fragment>
  )
}