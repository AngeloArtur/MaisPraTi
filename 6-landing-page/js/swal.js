function showModal(gameUrl) {
    console.log('tetnou abrit')
    Swal.fire({
        title: "Você deseja comprar esse item?",
        text: "Do you want to continue",
        showCancelButton: true,
        icon: "info",
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
    }).then((result) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            },
        });
        if (result.isDismissed) {
            Toast.fire({
                icon: "warning",
                title: "Compra cancelada",
            });
        } else {
            window.location.href = gameUrl
        }
    });
}

function errorModal() {
    const email = document.getElementById("email-input").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        Swal.fire({
            title: "Seu email não está em um formato adequado",
            text: `Por favor verifique se seu email está correto ${email}`,
            icon: "error",
            confirmButtonText: "Tentar novamente",
        });
        document.getElementById("email-input").value = "";
    } else {
        console.log("não está tipo email");
    }
}
