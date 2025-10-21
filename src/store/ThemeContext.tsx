import React, { createContext, useState, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

// Định nghĩa "hình dạng" của Context
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// Tạo Context với giá trị mặc định (hoặc undefined)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Tạo Provider Component (Thành phần "Cha" bọc ứng dụng)
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
};

// Tạo Custom Hook để sử dụng Context (để component "Con" dễ dùng)
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme phải được dùng bên trong một ThemeProvider');
    }
    return context;
};