import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Even though you're broke, now it's easier than ever before to give
         the last dollars in your back account to this overpriced restaurant!
      </Paragraph>
      <Button
        mode="contained"
        onPress={() =>
          // navigation.reset({
          //   index: 0,
          //   routes: [{ name: 'TableScreen' }],
          // })
              navigation.navigate('TableScreen')
        }
      >
        Continue
      </Button>
    </Background>
  )
}
