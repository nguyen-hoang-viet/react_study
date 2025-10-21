// Hàm này nhận vào một con số và trả về chuổi tiền tệ Việt Nam (VNĐ)
// Hàm này được dùng ở bất kì đâu khi cần hiển thị giá tiền

export const formatCurrency = (amount: number): string =>{
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(amount)
}