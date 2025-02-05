import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GroupedData<T> {
  group: string;
  items: T[];
}

export const groupBy = <T, K extends keyof T>(
  data: T[],
  key: K,
): GroupedData<T>[] => {
  const grouped = data.reduce((result: { [key: string]: T[] }, item: T) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});

  return Object.keys(grouped).map((group) => ({
    group,
    items: grouped[group],
  }));
};

export const getInitials = (name: string): string => {
  return name
    .split(' ') // Memisahkan nama berdasarkan spasi
    .filter((part) => part.length > 0) // Menghapus bagian kosong
    .map((part) => part[0].toUpperCase()) // Mengambil huruf pertama dan mengubahnya menjadi huruf besar
    .slice(0, 2) // Mengambil 2 huruf pertama
    .join(''); // Menggabungkan menjadi string
};

export const generatePassword = (
  length: number,
  options: {
    uppercase?: boolean;
    numbers?: boolean;
    specialChars?: boolean;
  } = {},
): string => {
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '!@#$%&?';

  let characterPool = lowerCaseChars;

  if (options.uppercase) {
    characterPool += upperCaseChars;
  }

  if (options.numbers) {
    characterPool += numberChars;
  }

  if (options.specialChars) {
    characterPool += specialChars;
  }

  if (!characterPool) {
    throw new Error(
      'Character pool is empty. Please enable at least one option.',
    );
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  return password;
};
