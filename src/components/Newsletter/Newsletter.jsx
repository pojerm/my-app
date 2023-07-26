import React from 'react'
import mobileImage from '../../assets/illustration-sign-up-mobile.svg'
import { Form } from '../Form/Form'
import { Button } from '../Button/Button'
import { Title } from '../Title/Title'
import { Subtitle } from '../Subtitle/Subtitle'
import { List } from '../List/List'
import { Image } from '../Image/Image'


export const Newsletter = () => {
  return (
    <>
      <header>
        <Image />
      </header>
      <section>
        <Title />
        <Subtitle />
        <List />
        <Form />
        <Button />
      </section>
    </>
  )
}
