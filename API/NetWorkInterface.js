

// Import thư viện 'ip' để kiểm tra tính hợp lệ của địa chỉ IP và subnet mask

// Hàm tính toán phạm vi mạng
export function calculateNetworkRange(ipAddress, subnetMask) {
  try {
    // Chuyển đổi địa chỉ IP và subnet mask thành các thành phần số nguyên
    const ipParts = ipAddress.split(".").map(Number);
    const subnetParts = subnetMask.split(".").map(Number);

     // Kiểm tra tính hợp lệ của địa chỉ IP và subnet mask
    

    // Tính toán địa chỉ mạng
    const networkParts = ipParts.map((part, index) => {
        return part & subnetParts[index];
    });
    
    // Tính toán địa chỉ mạng đầu và cuối
    const networkRangeStart = networkParts.map((part, index) =>{ return index=== 3 ? part | 1 : part}).join(".");
    const networkRangeEnd = networkParts.map((part, index) => {
      return index === 3 ? part | (255 - subnetParts[index]-1) : part | 255;
    }).join(".");

    return `${networkRangeStart} - ${networkRangeEnd}`;
  } catch (error) {
    return "";
  }
}

