import React from 'react'
import { Card } from 'react-bootstrap'

export const Repos = ({repos}) => (
  <React.Fragment>
    {repos.map(repo => (
      <Card className='mb-3' key={repo.id}>
        <Card.Body>
          <h5>
            <a 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
          </h5>
        </Card.Body>
      </Card>
    ))}
  </React.Fragment>
)