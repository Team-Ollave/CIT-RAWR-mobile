import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ipConfig from '../ipConfig';
import { useUserData } from '../userContext';

export default function useNotifications() {
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const {
    user: { id: userId },
  } = useUserData();
  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    const getNotifications = async () => {
      const { data } = await axios.get(`${ipConfig}/api/notifications`, {
        params: { user_id: userId },
      });

      const unseen = [];
      const seen = [];

      data.forEach((notif) => {
        if (notif.is_seen) seen.push(notif);
        else unseen.push(notif);
      });

      setNotifications([...unseen, ...seen]);
      setIsLoading(false);
    };

    const unsubscribe = navigation.addListener('focus', () => {
      getNotifications();
    });

    return unsubscribe;
  }, []);

  return {
    notifications,
    isLoading,
  };
}
