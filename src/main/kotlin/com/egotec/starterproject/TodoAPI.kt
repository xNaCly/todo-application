package com.egotec.starterproject

import com.egotec.starterproject.entity.TodoEntity
import javax.ws.rs.*
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

@Path("/todo")
class TodoAPI {

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    fun getTodo(@PathParam("id") id: String): TodoEntity {
        val state = ThreadState.begin()
        return state.em.find(TodoEntity::class.java, id) ?: throw WebApplicationException(Response.Status.NOT_FOUND)
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    fun createTodo(todoEntity: TodoEntity): TodoEntity {
        val state = ThreadState.begin()
        state.em.transaction.begin()
        state.em.merge(todoEntity)
        state.em.transaction.commit()
        return todoEntity
    }

    // TODO:
    // getAllTodos
    // deleteTodo
    // updateTodo

}