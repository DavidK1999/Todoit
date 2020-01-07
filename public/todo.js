


$(() => {
    const $addTodoButton = $('.addTodo');
    const $complete = $('.complete');
    const $todo = $('.todo');
    const $toggle = $('.toggle');
    const $description = $('.description');
    const text = $description.text();
    const $todoDiv = $('.todos');

    let path = window.location.pathname; 
    let user = path.slice(8, path.length);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    
    const createTodoForm = () => {
        const $todo = $(`
        <form class ="todo-creator" action="" method="POST">
        <input type="text" name="description" placeholder="Description" required>
        <input type="text" name="dateCreated" value="${months[new Date().getMonth()]} ${new Date().getDate()}" readonly>
        <input class="hidden" type="text" name="user" value="${user}">
        <input class="hidden" type="text" name="completed" value="false">
        <div class="todoHandler">
        <button type="submit">Add</button>
        <button class="cancel" type="button">Cancel</button>
        </div>
        </form>`);
        $todoDiv.append($todo);
        $('.cancel').click((e) => {console.log($(e.target).parent().parent().remove())});
    }

    const completeTodo = () => {
        $todo.attr('action', '?_method=DELETE');
        $complete.attr('value', true);
    }

    const editTodo = (e) => {
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
    };
    
    $addTodoButton.click(createTodoForm);
    $complete.click(completeTodo);
    $toggle.on('click', (e) => {editTodo(e)});
});

    


    






