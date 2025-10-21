import { useState, useCallback } from 'react';

// Hook này trả về một trạng thái boolean và một hàm để đảo ngược nó.
// Rất hữu dụng cho việc bật/tắt modal, menu, v.v.
export const useToggle = (
    initialState: boolean = false
): [boolean, () => void] => {
    const [state, setState] = useState(initialState);

    // Dùng useCallback để đảm bảo hàm toggle không bị tạo lại mỗi lần render
    const toggle = useCallback(() => {
        setState((prevState) => !prevState);
    }, []);

    return [state, toggle];
};