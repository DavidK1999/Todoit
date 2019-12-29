console

$(() => {
    const $addTodoButton = $('.addTodo');
    const $todoDiv = $('.todos');

    $addTodoButton.on('click', (e) =>{
        let date = new Date();
        const $todo = $(`
            <form  id="send" action="/todoit" method="POST">
                <input type="text" name="description" placeholder="Description">
                <input type="text" name="dateCreated" value=${date}>
                <div class="todoHandler">
                    <button class="btn btn-primary btn-sm" type="submit">Add</button>
                    <a href="#">Cancel</a>
                </div>
            </form>
        `)
        $todoDiv.append($todo);
    });
});





