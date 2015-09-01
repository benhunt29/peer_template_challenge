/**
 * Created by allannielsen on 01/09/15.
 */

$(document).ready(function(){
    $('.submit-button').on('click',function(e){
        e.preventDefault();

        var submitData= {message: $(this).prev().val(), id:$(this).prev().attr('data-id')};

        console.log('this is event handler: ',submitData);

        $.ajax({
            type: 'POST',
            dataType: 'json',
            data: submitData,
            url: '/messages'
        }).done(function(res){
            console.log('done:',res);
        }).always(function(){
            console.log('AJAX call complete');
        }).fail(function(jqXHR, textStatus, errorThrown){
            console.log(errorThrown);
        });
    });
});