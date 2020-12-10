import moment from 'moment';

export const reservationStatusTypes = {
  PENDING: 'P',
  ACCEPTED: 'A',
  DECLINED: 'D',
};

export const formatTime = (time) =>
  moment(`${new Date().toDateString()} ${time}`).format('h:mm A');
