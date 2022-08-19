import React from 'react'

const Notification = ({notification}) => {
    if (notification === null) {
        return null
    }
    const style = {
        color:notification.type === 'alert' ? 'green' : 'red',
        backgroundColor:notification.type === 'alert' ? 'lightgreen' : 'pink',
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