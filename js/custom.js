$(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
        });

$(document).ready(function (){
            $('#btn-edit-profil').on('click', function(){
                $('#btn-save-profil').removeClass('disabled');
                $('.readonly').attr('readonly', false);
            });
});

$('#datepicker').datepicker({
            uiLibrary: 'bootstrap4'
        });