document.addEventListener('DOMContentLoaded', function() {
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const filterForm = document.getElementById('filterForm');

    
    priceRange.addEventListener('input', function() {
        priceValue.textContent = priceRange.value;
        filterProducts();
    });

    
    function filterProducts() {
        const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
        const maxPrice = parseFloat(priceRange.value);

        document.querySelectorAll('.product-item').forEach(item => {
            const itemPrice = parseFloat(item.getAttribute('data-price'));
            const itemCategory = item.getAttribute('data-category');
            const shouldDisplay = (selectedCategories.length === 0 || selectedCategories.includes(itemCategory)) && (itemPrice <= maxPrice);
            item.style.display = shouldDisplay ? 'block' : 'none';
        });
    }

    
    filterForm.addEventListener('change', filterProducts);

    
    filterProducts();
});
        
