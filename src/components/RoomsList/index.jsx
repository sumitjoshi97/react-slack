import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Room from './Room'
import Scrollbar from '../Scrollbar'

export default class RoomsList extends Component {
  static propTypes = {
    theme: PropTypes.object.isRequired
  }

  renderRooms = () => {
    const { rooms, theme } = this.props
    if (rooms) {
      return this.props.rooms.map(room => (
        <Room
          key={room.id}
          roomName={room.name}
          isCurrentRoom={this.props.currentRoom.id === room.id}
          setCurrentRoom={() => this.props.setCurrentRoom(room.id)}
          selectionColor={theme.secondaryBackground}
          hoverColor={theme.tertiaryBackground}
        />
      ))
    }
  }

  render() {
    const { theme } = this.props

    const styles = {
      listStyles: {
        background: theme.primaryBackground,
        color: theme.fontPrimary
      },
      buttonStyles: {
        background: theme.secondaryBackground,
        color: theme.fontPrimary
      }
    }
    return (
      <div className='column' style={styles.listStyles}>
        <div className='list-header'>Your Rooms</div>
        <ul className='list'>
          <Scrollbar thumbColor={theme.secondaryBackground} autoHide>
            {this.renderRooms()}
          </Scrollbar>
        </ul>
        <button
          className='add-btn'
          style={styles.buttonStyles}
          onClick={() => this.props.toggleDialog('room')}
        >
          create Room
        </button>
      </div>
    )
  }
}