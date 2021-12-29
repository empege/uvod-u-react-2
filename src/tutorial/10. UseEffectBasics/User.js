import React from 'react'

const User = (props) => {

  const { login, avatar_url, id, html_url } = props;

  return (
    <article key={id} style={{ marginBottom: '50px' }}>
      <h3>{`Name: ${login}`}</h3>
      <img src={avatar_url} alt={login} width="250" />
      <br />
      <a href={html_url}>Check my profile</a>
    </article>
  )
}

export default User
