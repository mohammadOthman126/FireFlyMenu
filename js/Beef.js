document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.gridItem');

    let hasVisibleItems = false;

    items.forEach(item => {
        const contentText = item.querySelector('h1.content').textContent.toLowerCase();
        const priceText1 = item.querySelector('h1.price').textContent.toLowerCase();
        const priceText2 = item.querySelector('h3.price').textContent.toLowerCase();

        if (contentText.includes(query) || priceText1.includes(query) || priceText2.includes(query) ) {
            item.style.display = ''; 
            hasVisibleItems = true;
        } else {
            item.style.display = 'none'; 
        }
    });

    if (hasVisibleItems) {
        document.getElementById('reloadButton').style.display = 'block';
        document.getElementById('searchButton').style.display = 'none';
         
    } else {
        alert('لا توجد عناصر تطابق البحث!');
        document.getElementById('reloadButton').style.display = 'block'; 
        document.getElementById('searchButton').style.display = 'none';
       
    }
});

document.getElementById('reloadButton').addEventListener('click', function() {
    location.reload();
});
