let products = [];

function addProduct(event) {
    event.preventDefault();
    let productName = document.getElementById('productName').value;
    products.push(productName);
    document.getElementById('productName').value = '';
    displayProducts();
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

function editProduct(index) {
    let newName = prompt("Nhập tên mới cho sản phẩm:", products[index]);
    if (newName !== null && newName.trim() !== "") {
        products[index] = newName.trim();
        displayProducts();
    }
}

function displayProducts() {
    let productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach((product, index) => {
        productList.innerHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${product}</td>
                        <td>
                            <button onclick="editProduct(${index})">Sửa</button>
                            <button onclick="deleteProduct(${index})">Xóa</button>
                        </td>
                    </tr>
                `;
    });
}

