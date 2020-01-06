


$(() => {
    const $addTodoButton = $('.addTodo');
    const $toggle = $('.toggle');
    const $description = $('.description');
    const text = $description.text();
    const $todoDiv = $('.todos');

    let path = window.location.pathname; 
    let user = path.slice(8, path.length);
    let date = new Date();

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    $addTodoButton.on('click', (e) =>{
        const $todo = $(`
        <form class ="todo-creator" action="" method="POST">
            <input type="text" name="description" placeholder="Description">
            <input type="text" name="dateCreated" value="${months[new Date().getMonth()]} ${new Date().getDate()}" readonly>
            <input class="hidden" type="text" name="user" value="${user}">
            <input class="hidden" type="text" name="completed" value="false">
                    <div class="todoHandler">
                        <button type="submit">Add</button>
                        <button type="button"><a href="#">Cancel</a></button>
                    </div>
        </form>
        `);
        // console.log($todoDiv);
        $todoDiv.append($todo);
    });

    $('.complete').on('click', (e) => {
        $('.todo').attr('action', '?_method=DELETE');
        $('.complete').attr('value', true);
    });

    $('.toggle').on('click', (e) => {
        $(e.target).toggleClass('save');
        
        let localDescription = $(e.target).parent().parent().parent().find('.description');
        if($(e.target).text() === 'Save') {
            $(e.target).text('Edit');
            $('.todo').attr('action', '')
            localDescription.attr('readonly', true);
            
        } else {
            $(e.target).text('Save');
            localDescription.attr('readonly', false);
            $(e.target).on('click', () => {
                $('.todo').attr('action', '?_method=PUT');
                $(e.target).attr('type', 'submit');
            });
        }
        
        // $('.save').on('click', (e) => {
        //     alert('Hello');
        //     $('.save').attr('type', 'submit');
        // });
    });
    


    // $('.toggle').on('click', (e) => {
    //     if($(e.target).text() === "Save") {
    //         $(e.target).text('Edit');
    //     } else {
    //         $(e.target).text('Save');
    //         $(e.target).attr('type', 'submit');
    //         let localDescription = $(e.target).parent().parent().parent().find('.description');
    //         localDescription.attr('readonly', false);
    //         $('.save').attr('type', 'submit');
    //     }
    // });
});





