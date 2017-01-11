import { AppCotnainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import Main from './main'

const root = document.querySelector('#app')

render(<Main />, root)

if (module.hot) {
  module.hot.accept('./main', () => {
    const NextMain = require('./main').default
    ReactDOM.render(
      <AppCotnainer>
        <NextMain />
      </AppCotnainer>,
      root
    )
  })
}
