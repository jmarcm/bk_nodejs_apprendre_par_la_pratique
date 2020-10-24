# Définition

Une promesse est **un objet retourné immédiatement**
mais dont le **résultat est obtenu plus tard** de manière asynchrone.
Cette résolution est soit _positive_ soit _négative_.

## Collection de promesses

`Promise.all` est une méthode statique de la clasee `Promise`.
Elle accepte un tableau de promesses et en retourne elle-même une.
Cette dernière est résolue

-   positivement si **toutes** les promesses résussissent
-   négativement dès que **l'une d'entre elles** échouent.
