import { PrismaClient } from "@prisma/client";

class Database {
	private db: PrismaClient;

	constructor() {
		this.open();
	}

	private open() {
		this.db = new PrismaClient();
	}

	async insertNewTask(title: string): Promise<Todo> {
		let createdAt = new Date();

		return await this.db.todo.create({
			data: {
				title,
				createdAt,
				finished: false,
			},
		});
	}

	async getTaskById(id: number): Promise<Todo | null> {
		return await this.db.todo.findFirst({
			where: { id },
		});
	}

	async getTasks(): Promise<Todo[] | null> {
		return await this.db.todo.findMany();
	}

	async updateTaskTitleById(id: number, title: string) {
		return await this.db.todo.update({
			where: {
				id,
			},
			data: {
				title,
			},
		});
	}

	async deleteTaskById(id: number): Promise<Todo> {
		return await this.db.todo.delete({
			where: { id },
		});
	}

	close() {
		this.db.$disconnect();
	}
}

export default new Database();
