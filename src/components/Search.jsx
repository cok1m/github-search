import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { AlertContext } from "../context/alert/AlertContext";
import { GithubContext } from "../context/github/GithubContext";

export const Search = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }

    github.clearUsers()

    if (value.trim()) {
      github.search(value)
      alert.hide()
    } else {
      alert.show('Введите данные пользователя')
    }
  }

  
  return (
      <Form.Group controlId="formGroupNickName">
        <Form.Label>Введите ник пользователя</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Введите ник пользователя" 
          onKeyPress={onSubmit} 
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
  );
};
