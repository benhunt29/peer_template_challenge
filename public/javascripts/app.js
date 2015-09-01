/**
 * Created by allannielsen on 01/09/15.
 */
var source;
function getNewMessages(id){
    var messageCall = $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/messages/' + id
    });
    messageCall.done(function(res){
       console.log(res);
        appendNewMessage(res);
    });
    messageCall.always(function() {
        console.log('AJAX call complete');
    });
    messageCall.fail(function(jqXHR, textStatus, errorThrown){
        console.log(errorThrown);
    });
}

function appendNewMessage(message){

    console.log(message[0].id);

    var template = Handlebars.compile(source);

    message.forEach(function(elem,index){
        console.log('#newMessage'+elem.id);
        $('#newMessage'+elem.id).append(template(elem,{"comment":elem.comment}));
    })
}



$(document).ready(function(){
    source = $('#messageTemplate').html();
    console.log(source);
    $('.submit-button').on('click',function(e){
        e.preventDefault();
        var $id = $(this).prev().attr('data-id');
        var submitData= {comment: $(this).prev().val(), id:$(this).prev().attr('data-id')};

        console.log('this is event handler: ',submitData);

        $.ajax({
            type: 'POST',
            dataType: 'json',
            data: submitData,
            url: '/messages'
        }).done(function(res){
            console.log('done:',res);
            getNewMessages($id);
        }).always(function(){
            console.log('AJAX call complete');
        }).fail(function(jqXHR, textStatus, errorThrown){
            console.log(errorThrown);
        });
    });
});