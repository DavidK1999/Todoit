console

$(() => {
    const $addTodoButton = $('.addTodo');
    const $todoDiv = $('.todos');

    $addTodoButton.on('click', () =>{
        let date = new Date();
        const $todo = $(`
            <form action="/todo" method="POST">
                <input type="text" name="description" placeholder="Description">
                <div class="todoHandler">
                    <button class="btn btn-primary btn-sm" type="submit">Add</button>
                    <a href="#">Cancel</a>
                </div>
            </form>
        `)
        $todoDiv.append($todo);
    });;




});