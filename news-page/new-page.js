document.addEventListener("DOMContentLoaded", () => {
    const blocksPerPage = 9; // Số block trên mỗi trang
    const blocks = document.querySelectorAll('.block');
    const totalPages = Math.ceil(blocks.length / blocksPerPage);
    const paginationContainer = document.querySelector('.pagination');
    let currentPage = 1;

    // Hiển thị các block theo trang
    function showPage(page) {
        blocks.forEach((block, index) => {
            block.classList.remove('active');
            if (index >= (page - 1) * blocksPerPage && index < page * blocksPerPage) {
                block.classList.add('active');
            }
        });
        currentPage = page;
        updatePagination();
    }

    // Cập nhật giao diện phân trang
    function updatePagination() {
        paginationContainer.innerHTML = '';

        // Nút "Trang trước"
        const prevButton = document.createElement('button');
        prevButton.textContent = '«';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => showPage(currentPage - 1));
        paginationContainer.appendChild(prevButton);

        // Hiển thị các số trang
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 || // Trang đầu
                i === totalPages || // Trang cuối
                (i >= currentPage - 1 && i <= currentPage + 1) // Các trang gần trang hiện tại
            ) {
                const pageButton = document.createElement('button');
                pageButton.textContent = i;
                pageButton.classList.toggle('active', i === currentPage);
                pageButton.addEventListener('click', () => showPage(i));
                paginationContainer.appendChild(pageButton);
            } else if (
                (i === currentPage - 2 || i === currentPage + 2) &&
                totalPages >= 4
            ) {
                const ellipsis = document.createElement('span');
                ellipsis.textContent = '...';
                paginationContainer.appendChild(ellipsis);
            }
        }

        // Nút "Trang sau"
        const nextButton = document.createElement('button');
        nextButton.textContent = '»';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => showPage(currentPage + 1));
        paginationContainer.appendChild(nextButton);
    }

    // Hiển thị trang đầu tiên
    showPage(1);
});

