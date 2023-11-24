
// Call render on page load to display existing products
render();
var selectedImage = document.getElementById('selectedImage');
function addProduct() {
  
    var productID = document.getElementById('productID').value;
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productfirm = document.getElementById('productfirm').value;
    var productCPU= document.getElementById('productCPU').value;
    var productRAM= document.getElementById('productRAM').value;
    var productSSD= document.getElementById('productSSD').value;
    var productVGA= document.getElementById('productVGA').value;

    // Check if an image is selected
    var productImageInput = document.getElementById('productImageInput');
    var productImage = productImageInput.files.length > 0 ? productImageInput.files[0] : null;

    if (productName && productPrice) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var productImageData = e.target.result;

            // Lưu thông tin sản phẩm vào local storage
            var product = {
                ID: productID,
                name: productName,
                price: productPrice,
                firm: productfirm,
                image: productImageData,
                CPU: productCPU,
                RAM: productRAM,
                SSD: productSSD,
                VGA: productVGA
            };

            // Kiểm tra xem danh sách sản phẩm đã tồn tại trong local storage chưa
            var products = JSON.parse(localStorage.getItem('products')) || [];

            // Thêm sản phẩm mới vào danh sách
            products.push(product);

            // Lưu lại danh sách sản phẩm vào local storage
            localStorage.setItem('products', JSON.stringify(products));

            // Call the render function to update the table
            render();
         
            alert('Sản phẩm đã được thêm vào dữ liệu.');
            document.getElementById("frmnhapsp").reset();
        };

        if (productImage) {
            reader.readAsDataURL(productImage);
        } else {
            // If no image is selected, set a default image (you can modify this as needed)
            reader.readAsDataURL(new Blob([]));
        }
    } else {
        alert('Vui lòng điền đầy đủ thông tin cho sản phẩm.');
    }
}
function editProduct(id) {
// Get existing products from local storage
var products = JSON.parse(localStorage.getItem('products')) || [];

// Find the product by ID
var productIndex = products.findIndex(product => product.ID === id);

// Populate the edit modal with current product data
if (productIndex !== -1) {
    document.getElementById('productID').value = products[productIndex].ID; // Set the product ID for saving
    document.getElementById('editProductName').value = products[productIndex].name;
    document.getElementById('editProductPrice').value = products[productIndex].price;
    document.getElementById('editProductfirm').value = products[productIndex].firm;
    document.getElementById('editProductCPU').value = products[productIndex].CPU;
    document.getElementById('editProductRAM').value = products[productIndex].RAM;
    document.getElementById('editProductSSD').value = products[productIndex].SSD;
    document.getElementById('editProductVGA').value = products[productIndex].VGA;

    // Display existing image in the modal
    var existingImage = document.getElementById('existingImage');
    existingImage.src = products[productIndex].image;

    // Display the selected image (if any)
    var selectedImage = document.getElementById('selectedImage');
    selectedImage.style.display = 'none';

    var editModal = document.getElementById('editModal');
    editModal.style.display = 'block';
} else {
    alert("Product not found.");
}
}

function removeExistingImage() {
// Clear the existing image and reset the input field
var existingImage = document.getElementById('existingImage');
existingImage.src = '';

var editProductImageInput = document.getElementById('editProductImageInput');
editProductImageInput.value = '';
}

function saveEditedProduct() {
// Get existing products from local storage
var products = JSON.parse(localStorage.getItem('products')) || [];

// Find the product by ID
var productIndex = products.findIndex(product => product.ID === document.getElementById('productID').value);

// Update the product if found
if (productIndex !== -1) {
    // Update the product properties
    products[productIndex].name = document.getElementById('editProductName').value;
    products[productIndex].price = document.getElementById('editProductPrice').value;
    products[productIndex].firm = document.getElementById('editProductfirm').value;
    products[productIndex].CPU = document.getElementById('editProductCPU').value;
    products[productIndex].RAM = document.getElementById('editProductRAM').value;
    products[productIndex].SSD = document.getElementById('editProductSSD').value;
    products[productIndex].VGA = document.getElementById('editProductVGA').value;

    // Update image if a new one is selected
    var editProductImageInput = document.getElementById('editProductImageInput');
    if (editProductImageInput.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function(e) {{
            products[productIndex].image = e.target.result;
            selectedImage.src = e.target.result;
            selectedImage.style.display = 'block';}
            // Update local storage
            localStorage.setItem('products', JSON.stringify(products));

            // Close the edit modal
            closeEditModal();

            // Call render to update the table
            render();
        };
        reader.readAsDataURL(editProductImageInput.files[0]);} 
        

        else {
            var existingImage = document.getElementById('existingImage');
            if (existingImage.src) {
                products[productIndex].image = existingImage.src;
            } else {
                products[productIndex].image = null;
            }

        // Update local storage
        localStorage.setItem('products', JSON.stringify(products));

        // Close the edit modal
        closeEditModal();

        // Call render to update the table
        render();
    }
    
} else {
    alert("Product not found.");
}
}

function closeEditModal() {
    var editModal = document.getElementById('editModal');
    editModal.style.display = 'none';
}

function render() {
    // Get existing products from local storage
    var products = JSON.parse(localStorage.getItem('products')) || [];

    // Reinitialize the table header
    var table = `<tr>
    <th>ID</th>
    <th>Tên</th>
    <th>Giá</th>
    <th>Hãng</th>
    <th>CPU</th>
    <th>RAM</th>
    <th>SSD</th>
    <th>VGA</th>
    <th>Hình</th>
    <th>Action</th>
                </tr>`;

    // Populate the table with product data
    for (let i = 0; i < products.length; i++) {
        table += `<tr>
                    <td>${products[i].ID}</td>
                    <td>${products[i].name}</td>
                    <td>${products[i].price}</td>
                    <td>${products[i].firm}</td>
                    <td>${products[i].CPU}</td>
                    <td>${products[i].RAM}</td>
                    <td>${products[i].SSD}</td>
                    <td>${products[i].VGA}</td>
                    <td><img src="${products[i].image}" alt="Product Image" style="width: 240px; height: 200px;"></td> /* Tứn was here */
                    <td>
                        <button onclick="editProduct('${products[i].ID}')"> Edit </button>
                        <button onclick="deleteProduct('${products[i].ID}')">Delete</button>
                    </td>
                </tr>`;
    }

    // Update the table content
    document.getElementById("render").innerHTML = table;
}
function deleteProduct(id) {
  var result=  confirm("Ban co muon xoa san pham");
  if(result == true) {
// Get existing products from local storage
var products = JSON.parse(localStorage.getItem('products')) || [];

// Find the product index by ID
var productIndex = products.findIndex(product => product.ID === id);

// Delete the product if found
if (productIndex !== -1) {
// Remove the product from the array

products.splice(productIndex, 1);

// Save the updated products to local storage
localStorage.setItem('products', JSON.stringify(products));

// Call render to update the table
render();

alert('Sản phẩm đã được xóa khỏi dữ liệu.');
} else {
alert('Không tìm thấy sản phẩm để xóa.');}
}
else  alert("Bạn không xóa sản phẩm");
}