import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

  // Users
  const [users, setUsers] = useState(() => {

    const savedUsers = localStorage.getItem("quillUsers");

    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // Logged In User
  const [currentUser, setCurrentUser] = useState(() => {

    const savedUser = localStorage.getItem("quillCurrentUser");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Save Users
  useEffect(() => {
    localStorage.setItem(
      "quillUsers",
      JSON.stringify(users)
    );
  }, [users]);

  // Save Current User
  useEffect(() => {

    localStorage.setItem(
      "quillCurrentUser",
      JSON.stringify(currentUser)
    );

  }, [currentUser]);

  // Register
  const register = (userData) => {

    const existingUser = users.find(
      (user) => user.email === userData.email
    );

    if (existingUser) {
      return {
        success: false,
        message: "User already exists",
      };
    }

    setUsers([...users, userData]);

    setCurrentUser(userData);

    return {
      success: true,
    };
  };

  // Login
  const login = (email, password) => {

    const user = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!user) {
      return {
        success: false,
        message: "Invalid credentials",
      };
    }

    setCurrentUser(user);

    return {
      success: true,
    };
  };

  // Logout
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;