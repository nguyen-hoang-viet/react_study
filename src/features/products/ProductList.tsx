import React, { useState, useEffect } from 'react';

// Import Types
import { Product } from '../../types/product';

// Import API
import { fetchProducts } from '../../api/services/productApi';

// Import Utils
import { formatCurrency } from '../../utils/currency';

// Import Constants
import { MESSAGES } from '../../constants/messages';

// Import Components
import { Button } from '../../components/Button/Button';

// Import Store (Hook)
import { useTheme } from '../../store/ThemeContext';

export const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { theme } = useTheme(); // Lấy theme từ global store

    // Hàm để tải dữ liệu
    const loadProducts = async () => {
        setIsLoading(true);
        try {
        const data = await fetchProducts(); // Gọi API
        setProducts(data);
        } catch (error) {
        console.error('Lỗi khi tải sản phẩm:', error);
        } finally {
        setIsLoading(false);
        }
    };

    // Tự động gọi hàm loadProducts khi component được render lần đầu
    useEffect(() => {
        loadProducts();
    }, []); // Mảng rỗng [] nghĩa là chỉ chạy 1 lần

    // Style dựa trên theme từ Context
    const listStyle: React.CSSProperties = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '20px',
    };

    return (
        <div style={listStyle}>
        <h2>Danh sách sản phẩm (Theme: {theme})</h2>

        {/* Dùng Button tái sử dụng từ src/components */}
        <Button onClick={loadProducts} disabled={isLoading}>
            {MESSAGES.REFRESH}
        </Button>

        {/* Hiển thị thông báo loading */}
        {isLoading && <p>{MESSAGES.LOADING}</p>}

        {/* Hiển thị danh sách sản phẩm */}
        {!isLoading && (
            <ul>
            {products.map((product) => (
                <li key={product.id}>
                {product.name} -{' '}
                <strong>{formatCurrency(product.price)}</strong> {/* Dùng hàm util */}
                </li>
            ))}
            </ul>
        )}
        </div>
    );
};