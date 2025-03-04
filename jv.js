async function gethome() {
    const res= await fetch('https://k23-lt-frontend.hoanglong.dev/home')
    const data= await res.json();
    document.getElementById("home-title").innerText=data.title;
    document.getElementById("hien-title").innerText=data.content;
    document.getElementById("anh-title").scr = data.image;
    
    console.log(data)
}
gethome()
async function getabout() {
    const res= await fetch('https://k23-lt-frontend.hoanglong.dev/about')
    document.getElementById("anh-title").scr = data.image;
    console.log(data)
}
    getabout()

    
async function getMenu() {
    try {
        // Bỏ tham số length=1 để lấy tất cả các món
        const res = await fetch('https://k23-lt-frontend.hoanglong.dev/menu');
        const data = await res.json();
        if (Array.isArray(data)) {
            const menuContainer = document.getElementById('.menu__container');
            // if (menuContainer) {
                // Hiển thị tất cả món từ API
                menuContainer.innerHTML = data.map(item => `
                    <div class="menu__content">
                        <img src="${item.image}" alt="${item.name}" class="menu__img">
                        <h3 class="menu__name">${item.name}</h3>
                        <span class="menu__detail">${item.detail || 'Món đặc biệt'}</span>
                        <span class="menu__preci">${item.price?.toLocaleString()}đ</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                `).join('');
            // }
        }
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu menu:', error);
    }
}
getMenu()



