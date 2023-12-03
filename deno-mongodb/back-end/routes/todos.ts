import { Router } from 'https://deno.land/x/oak/mod.ts';
import { ObjectId } from 'https://deno.land/x/mongo/mod.ts';

import { getDb } from '../helpers/db_client.ts';

const router = new Router();

const collection = 'todos';

interface Todo {
	id?: string;
	text: string;
}

router.get('/todos', async (ctx) => {
	const todos = await getDb()
		.collection(collection)
		.find()
		.toArray();

	const transformedTodos = todos
		.map((todo: { _id: ObjectId; text: string }) => {
			// return { id: todo._id.$oid, text: todo.text };
			return { id: todo._id.toString(), text: todo.text };
		});

	ctx.response.body = { todos: transformedTodos };
});

router.post('/todos', async (ctx) => {
	const data = await ctx.request.body().value;

	const newTodo: Todo = {
		text: data.text,
	};

	const id = await getDb()
		.collection(collection)
		.insertOne(newTodo);

	newTodo.id = id.$oid;

	ctx.response.body = { message: 'Created todo!', todo: newTodo };
});

router.put('/todos/:todoId', async (ctx) => {
	const tid = ctx.params.todoId!;
	const data = await ctx.request.body().value;

	await getDb()
		.collection(collection)
		.updateOne(
			{ _id: new ObjectId(tid) },
			{ $set: { text: data.text } }
		);

	ctx.response.body = { message: 'Updated todo' };
});

router.delete('/todos/:todoId', async (ctx) => {
	const tid = ctx.params.todoId!;

	await getDb()
		.collection(collection)
		.deleteOne({ _id: new ObjectId(tid) });

	ctx.response.body = { message: 'Deleted todo' };
});

export default router;
