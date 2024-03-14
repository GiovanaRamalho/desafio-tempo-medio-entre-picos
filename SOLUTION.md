# Para startar o programa rode:
node index.js

não foi necessario a instalação de nunhuma lib ou plugin.



Antes de começar minha solução, passei alguns minutos lendo e relendo a problematica para ter a certeza de ter entendido corretamente, em seguida começei a pensar na solução.

minha abordagem foi, dividi o problema em partes:

--> Primeiro, tentei entender como faria para identificar no codigo os picos verdadeiros. E o fiz da seguinte forma:

    criei um array para armazenar os valores dos picos, 
    em seguida, com um laço de repetição fui percorrendo cada dado de entrada e verificando se cada dado(pico) era maior que o elemento anterior, maior que o elemento seguinte e maior ou igual a 50.(pois essas eram as condições para um pico ser considerado verdadeiro).

    se o dado satisfizesse essas condições era considerado valido e colocado no array de picos.

--> Segundo, tentar calcular o tempo médio entre os picos:
 
    criei um outro laço de repetição que percorrer o array picos e calcula o tempo entre os picos, subtraindo o indice do pico atual pelo indice do pico anterior, isso nos dá o numero de elementos de um pico até outro, que é o tempo decorrido entre eles.

    depois, utilizei a função reduce do javaScript para somar todos os tempos entre os picos consecutivos, em seguida dividi esse valor pelo numero total de intervalos entre os picos, (que nada mais é do que o numero de picos menos 1).

--> E por ultimo converter o tempo medio para minutos e segundos.

    primeiro, dividi o tempo médio em segundos por 60 para obter a parte inteira dos minutos, depois calculei os segundos restantes da divisão que são os segundos restantes após a divisão inteira.

    para isso utilizei a Math do javaScript, uma lib nativa que é otima para lidar com calculos matematicos.

    por ultimo formatei os dados para o formato "minutos e segundos"

--> Por ultimo usei a file System do Node para ler arquivos de textos.


para mim a parte mais dificil foi entender como caluclar o tempo médio entre os picos, demorei um pouco a entender que o intervalo entre os pico seria o numero de picos menos 1.