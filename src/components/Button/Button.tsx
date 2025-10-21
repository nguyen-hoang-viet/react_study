import React from 'react';

// Định nghĩa props mà Button cần
interface ButtonProps {
    onClick: () => void;        // Bắt buộc phải có hàm onClick
    children: React.ReactNode   // Nội dung bên trong button
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    disabled = false,
}) => {
    const buttonStyle: React.CSSProperties = {
        padding: '8px 16px',
        fontSize: '16px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        backgroundColor: disabled ? '#ccc' : '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
    };

    return (
        <button onClick={onClick} style={buttonStyle} disabled={disabled}>
            {children}
        </button>
    );
};