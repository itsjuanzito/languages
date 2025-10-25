/* basicamente, enums servem pra enumerar coisas que você possa utilizar em qualquer parte do seu projeto sem ter que ficar colocando muito esfoço, basicamente, são pra definir valores fixos */

enum Clothingsizes {
    Small = "Pequeno", // pode ser número, string e etc, o nome da enum pode ser em minusculo também
    Medium = "Médio",
    Large = "Grande"
}

enum Colors {
    Green, // Quando não tem valor predefinido, automaticamente assume números, começando do 0, como se fosse array
    Red,
    Blue
}

const cloth = {
    color: Colors.Green,
    size: Clothingsizes.Small
}

/* aqui já dá pra entender a utilidade, poderiamos ficar criando outros cloths e etc, ou formos trocar o enum small, vai alterar todos sem precisar ficar trocando um por um */