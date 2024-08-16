export default defineNuxtPlugin(() => {
    if (typeof window !== 'undefined') {
      const userConfig = useState('userConfig').value;
      const storedData = localStorage.getItem('userConfigStore');
      if (storedData) {
        Object.assign(userConfig, JSON.parse(storedData));
      }
    }
  });
  