const nombre = process.env.USERNAME;
const lenguaje = process.env.LANGUAGE;

function main() {
    console.log(`¡Hola, ${nombre} desde GitHub! Veo que tu lenguaje favorito es ${lenguaje}.`);
}

main();
