import React from 'react';
// Import Provider từ store
import { ThemeProvider, useTheme } from './store/ThemeContext';
// Import Feature component
import { ProductList } from './features/products/ProductList';
// Import Hook (để demo)
import { useToggle } from './hooks/useToggle';

// Component con để demo đổi theme
const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [showMsg, toggleShowMsg] = useToggle(false); // Dùng custom hook

    return (
        <div style={{ padding: '10px', borderBottom: '1Gg solid #ccc' }}>
        <button onClick={toggleTheme}>
            Đổi sang {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>

        <button onClick={toggleShowMsg} style={{ marginLeft: '10px' }}>
            {showMsg ? 'Ẩn' : 'Hiện'} thông báo
        </button>

        {showMsg && <p>Đây là thông báo từ useToggle!</p>}
        </div>
    );
};

// Component App chính
const App: React.FC = () => {
    return (
        // 1. Bọc toàn bộ ứng dụng bằng ThemeProvider
        <ThemeProvider>
        {/* 2. Component này có thể đọc/thay đổi theme */}
        <ThemeSwitcher />

        {/* 3. Feature component cũng có thể đọc theme */}
        <ProductList />
        </ThemeProvider>
    );
};

export default App;