package com.egotec.starterproject

class State {
    var em = ThreadState.createEntityManager() // Die JPA Datenbankverbindung.

    /**
     * Transaktion festschreiben.
     *
     * Alle Änderungen werden in die Datenbank geschrieben. Die Änderungen sind nun für alle Transaktionen, die danach
     * gestartet werden, sichtbar.
     */
    fun commit(): State {
        em.transaction.commit()
        return this
    }

    /**
     * Transaktion verwerfen.
     *
     * Alle Änderungen werden verworfen. Keine Änderung war jemals von einer anderen Transaktion aus sichtbar. Die
     * Methode wird automatisch aufgerufen, wenn die Integrität der Daten beim Speichern nicht gegeben ist.
     */
    fun rollback(): State {
        if (em.transaction.isActive) em.transaction.rollback()
        return this
    }
}