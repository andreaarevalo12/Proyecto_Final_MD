from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split


modelo= DecisionTreeClassifier(random_state=0)


Edad_esposa = 24
educ_de_la_esposa = 2
educ_del_esposo = 3
num_de_hijos_nacidos = 3
religion_de_la_esposa = 1
la_esposa_trabaja_ahora = 1
ocupa_del_esposo = 2
indice_de_nivel_de_vida = 3
exposicion_a_los_medios = 0


prediccion = modelo.predict(Edad_esposa, educ_de_la_esposa, educ_del_esposo, num_de_hijos_nacidos, religion_de_la_esposa, la_esposa_trabaja_ahora, indice_de_nivel_de_vida, exposicion_a_los_medios)
console.log(prediccion)


# score=modelo.score(train_x,train_y)