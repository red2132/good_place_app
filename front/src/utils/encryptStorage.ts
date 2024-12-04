import EncryptedStorage from 'react-native-encrypted-storage';

/** 로그인 토큰을 스토리지에 저장하는 함수*/
const setEncryptStorage = async <T>(key: string, data: T) => {
  await EncryptedStorage.setItem(key, JSON.stringify(data));
};

/** 토큰 체크 함수 */
const getEncryptStorage = async (key: string) => {
  const storedData = await EncryptedStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
};

/** 토큰 제거 함수 */
const removeEncryptStorage = async (key: string) => {
  const storedData = await EncryptedStorage.getItem(key);
  if (storedData) {
    await EncryptedStorage.removeItem(key);
  }
};

export {setEncryptStorage, getEncryptStorage, removeEncryptStorage};
