import React, { useContext, useEffect } from 'react'
import { GithubContext } from '../context/github/GithubContext'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Badge } from 'react-bootstrap'
import { Repos } from '../components/Repos'

export const Profile = ({match}) => {
  const github = useContext(GithubContext)

  useEffect(() => {
      github.getUser(match.params.name)
      github.getRepos(match.params.name)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  if (github.loading) {
    return <p className="text-center">Загрузка...</p>
  }

  const {
    name, company, avatar_url, 
    location, bio, blog, 
    login, html_url,
    following, followers, public_repos, public_gists
  } = github.user

  return (
    <>
      <Link to="/" className="btn btn-link">На главную</Link>

      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col className="text-center" sm={3}>
              <img src={avatar_url} alt={name} 
                style={{width: 150}}
              />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </Col>
            <Col>
              {
                bio && <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              }
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href={html_url} 
                className="btn btn-dark" 
              >
                Открыть профиль
              </a>
              <ul>
                {login && <li>
                  <strong>Username: </strong> {login}
                </li>}
                {company && <li>
                  <strong>Company: </strong> {company}
                </li>}
                {blog && <li>
                  <strong>Website: </strong> {blog}
                </li>}
              </ul>

              <Badge variant="primary">Подписчики: {followers}</Badge>
              <Badge variant="success">Подписан: {following}</Badge>
              <Badge variant="info">Репозитории: {public_repos}</Badge>
              <Badge variant="dark">Gists: {public_gists}</Badge>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Repos repos={github.repos} />
    </>
  )
}