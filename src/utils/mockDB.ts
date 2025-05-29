// This file is used to mock a database using localStorage.
// It provides functions to save and retrieve user data.
export type UserData = {
    name: string;
    timezone: string;
    profession: string;
    yearsOfExperience: string;
    languages: string[];
    skills: string[];
  };
  
  const STORAGE_KEY = "mockDB";
  
  // Helper to get the full DB object from localStorage
  function getDB(): { [userId: string]: UserData } {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  }
  
  // Save the full DB object back to localStorage
  function setDB(db: { [userId: string]: UserData }) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  }
  
  // Save or update a user's data
  export function saveUserData(userId: string, data: UserData) {
    const db = getDB();
    db[userId] = data;
    setDB(db);
  }
  
  // Retrieve a user's data
  export function getUserData(userId: string): UserData | undefined {
    const db = getDB();
    return db[userId];
  }
  