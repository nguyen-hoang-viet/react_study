import { Product } from '../../types/product'

// giả lập DB
const fakeDatabase: Product[] = [
    { id: 'p1', name: 'Iphone 12 Promax', price: 30000000},
    { id: 'p2', name: 'Samsung Galaxy', price: 28000000},
];


// Hàm này giả vờ gọi API để lấy danh sách sản phẩm.
// Nó trả về một Promise, mất 1 giây để hoàn thành.
export const fetchProducts = (): Promise<Product[]> => {
    console.log('API: Bắt đầu gọi lấy sản phẩm...');
    return new Promise((resolve) => {
        setTimeout(() => {
        console.log('API: Trả về dữ liệu thành công.');
        resolve(fakeDatabase);
        }, 1000); // Giả lập độ trễ mạng 1 giây
    });
};