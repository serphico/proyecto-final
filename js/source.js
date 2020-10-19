$( document ).ready(function() {
    for (let i = 1; i <= 3; i++) {
        $('.contenedorImgDestacado'+i).click(modal);        
   
    

    $('.cerrarModal'+i).click(cerrarModal);

    function modal(){
        $('.contenedorModal'+i).addClass('activo');
    }

    function cerrarModal(){
        $('.contenedorModal'+i).removeClass('activo');
    }

}


});