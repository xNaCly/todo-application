package com.egotec.starterproject

import jakarta.persistence.Persistence


object ThreadState {
    /**
     * Create new state object and set it to thread.
     */
    fun begin() = State()
    

    private val factory = Persistence.createEntityManagerFactory(
        "db", mapOf(
            "jakarta.persistence.jdbc.url" to System.getenv("MYSQL_URL") as String,
            "jakarta.persistence.jdbc.user" to System.getenv("MYSQL_USER") as String,
            "jakarta.persistence.jdbc.password" to System.getenv("MYSQL_PASSWORD")
        )
    )

    @Synchronized
    fun createEntityManager() = factory.createEntityManager()!!
}