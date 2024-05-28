  <script>
        document.addEventListener("DOMContentLoaded", function() {
            const menuItems = document.querySelectorAll(".menu-item");
            let currentIndex = 0;

            function mostrarPlato(index) {
                menuItems.forEach((item, i) => {
                    if (i === index) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                });
            }

            mostrarPlato(currentIndex);

            document.getElementById("btnAnterior").addEventListener("click", function() {
                currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
                mostrarPlato(currentIndex);
            });

            document.getElementById("btnSiguiente").addEventListener("click", function() {
                currentIndex = (currentIndex + 1) % menuItems.length;
                mostrarPlato(currentIndex);
            });
        });
    </script>

    <button id="btnAnterior">Anterior</button>
    <button id="btnSiguiente">Siguiente</button>
</body>
</html>
