import React from 'react'

const Notification = ({notification}) => {
    if (notification === null) {
        return null
    }
    const style = {
        color:notification.type === 'error' ? 'red' : 'green',
        backgroundColor:notification.type === 'error' ? 'pink' : 'lightblue',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        borderWidth: '1px',
        borderColor: 'black',
        padding: '10px',
        marginBottom: '10px',
        marginTop: '10px',
        textAlign: 'center'
    }
  return (
    <div style={style}>{notification.message}</div>
  )
}

export default Notification