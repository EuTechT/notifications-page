function init(){
  const numberOfNotifications = document.getElementById('number-of-notifications')
  const btnMarkAllAsRead = document.getElementById('mark-all-as-read')
  const notifications = document.querySelectorAll('.notification')
  
  numberOfNotifications.innerText = notifications.length
  
  btnMarkAllAsRead.addEventListener('click', () => {
    notifications.forEach(notification => {
      notification.classList.add('read')
      numberOfNotifications.innerText = 0
    })
  })

  notifications.forEach(notification => {
    notification.addEventListener('click', () => {
      if(notification.classList.contains('read')){
        return
      }
      notification.classList.add('read')
      numberOfNotifications.innerText -= 1
    })
  })
}

init()